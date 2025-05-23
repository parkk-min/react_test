import { useState } from "react";
import apiClient from "../api/apiClient";
import { useDispatch } from "react-redux";
import { setList } from "../userSlice";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function DetailCondition() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedCondition } = useOutletContext();

  const [addr, setAddr] = useState("");
  const [birthyear, setBirthyear] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    navigate("/displayUserInfo")
    if (selectedCondition.addr && !selectedCondition.birthyear) {
      try {
        const response = await apiClient.get("/userinfo/addr/" + addr);
        dispatch(setList(response.data));
      } catch (error) {
        console.log(error);
      }
    } else if (!selectedCondition.addr && selectedCondition.birthyear) {
      try {
        const response = await apiClient.get(
          "/userinfo/birthyear/" + birthyear
        );
        dispatch(setList(response.data));
      } catch (error) {
        console.log(error);
      }
    } else if (selectedCondition.addr && selectedCondition.birthyear) {
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
        {selectedCondition.addr && (
          <div>
            Region:
            <input
              type="text"
              name="addr"
              value={addr}
              onChange={(e) => setAddr(e.target.value)}
            />
          </div>
        )}
        {selectedCondition.birthyear && (
          <div>
            Birthyear:
            <input
              type="number"
              name="birthyear"
              value={birthyear}
              onChange={(e) => setBirthyear(e.target.value)}
            />
          </div>
        )}
        <button type="submit">Search</button>
      </form>

    </div>
  );
}
