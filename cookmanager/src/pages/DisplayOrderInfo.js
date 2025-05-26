import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function OrderDetail() {
    const orderList = useSelector((state) => state.order.orderList);

    return (
        <>
            {(orderList.length !== 0) && orderList.map(m => <div key={m.orderId}>
                <p>Order Number: {m.orderId}</p>
                <p>Customer Id: {m.custId}</p>
                <p>Book Id: <Link to={"/orderinfo/bookinfo/" + m.bookId}>{m.bookId}</Link></p>
                <p>Sale Price: {m.saleprice}</p>
                <p>Order Date: {m.order_date}</p>
                <hr />
            </div>)}
        </>
    );
}
