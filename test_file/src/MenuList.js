import { Link } from 'react-router-dom';

export default function MenuList() {
    const menuList = [
        { id: 1, title: "상품보기", path: "/product" },
        { id: 2, title: "장바구니", path: "/shopping_cart" },
        { id: 3, title: "결제금액", path: "/payment" }
    ];
    return (
        <>
            {menuList.map((menu) => (
                <Link
                    key={menu.id}
                    to={menu.path}
                    style={{ marginRight: '10px', textDecoration: 'none' }}
                >
                    {menu.title}
                </Link>
            ))}
        </>
    );
}
