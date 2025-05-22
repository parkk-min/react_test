import { Link, Outlet } from "react-router-dom";

export default function Join() {

    return (
        <div>
            <Link to="create-userinfo">Join Add | </Link>
            <Link to="buy-userinfo">Buy Add</Link>
            <hr></hr>
            <Outlet></Outlet>
        </div>
    )

};
