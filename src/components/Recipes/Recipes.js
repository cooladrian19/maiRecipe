import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Recipes({
  id,
  title,
  image,
  calories,
  ingredients,
  type,
  time,
}) {
  const recipeId = id.split("_").pop();

  return (
    <Link className="recipes-card" to={`/details/${recipeId}`}>
      <div className="recipes-img-contain">
        <img src={image} alt={title}></img>
      </div>

      <div className="recipes-details-contain">
        <h4>{title}</h4>
        <p>
          {" "}
          <span>meal type:</span> {type}
        </p>
        <p>
          {" "}
          <span>calories:</span> {calories}
        </p>
        <p>
          {" "}
          <span>ingredients:</span>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.food}{index < ingredients.length - 1 ? ", " : ""}
              </li>
            ))}
          </ul>
        </p>
      </div>

      <div className="recipes-card-bottom">
        <p>{time} mins</p>
        <div className="time-container">
          <i className="gg-time"></i>
        </div>
      </div>
    </Link>
  );
}
