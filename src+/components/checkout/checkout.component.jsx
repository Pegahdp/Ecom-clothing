import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";
const Checkout = () => {
  const { cartItems } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="heade-block">
          <span>Product</span>
        </div>
        <div className="heade-block">
          <span>Description</span>
        </div>
        <div className="heade-block">
          <span>Quantity</span>
        </div>
        <div className="heade-block">
          <span>Price</span>
        </div>
        <div className="heade-block">
          <span>Remove</span>
        </div>
      </div>
      <div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        </div>
      <span className="total">Total: 0</span>
    </div>
  );
};

export default Checkout;
