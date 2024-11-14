import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ( props = {}) => {
    const { news } = props || {};
    const {
        title,
        author: { name: authorName, img: authorImage, 
            published_date: publishedDate },
        image_url: imageUrl,
        details: description,
        rating: { number: rating },
        total_view: views
    } = news;

    // Helper function to render dynamic stars based on the rating
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} className="text-orange-500" />);
        }

        if (hasHalfStar) {
            stars.push(<FaStar key="half" className="text-orange-500" />);
        }

        while (stars.length < 5) {
            stars.push(<FaStar key={`empty-${stars.length}`} className="text-gray-300" />);
        }

        return stars;
    };

    return (
        <div className=" bg-base-100 shadow-xl rounded-xl">
            {/* Header with Author Info */}
            <div className="flex items-center justify-between px-4 pt-4">
                <div className="flex items-center space-x-3">
                    <img
                        src={authorImage}
                        alt="Author"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h2 className="text-sm font-semibold">{authorName}</h2>
                        <p className="text-xs text-gray-500">{new Date(publishedDate).toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="flex space-x-3">
                    <FaBookmark className="text-gray-500 cursor-pointer" />
                    <FaShareAlt className="text-gray-500 cursor-pointer" />
                </div>
            </div>

            {/* Image Section */}
            <figure className="px-4 pt-4">
                <img
                    src={imageUrl}
                    alt="News Thumbnail"
                    className="w-full h-48 object-cover rounded-lg"
                />
            </figure>

            {/* Card Body */}
            <div className="card-body px-4">
                {/* Title */}
                <h2 className="text-lg font-bold">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2 mb-4">
                    {description}
                </p>
                <p className="text-primary cursor-pointer font-semibold text-sm">
                    Read More
                </p>

                {/* Footer with Ratings and Views */}
                <div className="flex items-center justify-between mt-4 border-t pt-4">
                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                        {renderStars()}
                        <span className="text-sm font-semibold text-gray-500 ml-2">{rating.toFixed(1)}</span>
                    </div>

                    {/* Views */}
                    <div className="flex items-center text-gray-500">
                        <FaEye className="mr-1" />
                        <span className="text-sm">{views}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
