import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
    const {data: news} = useLoaderData();
    
    return (
        
        <div>
            <h1 className="font-semibold text-xl mb-6">Dragon News Home</h1>
            <div className="space-y-4">
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;