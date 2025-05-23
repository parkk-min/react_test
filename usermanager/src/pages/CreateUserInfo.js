import { useDispatch } from "react-redux";
import apiClient from "../api/apiClient";
import { addList } from "../userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateUserInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");

  const handleCheck = async () => {
    try {
      const response = await apiClient.get(`/userinfo/user-id-exists/${userId}`);
      const exists = response.data;
      if (exists) {
        alert("중복된 아이디입니다. 다시 입력해주세요.");
      } else {
        alert("사용 가능한 아이디입니다.");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      mdate: e.target.mdate.value + "T00:00:00Z",
    };
    try {
      const response = await apiClient.post("/userinfo/new-user", text);
      dispatch(addList(response.data));
      alert("저장을 완료하였습니다.")
      navigate("/join");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleStorage}>
        <p>
          User Id: <input type="text" name="id" value={userId} onChange={(e) =>
            setUserId(e.target.value)} required></input>
          <button type="button" onClick={handleCheck}>Overlap Check</button>
        </p>
        <p>
          User Name: <input type="text" name="name" required></input>
        </p>
        <p>
          User Phone1: <input type="text" name="mobile1" ></input>
          Phone2: <input type="text" name="mobile2" ></input>
        </p>
        <p>
          User Birthyear: <input type="text" name="birthyear" required></input>
        </p>
        <p>
          User Height: <input type="text" name="height" required></input>
        </p>
        <p>
          User Region: <input type="text" name="addr" required></input>
        </p>
        <p>
          User JoinDate: <input type="date" name="mdate" required></input>
        </p>
        <input type="submit" value="Storage"></input>
      </form>
    </div>
  );
}
