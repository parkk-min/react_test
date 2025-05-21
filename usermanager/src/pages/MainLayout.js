import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div>
            <h1>고객관리</h1>
            <Link to="/">Home|</Link>
            <Link to="/search">search</Link>
            <Outlet />
        </div>
    )
};
