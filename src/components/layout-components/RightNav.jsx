import FindUs from "../FindUs";
import Qzone from "../Qzone";
import SocialLogin from "../SocialLogin";
import adds from "../../assets/bg.png"


const RightNav = () => {
    return (
        <div className="space-y-9">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
            <img src={adds} alt="" />
        </div>
    );
};

export default RightNav;