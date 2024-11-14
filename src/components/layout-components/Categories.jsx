
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect( () => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            <h1 className="mb-6 text-xl font-semibold">All Categories ({categories.length})</h1>
            <div className="flex gap-1 flex-col">
                {
                    categories.map(category => <NavLink to={`/category/${category.category_id}`} className="btn bg-white text-xl font-normal" key={category.category_id}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;