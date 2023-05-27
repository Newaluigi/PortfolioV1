import React from "react";
import {
  GiBasketballBall,
  GiEgyptianSphinx,
  GiFeather,
  GiShinyApple,
  GiViolin,
} from "react-icons/gi";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <GiEgyptianSphinx className="iconHobby" />
          <span>Histoire</span>
        </li>
        <li className="hobby">
          <GiViolin className="iconHobby" />
          <span>Violon</span>
        </li>
        <li className="hobby">
          <GiBasketballBall className="iconHobby" />
          <span>Basket</span>
        </li>
        <li className="hobby">
          <GiFeather className="iconHobby" />
          <span>Poésie</span>
        </li>
        <li className="hobby">
          <GiShinyApple className="iconHobby" />
          <span>Cidrologie</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
