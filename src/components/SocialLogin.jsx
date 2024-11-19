import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";

const SocialLogin = () => {
  const {handleGoogleLogin} = useContext(AuthContext)
  return (
    <div>
        <h1 className="font-semibold text-xl mb-6">Login With</h1>
      <div className="*:w-full space-y-2">
        <button onClick={handleGoogleLogin} className="btn">
          <FcGoogle /> Login With Google
        </button>
        <button className="btn">
          <FaGithub /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
