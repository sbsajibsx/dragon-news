import swim from "../assets/swimming.png"
import play from "../assets/playground.png"

const Qzone = () => {
    return (
        <div className="bg-slate-200 py-3 px-2">
            <h1 className="text-xl font-semibold mb-3">Q Zone</h1>
            <div className="p-8 space-y-4">
                <img src={swim} alt="" />
                <img src={play} alt="" />
            </div>
        </div>
    );
};

export default Qzone;