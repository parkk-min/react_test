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
            {bl.length === 0 && <p>데이터가 없습니다.</p>}
            {bl.map((user, index) => (
                <div key={index}>
                    <hr />
                    <p>번호: {user.id}</p>
                    <p>이름: {user.userid}</p>
                    <p>상품이름: {user.prodname}</p>
                    <p>그룹이름: {user.groupname}</p>
                    <p>가격: {user.price}</p>
                    <p>수량: {user.amount}</p>
                    <hr />
                </div>
            ))}
            <Link to="/displayUserInfo">고객정보 다시보기</Link>
        </div>
    )

};
