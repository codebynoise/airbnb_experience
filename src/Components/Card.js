import React from "react";
import star from "./star.png";
import "./Card.css";

function Card(props) {
  let badgeText;
  if (props.data.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.data.location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="card">
      {badgeText && <div className="badge">{badgeText}</div>}
      <img src={props.data.coverImg} alt="katie" className="image" />
      <div className="status">
        <img src={star} alt="star" className="star" />
        <span>{props.data.stats.rating}</span>
        <span className="gray">({props.data.stats.reviewCount}) • </span>
        <span className="gray">{props.data.location}</span>
      </div>
      <p className="title">{props.data.title}</p>
      <p className="price">
        <span className="bold">From ${props.data.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
