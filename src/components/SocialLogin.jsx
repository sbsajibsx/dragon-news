import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
        <h1 className="font-semibold text-xl mb-6">Login With</h1>
      <div className="*:w-full space-y-2">
        <button className="btn">
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
