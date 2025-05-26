import { useDispatch } from "react-redux";
import apiClient from "../api/apiClient";
import { setOrderList } from "./orderSlice";
import { Outlet, useNavigate } from "react-router-dom";

export default function OrderInfo() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSelect = async (e) => {
        e.preventDefault();
        let condition = null;
        const date = e.target.date.value;

        if (e.target.period[0].checked) {
            condition = "previous";
        }
        if (e.target.period[1].checked) {
            condition = "after";
        }
        try {
            const response = await apiClient.get(`/order-info/${condition}`, {
                params: { date },
            });
            dispatch(setOrderList(response.data));
            navigate("/orderinfo/data")

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSelect}>
                Previous
                <input type="radio"
                    name="period"
                    value="previous" />
                After
                <input type="radio"
                    name="period"
                    value="after" />
                <input type="date" name="date" required />
                <button type="submit">Select</button>
            </form>
            <hr />
            <Outlet />
        </div>
    );

};
