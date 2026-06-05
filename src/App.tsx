import { useMemo, useState } from 'react';
import { wordCards, type WordCard } from './data/words';

const praiseMessages = ['כָּל הַכָּבוֹד!', 'מְעוּלֶה!', 'יָפֶה מְאֹד!', 'אַתְּ/אַתָּה אַלוּפָה/אַלוּף!'];

function shuffle<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5);
}

function createOptions(answer: WordCard): WordCard[] {
  const distractors = shuffle(wordCards.filter((card) => card.id !== answer.id)).slice(0, 2);
  return shuffle([answer, ...distractors]);
}

function App() {
  const [deck, setDeck] = useState<WordCard[]>(() => shuffle(wordCards));
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('בְּחַרִי אוֹ בְּחַר אֶת הַמִּלָּה שֶׁמַּתְאִימָה לַתְּמוּנָה');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const currentCard = deck[cardIndex];
  const options = useMemo(() => createOptions(currentCard), [currentCard]);
  const isFinished = cardIndex >= deck.length - 1 && isAnswered;

  const chooseWord = (choice: WordCard) => {
    if (isAnswered) {
      return;
    }

    setSelectedId(choice.id);
    setAttempts((currentAttempts) => currentAttempts + 1);
    setIsAnswered(true);

    if (choice.id === currentCard.id) {
      setScore((currentScore) => currentScore + 1);
      setFeedback(praiseMessages[Math.floor(Math.random() * praiseMessages.length)]);
    } else {
      setFeedback(`כִּמְעַט! הַמִּלָּה הַנְּכוֹנָה הִיא ${currentCard.word}`);
    }
  };

  const nextCard = () => {
    if (cardIndex < deck.length - 1) {
      setCardIndex((currentIndex) => currentIndex + 1);
      setFeedback('בְּחַרִי אוֹ בְּחַר אֶת הַמִּלָּה שֶׁמַּתְאִימָה לַתְּמוּנָה');
      setSelectedId(null);
      setIsAnswered(false);
    }
  };

  const restartGame = () => {
    setDeck(shuffle(wordCards));
    setCardIndex(0);
    setScore(0);
    setAttempts(0);
    setFeedback('בְּחַרִי אוֹ בְּחַר אֶת הַמִּלָּה שֶׁמַּתְאִימָה לַתְּמוּנָה');
    setSelectedId(null);
    setIsAnswered(false);
  };

  return (
    <main className="game-shell" dir="rtl">
      <section className="hero-card" aria-labelledby="game-title">
        <div className="top-bar">
          <div>
            <p className="eyebrow">משחק קריאה לילדים</p>
            <h1 id="game-title">לומדים לקרוא בעברית</h1>
          </div>
          <div className="score-card" aria-live="polite">
            <span>ניקוד</span>
            <strong>{score}</strong>
          </div>
        </div>

        <div className="progress-wrap" aria-label={`שאלה ${cardIndex + 1} מתוך ${deck.length}`}>
          <div className="progress-label">
            <span>שאלה {cardIndex + 1}</span>
            <span>מתוך {deck.length}</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${((cardIndex + Number(isAnswered)) / deck.length) * 100}%` }} />
          </div>
        </div>

        <div className="play-area">
          <div className="image-card">
            <img src={currentCard.image} alt={currentCard.alt} />
          </div>

          <div className="question-card">
            <p className="instruction">איזו מילה מתאימה לתמונה?</p>
            <div className="word-options" role="group" aria-label="אפשרויות מילים">
              {options.map((option: WordCard) => {
                const isCorrect = option.id === currentCard.id;
                const isSelected = option.id === selectedId;
                const resultClass = isAnswered && isCorrect ? 'correct' : isAnswered && isSelected ? 'wrong' : '';

                return (
                  <button
                    className={`word-button ${resultClass}`}
                    disabled={isAnswered}
                    key={option.id}
                    onClick={() => chooseWord(option)}
                    type="button"
                  >
                    {option.word}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className={`feedback ${isAnswered ? 'visible' : ''}`} aria-live="assertive">
          <span className="feedback-icon">{isAnswered && selectedId === currentCard.id ? '🌟' : '💡'}</span>
          <span>{feedback}</span>
        </div>

        <div className="actions">
          {isFinished ? (
            <div className="finish-card">
              <strong>סיימת את המשחק!</strong>
              <span>
                הצלחת {score} מתוך {attempts} ניסיונות.
              </span>
              <button className="primary-action" onClick={restartGame} type="button">
                לשחק שוב
              </button>
            </div>
          ) : (
            <button className="primary-action" disabled={!isAnswered} onClick={nextCard} type="button">
              לתמונה הבאה
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
