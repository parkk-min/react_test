import { useDispatch } from "react-redux";
import apiClient from "../api/apiClient";
import { addList } from "../userSlice";

export default function CreateUserInfo() {
    const dispatch = useDispatch();

    const handleStorage = async (e) => {
        e.preventDefault();
        const text = {
            id: e.target.id.value,
            name: e.target.name.value,
            mobile1: e.target.mobile1.value,
            mobile2: e.target.mobile2.value,
            birthyear: Number(e.target.birthyear.value),
            height: Number(e.target.height.value),
            addr: e.target.addr.value,
            mdate: e.target.mdate.value + "T00:00:00Z"
        };
        try {
            const response = await apiClient.post("/userinfo/new-user", text);
            dispatch(addList(response.data));
        } catch (error) {
            console.log(error);
        }
    };

    const handleCheck = (e) => {
        
    }

    return (
        <div>
            <form onSubmit={handleStorage}>
                <p>
                    User Id: <input type="text" name="id"></input>
                    <button type="button" onClick={handleCheck}>Overlap Check</button>
                </p>
                <p>
                    User Name: <input type="text" name="name"></input>
                </p>
                <p>User Phone1: <input type="text" name="mobile1"></input>
                    Phone2: <input type="text" name="mobile2"></input>
                </p>
                <p>
                    User Birthyear: <input type="text" name="birthyear"></input>
                </p>
                <p>
                    User Height: <input type="text" name="height"></input>
                </p>
                <p>
                    User Region: <input type="text" name="addr"></input>
                </p>
                <p>
                    User JoinDate: <input type="date" name="mdate"></input>
                </p>
                <input type="submit" value="Storage"></input>
            </form>
        </div>
    )

};
