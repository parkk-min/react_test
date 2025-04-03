import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity } from "./cartSlice";

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleQuantityChange = (e, id) => {
    const newQuantity = parseInt(e.target.value, 10);

    if (newQuantity >= 1) {
      dispatch(increaseQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>
              {item.name} - {item.price}원 x{" "}
            </span>

            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => handleQuantityChange(e, item.id)}
            />

            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
