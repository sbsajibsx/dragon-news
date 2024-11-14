import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="flex space-x-5 items-center">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="career">Career</Link>
            </div>
            <div className="flex items-center space-x-2">
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <Link to="/auth/login" className="btn btn-neutral text-xl font-semibold px-10">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;