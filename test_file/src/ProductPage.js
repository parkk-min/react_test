// Redux에서 액션을 보내기 위한 useDispatch 훅 import
import { useDispatch } from "react-redux";

// cartSlice에서 만든 addToCart 액션 import
import { addToCart } from "./cartSlice";

// 상품 페이지 컴포넌트 정의
export default function ProductPage() {
  // dispatch 함수를 가져옴 (Redux 액션 보낼 때 사용)
  const dispatch = useDispatch();

  // 상품 목록 배열 (임시 상품 데이터)
  const productList = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
    { id: 3, name: "Product C", price: 300 },
  ];

  return (
    <div>
      <ul>
        {/* 상품 목록 렌더링 */}
        {productList.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}원{/* 장바구니에 추가하는 버튼 */}
            <button
              onClick={() => {
                // Redux store에 상품 추가 액션 dispatch
                dispatch(addToCart(product));

                // 사용자에게 알림 표시
                alert(`${product.name}이(가) 장바구니에 추가되었습니다!`);
              }}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
