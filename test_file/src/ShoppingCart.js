// Redux의 상태 조회와 액션 발생을 위한 훅들 import
import { useSelector, useDispatch } from "react-redux";

// cartSlice에서 만든 액션 불러오기
import { removeFromCart, increaseQuantity } from "./cartSlice";

// 장바구니 컴포넌트 정의
export default function ShoppingCart() {
  // Redux store에서 cartItems 상태 가져오기
  const cartItems = useSelector((state) => state.cart.cartItems);

  // 액션을 발생시키기 위한 dispatch 함수 생성
  const dispatch = useDispatch();

  // 수량이 변경될 때 호출되는 함수
  const handleQuantityChange = (e, id) => {
    const newQuantity = parseInt(e.target.value, 10); // 문자열 -> 숫자 변환

    // 수량이 1 이상일 경우에만 업데이트 허용
    if (newQuantity >= 1) {
      // Redux 액션 dispatch
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

            {/* 수량 조절 input 필드 */}
            <input
              type="number" // 숫자만 입력되게
              value={item.quantity} // 현재 수량 표시
              min="1" // 최소값 1
              onChange={(e) => handleQuantityChange(e, item.id)} // 수량 변경 핸들링
            />

            {/* 해당 상품을 장바구니에서 제거하는 버튼 */}
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
