import { useDispatch, useSelector } from "react-redux";
import { removeAllItems, updateCartItems } from "../../utils/cartSlice";
import ItemCard from "./ItemCard";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(removeAllItems());
  };

  const handleRemoveItem = (item) => {
    const id = item?.info?.id;
    dispatch(updateCartItems(id));
  };

  const price = cartItems.reduce((acc, item)=>{
        return acc + item.info.price;
  },0)

  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart</h1>

      <button className="clear-cart-btn" onClick={handleClearCart}>
        Clear Cart
      </button>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h1 className="empty-message">Please Add Something...!</h1>
          <img
            className="empty-img"
            src="https://blogzine.webestica.com/assets/images/icon/empty-cart.svg"
            alt="Empty Cart"
          />
        </div>
      ) : (
        <div>
        {cartItems.map((item) => (
          <ItemCard
            key={item?.info?.id}
            card={item} // ⬅️ pass the whole item directly
            handleButtonEvent={handleRemoveItem}
            buttonTitle="Remove"
          />
        ))}
        <div className="price-container"> 
            <h2>Total Price : ₹ - {price/100}</h2>
      </div>
    </div>
        
      )}
      
    </div>
  );
}

export default CartPage;
