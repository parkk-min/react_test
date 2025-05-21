import { Outlet } from "react-router-dom";
import DetailCondition from "./DetailCondition";
import { useState } from "react";

export default function ConditionSelect() {

    const [checkboxCondition, setCheckboxCondition] = useState({
        addr: false,
        birthyear: false
    });


    const [selectedCondition, setSelectedCondition] = useState({
        addr: false,
        birthyear: false
    });

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        setCheckboxCondition(s => ({
            ...s,
            [name]: checked
        }));
    };

    const handleSelect = () => {
        setSelectedCondition(checkboxCondition);
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
            <DetailCondition conditions={selectedCondition}></DetailCondition>
            <Outlet />
        </div>
    )

};
