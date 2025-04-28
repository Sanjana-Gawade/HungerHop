import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { ChevronDown, ChevronRight } from "lucide-react";
import MyContext from "../../utils/MyContext";
import { addItems } from "../../utils/cartSlice";
import ItemCard from "./ItemCard";

const ResMenuItems = ({ category, setShowIndex, showItems }) => {
  const dispatch = useDispatch();

  const itemCards = category?.card?.card?.itemCards || [];
  const title = category?.card?.card?.title || "Untitled";

  const handleClick = () => {
    setShowIndex();
  };

  const handleAddItems = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div className={`restMenu-container`} onClick={handleClick}>
      <div className="accordion-heading">
        <h3>
          {title} ({itemCards.length})
        </h3>
        {showItems ? <ChevronDown /> : <ChevronRight />}
      </div>

      {showItems &&
        itemCards.map(({ card }, index) => (
          <ItemCard
            key={card?.info?.id}
            card={card}
            handleButtonEvent={handleAddItems}
            buttonTitle="Add"
          />
        ))}
    </div>
  );
};

export default ResMenuItems;
