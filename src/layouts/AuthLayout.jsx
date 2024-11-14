import { Outlet } from "react-router-dom";


const AuthLayout = () => {
    return (
        <div>
            author
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;