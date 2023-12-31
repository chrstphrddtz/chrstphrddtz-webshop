import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";

import CartItem from "../card-item/cart-item";
import Button from "../button/button";
import "./cart-dropdown.styles.scss";

export default function CartDropDown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  function goToCheckOutHandler() {
    navigate("/checkout");
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckOutHandler}>Go to Checkout</Button>
    </div>
  );
}
