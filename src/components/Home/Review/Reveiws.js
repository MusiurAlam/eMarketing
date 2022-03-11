
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "@material-ui/core";
import React from "react";
import "./review.css";

const Reveiws = (props) => {
  const {name, reviewText, imageURL, rating, email} = props.review;

  let tempArr = [];
  for(let i = 0; i < rating; i++){
    tempArr.push(i);
  }
  return (
    <Card className="card__container" id="projectCard">
      <div className="card__header">
        <img src={imageURL} alt="alternative" />
        <p>{name}</p>
      </div>
      <div className="card__body">
        <p className="card__body_email">{email}</p>
        <p>{reviewText}</p>
      </div>
      <div className="card__footer">
        {
          tempArr?.map((star) => {
            return (
              <FontAwesomeIcon icon={faStar} key={star}style={{color: "orange"}}/>
            )
          })
        }
      </div>
    </Card>
  );
};

export default Reveiws;
