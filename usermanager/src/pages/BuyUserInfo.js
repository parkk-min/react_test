import { useState } from "react";
import apiClient from "../api/apiClient";
import { useDispatch } from "react-redux";
import { addbuy } from "../userSlice";
import { useNavigate } from "react-router-dom";

export default function BuyUserInfo() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [flag, setFlag] = useState(false);

    const handleSelect = async () => {
        try {
            const response = await apiClient.get(`/userinfo/user-id-exists/${userId}`);
            setFlag(response.data);
        } catch (error) {
            console.log(error)
        }
    };

    const handleStorage = async (e) => {
        e.preventDefault();
        const text = {
            userid: userId,
            prodname: e.target.prodname.value,
            groupname: e.target.groupname.value,
            price: Number(e.target.price.value),
            amount: Number(e.target.amount.value)
        }
        try {
            const response = await apiClient.post("/new-list", text)
            dispatch(addbuy(response.data));
            alert("저장을 완료하였습니다.");
            navigate("/join");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleStorage}>
                <p>
                    User Id: <input type="text" name="userid" value={userId}
                        onChange={(e) => setUserId(e.target.value)}></input>
                    <button type="button" onClick={handleSelect}>Id Select</button>
                </p>
                {flag && <><p>
                    Product Name: <input type="text" name="prodname" required></input>
                </p>
                    <p>
                        Group Name: <input type="text" name="groupname" required></input>
                    </p>
                    <p>
                        Price: <input type="text" name="price" required></input>
                    </p>
                    <p>
                        Amount: <input type="text" name="amount" required></input>
                    </p>
                    <input type="submit" value="Storage"></input></>}
            </form>
        </div>
    );
}
