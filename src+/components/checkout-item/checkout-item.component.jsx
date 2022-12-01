import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";
const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart } = useContext(CartContext);

  const { name, imageUrl, quantity, price } = cartItem;

  const clearItemHandler = () => clearItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div>
        <button className="remove-button" onClick={clearItemHandler}>
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;
