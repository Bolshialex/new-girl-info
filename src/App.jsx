import "./App.css";
import Home from "./components/HomePage";
import NavBar from "./components/NavBar";
import Character from "./components/Character";
import jess from "./assets/jess.png";
import nick from "./assets/nick.png";
import winston from "./assets/winston.png";
import cece from "./assets/cece.png";
import schmidt from "./assets/schmidt.png";

const newGirlData = [
  {
    name: "Jessica Day",
    id: "jess",
    img: jess,
    favorite_things: [
      "Singing and musical performances",
      "Quirky, colorful clothing and accessories",
      "Teaching and working with kids",
      "Baking and cooking, especially cupcakes",
      "Romantic comedies and cheesy love stories",
    ],
    bio: "A quirky, upbeat, and optimistic school teacher who moves into a loft with three guys after a tough breakup. Known for her unique fashion sense, enthusiasm, and sometimes awkward social skills.",
  },
  {
    name: "Nick Miller",
    img: nick,
    id: "nick",
    favorite_things: [
      "Beer (especially craft beer)",
      "Playing pool and bar games",
      "Writing (though he’s not great at it)",
      "Laziness and naps",
      "Old-school movies and jazz music",
    ],
    bio: "A grumpy yet lovable bartender with a cynical view on life. He is often sarcastic and stubborn but deeply caring to those close to him. He struggles with ambition but is fiercely loyal.",
  },
  {
    name: "Schmidt",
    img: schmidt,
    id: "schmidt",
    favorite_things: [
      "Gym and working out",
      "Fancy, expensive clothes and grooming",
      "Career success and ambition",
      "Greek yogurt (he’s obsessed)",
      "Complimenting and flattering himself",
    ],
    bio: "An ambitious, confident, and sometimes over-the-top marketing professional. He often displays a blend of vanity and insecurity, with a passionate desire to improve himself and his social standing.",
  },
  {
    name: "Winston Bishop",
    img: winston,
    id: "winston",
    favorite_things: [
      "Pranks and practical jokes",
      "Basketball (though less than before)",
      "His cat, Ferguson",
      "Police work and solving cases",
      "Bizarre hobbies like yodeling and puzzles",
    ],
    bio: "A former basketball player turned police officer. Winston is quirky, sweet, and often exhibits bizarre but endearing behavior. He has a love for pranks and a soft spot for animals.",
  },
  {
    name: "Cece Parekh",
    img: cece,
    id: "cece_id",
    favorite_things: [
      "Modeling and fashion",
      "Close friendship with Jess",
      "Fitness and maintaining her figure",
      "Confidence and empowerment",
      "Romantic relationships, especially Schmidt",
    ],
    bio: "Jess’s best friend, a confident and glamorous model who often provides a grounded contrast to Jess’s eccentricity. She is smart, independent, and has a complicated romantic history with Schmidt.",
  },
];

function App() {
  newGirlData.forEach((character) => console.log(character));
  return (
    <>
      <Home />
      <NavBar />
      {newGirlData.map((character, index) => (
        <Character key={index} props={character} />
      ))}
    </>
  );
}

export default App;
