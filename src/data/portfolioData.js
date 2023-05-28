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
    name: "Gamme Date & Match",
    languages: ["Fun stuff", "Team projects"],
    languagesIcons: [<FaHtml5 />, <FaJs />],
    source: "https://github.com/Newaluigi/Game_Date_Match",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
    picture: projet1,
  },
  {
    id: 2,
    name: "Intergalactic tournament",
    languages: ["Fun stuff", "Team projects", "Hackathon"],
    languagesIcons: [<FaJs />, <FaReact />],
    source: "https://github.com/Newaluigi/Intergalactic-tournament",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
    picture: projet2,
  },
  {
    id: 3,
    name: "Levilaincoin",
    languages: ["Fun stuff", "Team projects"],
    languagesIcons: [<FaJs />, <FaReact />, <SiExpress />],
    source:
      "https://github.com/Newaluigi/11-22-devandjerrys-levilaincoin-front",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
    picture: projet3,
  },
  {
    id: 4,
    name: "Emmaus connect",
    languages: ["Clients", "Team projects", "Hackathon"],
    languagesIcons: [<FaJs />, <FaReact />, <SiExpress />, <SiMysql />],
    source: "https://github.com/Newaluigi/hackathon_3_emmaus_connect",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
    picture: projet4,
  },
  {
    id: 5,
    name: "La balade caspienne",
    languages: ["Clients", "Team projects"],
    languagesIcons: [<FaJs />, <FaReact />, <SiExpress />, <SiMysql />],
    source:
      "https://github.com/Newaluigi/05-11-devandjerrys-labaladecaspienneV2",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
    picture: projet5,
  },
  {
    id: 6,
    name: "Malo",
    languages: ["Clients"],
    languagesIcons: [<FaHtml5 />],
    source: "https://github.com/Newaluigi/Malo",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
    picture: projet6,
  },
  {
    id: 7,
    name: "Kaamelott quests",
    languages: ["Fun stuff", "Team projects", "Hackathon"],
    languagesIcons: [<FaJs />, <FaReact />, <SiExpress />, <SiMysql />],
    source: "https://github.com/Newaluigi/KaamelottQuests",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
    picture: projet7,
  },
  {
    id: 8,
    name: "Red hood",
    languages: ["Fun stuff", "Hackathon"],
    languagesIcons: [<TbBrandCSharp />, <FaUnity />],
    source: "https://github.com/Newaluigi/Hack4",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
    picture: projet8,
  },
  {
    id: 9,
    name: "Academia Victoria",
    languages: ["Clients"],
    languagesIcons: [<FaWordpress />],
    source: "https://github.com/Newaluigi/Hack4",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
    picture: inprogress,
  },
  {
    id: 10,
    name: "Harmonisons",
    languages: ["Clients"],
    languagesIcons: [<FaJs />, <FaReact />, <SiExpress />, <SiMysql />],
    source: "",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
    picture: inprogress,
  },
  {
    id: 11,
    name: "JS Bach",
    languages: ["Fun stuff"],
    languagesIcons: [<FaJs />, <FaReact />, <SiExpress />, <SiMysql />],
    source: "",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
    picture: projet11,
  },
];
