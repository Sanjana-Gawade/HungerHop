import React, { useContext } from "react";
import { CDN_URL } from "../Constants/constant";
import MyContext from "../../utils/MyContext";

const ItemCard = ({ card, handleButtonEvent, buttonTitle, isDisabled = false }) => {
  const { background } = useContext(MyContext);

  const info = card?.info;
  if (!info) return null;

  const price = (info.defaultPrice ?? info.price ?? 0) / 100;

  console.log(card, 'Card items')

  return (
    <div className={`itemCard-Container ${background}`}>
      <div className="info-container">
        <h3>{info.name} - ₹ {price}</h3>
        <p>{info.description}</p>
      </div>

      <div className="image-container">
        {info.imageId ? (
          <img src={CDN_URL + info.imageId} alt={info.name} loading="lazy" />
        ) : (
          <p id="dummy" />
        )}

        <button
          className="image-button"
          onClick={() => handleButtonEvent(card)}
          disabled={isDisabled}
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
