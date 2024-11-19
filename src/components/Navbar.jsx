import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    return (
        <div className="flex justify-between items-center">
            <div>{user && user.email}</div>
            <div className="flex space-x-5 items-center">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="career">Career</Link>
            </div>
            <div className="flex items-center space-x-2">
                {
                    user && user?.email? <div className="flex items-center space-x-2">
                        <img className="w-11 h-11 rounded-full" src={user?.photoURL} alt="" />
                        <p>{user?.displayName}</p>
                    </div> : <div>
                    <img src={userIcon} alt="" />
                </div>
                }
                
                {
                    user && user.email? <button onClick={logOut} className="btn btn-neutral text-xl font-semibold px-10">LogOut</button> : <Link to="/auth/login" className="btn btn-neutral text-xl font-semibold px-10">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;