import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-2 p-3 bg-slate-200">
            <h1 className="bg-[#D72050] text-white px-3 py-1">Latest</h1>
            <Marquee className="space-x-10 font-semibold" pauseOnHover={true} speed={100}>
                <Link to="/news">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, expedita!</Link>
                <Link to="/news">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, expedita!</Link>
                <Link to="/news">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, expedita!</Link>
                <Link to="/news">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, expedita!</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;