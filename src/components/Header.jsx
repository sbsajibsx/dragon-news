import moment from "moment";
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center py-2 gap-2">
            <div>
                <img className="w-96" src={logo} alt="" />
            </div>
            <h1 className="text-gray-400">Journalism Without Fear or Favour</h1>
            <p className="text-xl font-medium">{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;