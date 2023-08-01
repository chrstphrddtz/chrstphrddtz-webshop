import Button from "../button/button";
import "./cart-dropdown.styles.scss";

export default function CartDropDown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Go to Checkout</Button>
    </div>
  );
}
