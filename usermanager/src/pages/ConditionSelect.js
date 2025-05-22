import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ConditionSelect() {
    const navigate = useNavigate();

    const [checkboxCondition, setCheckboxCondition] = useState({
        addr: false,
        birthyear: false
    });


    const [selectedCondition, setSelectedCondition] = useState({
        addr: false,
        birthyear: false
    });

    const handleCheckbox = (e) => {
        const { name, checked } = e.target; // e.target에서 name과 checked 값을 추출해서 상태를 업데이트
        setCheckboxCondition(state => ({
            ...state, // 기존 상태를 복사
            [name]: checked // 해당 name(addr 또는 birthyear)의 상태만 업데이트
        }));
    };

    const handleSelect = () => {
        setSelectedCondition(checkboxCondition); 
        navigate("/search/detail-condition");
        // 현재 체크 상태(checkboxCondition)를 선택된 조건(selectedCondition)에 저장
    };

    return (
        <div>
            <span>지역:
                <input type="checkbox" name="addr"
                    checked={checkboxCondition.addr}
                    onChange={handleCheckbox}>
                </input></span>
            <span>출생년도:
                <input type="checkbox" name="birthyear"
                    checked={checkboxCondition.birthyear}
                    onChange={handleCheckbox}>
                </input></span>
            <button onClick={handleSelect}>조건선택</button>
            <br></br><br></br>
            <Outlet context={{selectedCondition}}></Outlet>
        </div>
    )
};
