import { useState } from "react";
import apiClient from "../api/apiClient";

export default function DetailCondition({ conditions }) {
    const [addr, setAddr] = useState("");
    const [birthyear, setBirthyear] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        if (conditions.addr && !conditions.birthyear) {
            try {
                const response = await apiClient.get("/userinfo/addr/" + addr);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        } else if (!conditions.addr && conditions.birthyear) {
            try {
                const response = await apiClient.get("/userinfo/birthyear/" + birthyear);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        } else if (conditions.addr && conditions.birthyear) {
            try {
                const response = await apiClient.get("/userinfo/addr-birthyear", {
                    params: {
                        addr,
                        birthyear
                    }
                })
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                {conditions.addr && (
                    <div>지역:
                        <input type="text" name="addr" value={addr}
                            onChange={(e) => setAddr(e.target.value)}
                        /></div>
                )}
                {conditions.birthyear && (
                    <div>출생년도:
                        <input type="text" name="birthyear" value={birthyear}
                            onChange={(e) => setBirthyear(e.target.value)}
                        /></div>
                )}
                <button type="submit">검색</button>
            </form>
        </div>
    )

};
