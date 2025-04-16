// Redux에서 상태를 가져오기 위한 useSelector import
import { useSelector } from "react-redux";

// 결제 페이지 컴포넌트 정의
export default function Payment() {
  // Redux store에서 장바구니 항목(cartItems) 가져오기
  const cartItems = useSelector((state) => state.cart.cartItems);

  // 총 결제 금액 계산: 각 상품의 (가격 * 수량)의 합계
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0 // 초기값 0
  );

  return (
    <div>
      <h2>Shopping</h2> {/* 페이지 제목 */}
      <h3>Total: {totalAmount}원</h3> {/* 총 금액 출력 */}
    </div>
  );
}
