import { useState } from "react";
import apiClient from "../api/apiClient";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../userSlice";

export default function DetailCondition({ conditions }) {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.list);
  const [addr, setAddr] = useState("");
  const [birthyear, setBirthyear] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (conditions.addr && !conditions.birthyear) {
      try {
        const response = await apiClient.get("/userinfo/addr/" + addr);
        dispatch(setList(response.data));
      } catch (error) {
        console.log(error);
      }
    } else if (!conditions.addr && conditions.birthyear) {
      try {
        const response = await apiClient.get(
          "/userinfo/birthyear/" + birthyear
        );
        dispatch(setList(response.data));
      } catch (error) {
        console.log(error);
      }
    } else if (conditions.addr && conditions.birthyear) {
      try {
        const response = await apiClient.get("/userinfo/addr-birthyear", {
          params: {
            addr,
            birthyear,
          },
        });
        dispatch(setList(response.data));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        {conditions.addr && (
          <div>
            지역:
            <input
              type="text"
              name="addr"
              value={addr}
              onChange={(e) => setAddr(e.target.value)}
            />
          </div>
        )}
        {conditions.birthyear && (
          <div>
            출생년도:
            <input
              type="text"
              name="birthyear"
              value={birthyear}
              onChange={(e) => setBirthyear(e.target.value)}
            />
          </div>
        )}
        <button type="submit">검색</button>
      </form>
      {/* <div>
        {userList.length === 0 && <p>데이터가 없습니다.</p>}
        {userList.map((user, index) => (
          <div key={index}>
            <p>이름: {user.name}</p>
            <p>지역: {user.addr}</p>
            <p>출생년도: {user.birthyear}</p>
            <hr />
          </div>
        ))}
      </div> */}
    </div>
  );
}
