import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {

    return (
        <div>
            <h1>Madang BookMarket Store</h1>
            <Link to="/">Home | </Link>
            <Link to="/orderinfo">OrderInfo</Link>
            <hr></hr>
            <Outlet />
        </div>
    )
};
