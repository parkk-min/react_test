import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DisplayUserInfo() {
    const sl = useSelector((state) => state.user.setlist);

    return (
        <div>
            {sl.length === 0 && <p>The data is not available.</p>}
            {sl.map((user, index) => (
                <div key={index}>
                    <hr />
                    <p>id: {user.id}</p>
                    <p>name: {user.name}</p>
                    <p>addr: {user.addr}</p>
                    <p>birthyear: {user.birthyear}</p>
                    <p>height: {user.height}</p>
                    <p>mobile1: {user.mobile1} {user.mobile2}</p>
                    <p>mdate: {user.mdate}</p>
                    <Link to={`/displayBuyInfo/${user.id}`}>RecordCheck.</Link>
                    <hr />
                </div>
            ))}
        </div>
    );
}