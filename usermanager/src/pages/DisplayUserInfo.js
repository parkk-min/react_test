import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DisplayUserInfo() {
    const userList = useSelector((state) => state.user.list);

    return (
        <div>
            {userList.length === 0 && <p>데이터가 없습니다.</p>}
            {userList.map((user, index) => (
                <div key={index}>
                    <hr />
                    <p>id: {user.id}</p>
                    <p>name: {user.name}</p>
                    <p>addr: {user.addr}</p>
                    <p>birthyear: {user.birthyear}</p>
                    <p>height: {user.height}</p>
                    <p>mobile1: {user.mobile1} {user.mobile2}</p>
                    <p>mdate: {user.mdate}</p>
                    <Link to={`/displayBuyInfo/${user.id}`}>구매기록 확인</Link>
                    <hr />
                </div>
            ))}
        </div>
    );
}