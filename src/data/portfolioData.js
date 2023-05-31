import projet2 from "../assets/starwars.jpg";
import projet1 from "../assets/gdm.jpg";
import projet3 from "../assets/vilain.png";
import projet4 from "../assets/emmausconnect.png";
import projet5 from "../assets/balade.png";
import projet6 from "../assets/malo.jpg";
import projet7 from "../assets/kaamelott.jpg";
import projet8 from "../assets/redhood.jpg";
import projet11 from "../assets/bach.jpg";
import inprogress from "../assets/inprogress.png";
import { FaHtml5, FaJs, FaReact, FaUnity, FaWordpress } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiExpress, SiMysql } from "react-icons/si";

export const portfolioData = [
  {
    id: 1,
    name: "Game Date & Match",
    languages: ["Fun stuff", "Team projects"],
    languagesIcons: [<FaHtml5 />, <FaJs />],
    source: "https://github.com/Newaluigi/Game_Date_Match",
    info: "Premier projet au sein de la Wild code school. La consigne était de créer un site en html/css avec un peu de js sur un délai de 2 semaines. Il s'agit d'un site de rencontres développé comme une expérience linéaire. L'utilisateur peut trouver un couple pour former un trouple. Le match aboutit à un jeu space invaders, si l'utilisateur gagne il obtient le contact du match en récompense sinon il peut s'abonner pour rejouer.",
    picture: projet1,
  },
  {
    id: 2,
    name: "Intergalactic tournament",
    languages: ["Fun stuff", "Team projects", "Hackathon"],
    languagesIcons: [<FaJs />, <FaReact />],
    source: "https://github.com/Newaluigi/Intergalactic-tournament",
    info: "Premier hackathon en équipe : créer un site en 24h avec l'univers de Starwars. Les consignes étaient de consommer une API Starwars et de découvrir React afin d'utiliser ce framework pour développer le site. Le thème choisi fut de créer un site évènementiel autour des tournois de courses de modules.",
    picture: projet2,
  },
  {
    id: 3,
    name: "Levilaincoin",
    languages: ["Fun stuff", "Team projects"],
    languagesIcons: [<FaJs />, <FaReact />, <SiExpress />],
    source:
      "https://github.com/Newaluigi/11-22-devandjerrys-levilaincoin-front",
    info: "Projet d'école sur 4 semaines. La consigne était de créer un site avec React en consommant l'API de notre choix. L'API choisie fut les supervilains DC COMICS. L'idée fut de créer une parodie du site Leboncoin. Ici le visiteur peut soit louer les services d'un supervilain pour un évènement en accédant à tout un catalogue de méchants soit s'inscrire en tant que vilain.  ",
    picture: projet3,
  },
  {
    id: 4,
    name: "Emmaus connect",
    languages: ["Clients", "Team projects", "Hackathon"],
    languagesIcons: [<FaJs />, <FaReact />, <SiExpress />, <SiMysql />],
    source: "https://github.com/Newaluigi/hackathon_3_emmaus_connect",
    info: "Hackathon en équipe : créer un site en un peu plus de 24h pour un client-partenaire : l'association Emmaüs Connect qui travaille au quotidien sur l'inclusion au numérique. Le besoin du client auquel il fallait répondre était de créer une plateforme avec BDD comme outil de classification des smartphones afin de générer un prix de vente selon leurs caractéristiques.",
    picture: projet4,
  },
  {
    id: 5,
    name: "La balade caspienne",
    languages: ["Clients", "Team projects"],
    languagesIcons: [<FaJs />, <FaReact />, <SiExpress />, <SiMysql />],
    source:
      "https://github.com/Newaluigi/05-11-devandjerrys-labaladecaspienneV2",
    info: "Projet d'école pour une cliente : créer un site-boutique en React pour une artiste. Le thème de sa production est l'univers de l'imaginaire. Le site comprend un back pour gérer à la fois la connexion et le panier du client et la console d'administration de la cliente.",
    picture: projet5,
  },
  {
    id: 6,
    name: "Malo",
    languages: ["Clients"],
    languagesIcons: [<FaHtml5 />],
    source: "https://github.com/Newaluigi/Malo",
    info: "Petit site-vitrine en singlepage pour une location d'appartement pour estivaliers situé à Malo-Les-Bains.",
    picture: projet6,
  },
  {
    id: 7,
    name: "Kaamelott quests",
    languages: ["Fun stuff", "Team projects", "Hackathon"],
    languagesIcons: [<FaJs />, <FaReact />, <SiExpress />, <SiMysql />],
    source: "https://github.com/Newaluigi/KaamelottQuests",
    info: "Projet de hackathon en équipe : créer un site en 24h avec un petit back. Le thème était de proposer un service moderne au sein d'une période historique. La période choisie fut l'époque médiévale, le site a pour objet de fournir un outil aux chevaliers de la table ronde  de l'univers de Kaamelott afin qu'ils puissent plus facilement trouver des quêtes à réaliser sans prendre le risque de passer par la taverne. ",
    picture: projet7,
  },
  {
    id: 8,
    name: "Red hood",
    languages: ["Fun stuff", "Hackathon"],
    languagesIcons: [<TbBrandCSharp />, <FaUnity />],
    source: "https://github.com/Newaluigi/Hack4",
    info: "Projet d'hackthon : découvrir la programmation de jeu-vidéo avec Unity. Création d'un petit jeu de plateforme en un peu plus de 24h.",
    picture: projet8,
  },
  {
    id: 9,
    name: "Academia Victoria",
    languages: ["Clients"],
    languagesIcons: [<FaWordpress />],
    source: "https://github.com/Newaluigi/",
    info: "Site-vitrine en espagnol réalisé avec Wordpress pour une académie d'anglais. Le site comprend une console d'administration pour gérer entre autre un blog.",
    picture: inprogress,
  },
  {
    id: 10,
    name: "Harmonisons",
    languages: ["Clients"],
    languagesIcons: [<FaJs />, <FaReact />, <SiExpress />, <SiMysql />],
    source: "https://github.com/Newaluigi/",
    info: "Site-vitrine pour une chamane pour présenter son activité et le déblocage transgénérationnel. Le site comprend une console d'administration et une gestion de prise de rdv.",
    picture: inprogress,
  },
  {
    id: 11,
    name: "JS Bach",
    languages: ["Fun stuff"],
    languagesIcons: [<FaJs />, <FaReact />, <SiExpress />, <SiMysql />],
    source: "https://github.com/Newaluigi/",
    info: "Site décalé autour de Jean-Sébastien Bach : l'objectif du site est de mettre en avant le Back en incorporant un CRUD",
    picture: projet11,
  },
];
