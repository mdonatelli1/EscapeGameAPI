const express = require("express");
const cors = require("cors");
const app = express();

const serverPort = 5000;

app.use(cors("*"));

const narration = [
  // Lorsqu'on lance le jeu, avant la salle 1.
  {
    id: 1,
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
  },
  // Après la salle 1, avant la salle 2.
  {
    id: 2,
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
  },
  // Après la salle 2, avant la salle 3.
  {
    id: 3,
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
  },
  // Après la salle 3, avant la salle 4.
  {
    id: 4,
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
  },
  // Après la salle 4, avant la salle 5.
  {
    id: 5,
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
  },
  // Après la salle 5, choix.
  {
    id: 6,
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
  },
  // FIN DU JEU
  { id: 7, audio: "INSERER LE PATH DE L AUDIO", subtitles: "FIN" },
];

const scene1 = [
  {
    id: 1,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: true,
  },
  {
    id: 2,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 3,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 4,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 5,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 6,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 7,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 8,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 9,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 10,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 11,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 12,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 13,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 14,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 15,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
];

const scene2 = [
  {
    id: 1,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: true,
  },
  {
    id: 2,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 3,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 4,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 5,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 6,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 7,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 8,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 9,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 10,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 11,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 12,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 13,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 14,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 15,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
];

const scene3 = [
  {
    id: 1,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: true,
  },
  {
    id: 2,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 3,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 4,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 5,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 6,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 7,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 8,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 9,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 10,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 11,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 12,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 13,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 14,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 15,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
];

const scene4 = [
  {
    id: 1,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: true,
  },
  {
    id: 2,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 3,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 4,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 5,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 6,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 7,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 8,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 9,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 10,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 11,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 12,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 13,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 14,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 15,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
];

const scene5 = [
  {
    id: 1,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: true,
  },
  {
    id: 2,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 3,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 4,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 5,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 6,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 7,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 8,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 9,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 10,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 11,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 12,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 13,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 14,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 15,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
];

app.get("/", (req, res) => {
  res.send("l'API est en ligne.");
});

app.get("/narration", (req, res) => {
  res.json(narration);
});

app.get("/scene1", (req, res) => {
  res.json(scene1);
});

app.get("/scene2", (req, res) => {
  res.json(scene2);
});

app.get("/scene3", (req, res) => {
  res.json(scene3);
});

app.get("/scene4", (req, res) => {
  res.json(scene4);
});

app.get("/scene5", (req, res) => {
  res.json(scene5);
});
