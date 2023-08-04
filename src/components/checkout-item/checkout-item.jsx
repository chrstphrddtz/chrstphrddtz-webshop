import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

import "./checkout-item.styles.scss";

export default function CheckOutItem({ cartItem }) {
  const { name, price, imageUrl, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  function addItemHandle() {
    addItemToCart(cartItem);
  }

  function removeHandler() {
    removeItemFromCart(cartItem);
  }

  function clearItemHandler() {
    clearItemFromCart(cartItem);
  }

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandle}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
}
