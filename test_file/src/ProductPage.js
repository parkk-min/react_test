import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

export default function ProductPage() {
  const dispatch = useDispatch();
  const productList = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
    { id: 3, name: "Product C", price: 300 },
  ];

  return (
    <div>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}원
            <button
              onClick={() => {
                dispatch(addToCart(product));
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
