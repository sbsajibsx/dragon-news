import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl mb-4">Find Us On</h1>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start"><span className="text-blue-900"><FaFacebook></FaFacebook></span> Facebook</button>
        <button className="btn join-item justify-start"><span className="text-blue-500"><FaTwitter /></span> Twitter</button>
        <button className="btn join-item justify-start"><FaInstagram /> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
