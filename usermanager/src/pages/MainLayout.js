import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div>
            <h1>Customer Management</h1>
            <Link to="/">Home | </Link>
            <Link to="/search">Search | </Link>
            <Link to="/join">UserJoin</Link>
            <hr></hr>
            <Outlet />
        </div>
    )
};
