import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setBookInfo } from "./orderSlice";
import apiClient from "../api/apiClient";

export default function DisplayBookInfo() {
  const { bookid } = useParams();
  const bookInfo = useSelector((state) => state.order.bookInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setBookInfo(null));
        const response = await apiClient.get("/bookinfo/" + bookid);
        dispatch(setBookInfo(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [bookid]);

  return (
    <>
      {bookInfo && (
        <>
          <p>Book Id: {bookInfo.bookId}</p>
          <p>Book Name: {bookInfo.bookName}</p>
          <p>Publisher: {bookInfo.publisher}</p>
          <p>Price: {bookInfo.price}</p>
          <p>
            <Link to={"/orderinfo/bookinfo/bookorderinfo"}>Order List</Link>
          </p>
          <hr />
          <Link to={"/orderinfo/data"}>Back</Link>
          <hr />
        </>
      )}
    </>
  );
}
