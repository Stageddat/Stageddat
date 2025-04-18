import type { ImageMetadata } from "astro";

import baityImg from "src/assets/authors/baity.jpeg";
import arthurImg from "src/assets/authors/arthur.jpg";
import arthurImg2 from "src/assets/authors/arthur2.jpeg";
import arthurImg3 from "src/assets/authors/arthur3.png";
import arthurImg4 from "src/assets/authors/arthur4.jpg";
import arthurImg5 from "src/assets/authors/arthur5.png";
import davidImg from "src/assets/authors/david.png";
import johnImg from "src/assets/authors/john.png";
import ryoImg from "src/assets/authors/ryo.jpg";
import sonyaImg from "src/assets/authors/sonya.png";
import miduImg from "src/assets/authors/midudev.png";

export interface QuoteData {
  text: string;
  author: string;
  image: ImageMetadata;
  subtitle?: string;
  spoiler?: boolean;
}

export const quotes: QuoteData[] = [
  {
    text: "i have no money",
    subtitle: "",
    author: "Ryo Yamada from Bocchi The Rock!",
    image: ryoImg,
  },
  {
    text: "espabila coño, que la vida te va a comer",
    subtitle: "wake the fuck up, life's gonna eat you alive",
    author: "BaityBait",
    image: baityImg,
  },
  {
    text: "There is nothing to be afraid of, Mr. Morgan.",
    subtitle: "",
    author: "S. Calderón to Arthur Morgan from Red Dead Redemption 2",
    spoiler: true,
    image: arthurImg,
  },
  {
    text: "Take a gamble that love exists, and do a loving act.",
    subtitle: "",
    author: "S. Calderón to Arthur Morgan from Red Dead Redemption 2",
    spoiler: true,
    image: arthurImg2,
  },
  {
    text: "A mover las manitas.",
    subtitle: "",
    author: "Miguel Ángel Durán - midudev",
    image: miduImg,
  },
  {
    text: "I guess...I'm afraid",
    subtitle: "",
    author: "Arthur Morgan from Red Dead Redemption 2",
    spoiler: true,
    image: arthurImg3,
  },
  {
    text: "I gave you all I had. I did.",
    subtitle: "",
    author: "Arthur Morgan to Dutch from Red Dead Redemption 2",
    spoiler: true,
    image: arthurImg4,
  },
  {
    text: "Sorry, wish we could go to the moon together.",
    subtitle: "",
    author: "David Martínez to Lucy from Cyberpunk: Edgerunners",
    spoiler: true,
    image: davidImg,
  },
  {
    text: "Your life isn't always gonna be this perfect, things happen to people.",
    subtitle: "",
    author: "John from Road 96",
    image: johnImg,
  },
  {
    text: "You can't live your life in fear.",
    subtitle: "",
    author: "Sonya Sanchez from Road 96",
    image: sonyaImg,
  },
  {
    text: "Life is full of pain, but there is also love and beauty.",
    subtitle: "",
    author: "S. Calderón to Arthur Morgan from Red Dead Redemption 2",
    spoiler: true,
    image: arthurImg5,
  },
];
