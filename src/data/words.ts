import apple from '../assets/images/apple.svg';
import banana from '../assets/images/banana.svg';
import ball from '../assets/images/ball.svg';
import bird from '../assets/images/bird.svg';
import book from '../assets/images/book.svg';
import cake from '../assets/images/cake.svg';
import car from '../assets/images/car.svg';
import cat from '../assets/images/cat.svg';
import chair from '../assets/images/chair.svg';
import dog from '../assets/images/dog.svg';
import fish from '../assets/images/fish.svg';
import flower from '../assets/images/flower.svg';
import hat from '../assets/images/hat.svg';
import house from '../assets/images/house.svg';
import moon from '../assets/images/moon.svg';
import shoe from '../assets/images/shoe.svg';
import star from '../assets/images/star.svg';
import sun from '../assets/images/sun.svg';
import train from '../assets/images/train.svg';
import tree from '../assets/images/tree.svg';

export type WordCard = {
  id: string;
  word: string;
  image: string;
  alt: string;
};

// To replace an image, put a new file in src/assets/images and update only the image import/path here.
export const wordCards: WordCard[] = [
  { id: 'apple', word: 'תַּפּוּחַ', image: apple, alt: 'תפוח אדום' },
  { id: 'house', word: 'בַּיִת', image: house, alt: 'בית' },
  { id: 'dog', word: 'כֶּלֶב', image: dog, alt: 'כלב' },
  { id: 'cat', word: 'חָתוּל', image: cat, alt: 'חתול' },
  { id: 'ball', word: 'כַּדּוּר', image: ball, alt: 'כדור' },
  { id: 'book', word: 'סֵפֶר', image: book, alt: 'ספר' },
  { id: 'sun', word: 'שֶׁמֶשׁ', image: sun, alt: 'שמש' },
  { id: 'moon', word: 'יָרֵחַ', image: moon, alt: 'ירח' },
  { id: 'flower', word: 'פֶּרַח', image: flower, alt: 'פרח' },
  { id: 'car', word: 'מְכוֹנִית', image: car, alt: 'מכונית' },
  { id: 'fish', word: 'דָּג', image: fish, alt: 'דג' },
  { id: 'bird', word: 'צִפּוֹר', image: bird, alt: 'ציפור' },
  { id: 'tree', word: 'עֵץ', image: tree, alt: 'עץ' },
  { id: 'chair', word: 'כִּסֵּא', image: chair, alt: 'כיסא' },
  { id: 'shoe', word: 'נַעַל', image: shoe, alt: 'נעל' },
  { id: 'hat', word: 'כּוֹבַע', image: hat, alt: 'כובע' },
  { id: 'star', word: 'כּוֹכָב', image: star, alt: 'כוכב' },
  { id: 'train', word: 'רַכֶּבֶת', image: train, alt: 'רכבת' },
  { id: 'cake', word: 'עוּגָה', image: cake, alt: 'עוגה' },
  { id: 'banana', word: 'בָּנָנָה', image: banana, alt: 'בננה' },
];
