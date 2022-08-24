import React from "react";
import star from "../images/star.png"


export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card-container">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.img} className="card-img" />
            <div className="card-details-container">
                <p className="card-rating-container">
                    <img src={star} className="card-star" />
                    <span className="card-rating"> {props.rating} </span>
                    <span className="card-review-count-location">({props.reviewCount}) • {props.location}</span>
                </p>
                <p className="card-title">{props.title}</p>
                <p className="card-price-container">
                    <span className="card-bolded-price">From {props.price}</span>
                    <span className="card-price-unit"> / {props.priceUnit}</span>
                </p>
            </div>
        </div>
    )
}