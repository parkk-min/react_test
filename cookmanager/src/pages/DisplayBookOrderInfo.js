import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export default function DisplayBookOrderInfo() {

    const bookInfo = useSelector((state) => state.order.bookInfo);

    return (
        <>
            <h2>{bookInfo.bookName}의 주문정보</h2>
            {bookInfo.orders ? bookInfo.orders.map(m => <div key={m.orderId}>
                <p>Order Number: {m.orderId}</p>
                <p>Customer Name: {m.customerName}</p>
                <p>Saleprice: {m.salePrice}</p>
                <p>Order Date: {m.order_date}</p>
                <hr />
            </div>)
                : ("주문정보가 없습니다.")}
            <hr />
            <Link to={"/orderinfo/bookinfo/" + bookInfo.bookId}>Back</Link>
            <hr />
        </>
    );

};
