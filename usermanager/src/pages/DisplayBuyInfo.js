import { useEffect } from "react"
import apiClient from "../api/apiClient"
import { useDispatch, useSelector } from "react-redux"
import { buyList } from "../userSlice";
import { Link, useParams } from "react-router-dom";

export default function DisplayBuyInfo() {
    const { userid } = useParams();
    const bl = useSelector((state) => state.user.buylist);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiClient.get(`/buy-list/${userid}`);
                if (response.status === 250) {
                    dispatch(buyList([]));
                } else {
                    dispatch(buyList(response.data));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [userid]);

    return (
        <div>
            {bl.length === 0 && <p>The data is not available.</p>}
            {bl.map((user, index) => (
                <div key={index}>
                    <hr />
                    <p>Number: {user.id}</p>
                    <p>Name: {user.userid}</p>
                    <p>ProductName: {user.prodname}</p>
                    <p>GroupName: {user.groupname}</p>
                    <p>Price: {user.price}</p>
                    <p>Amount: {user.amount}</p>
                    <hr />
                </div>
            ))}
            <Link to="/displayUserInfo">Return</Link>
        </div>
    )
};
