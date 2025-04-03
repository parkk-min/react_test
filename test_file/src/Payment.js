import { useSelector } from "react-redux";

export default function Payment() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping</h2>
      <h3>Total: {totalAmount}원</h3>
    </div>
  );
}
