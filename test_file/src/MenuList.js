import { Link } from "react-router-dom";

export default function MenuList() {
  const menuList = [
    { id: 1, title: "상품보기", path: "/product" }, // 상품 목록 페이지로 이동
    { id: 2, title: "장바구니", path: "/shopping_cart" }, // 장바구니 페이지로 이동
    { id: 3, title: "결제금액", path: "/payment" }, // 결제 금액 페이지로 이동
  ];

  return (
    <div>
      <h1>Shopping</h1>
      {/* menuList 배열을 map()으로 순회하면서 메뉴리스트 링크 생성 */}
      {menuList.map((menu) => (
        <Link
          key={menu.id} // 각 링크의 고유 키 값 (React에서 리스트 렌더링 시 필요)
          to={menu.path} // 해당 메뉴의 경로
          style={{ marginRight: "10px", textDecoration: "none" }}
        >
          {menu.title} {/* 링크 텍스트 출력 */}
        </Link>
      ))}
    </div>
  );
}
