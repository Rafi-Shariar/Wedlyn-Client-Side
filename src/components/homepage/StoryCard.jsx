import React from "react";
import mark from "../../assets/quote.png";
import StarRatings from "react-star-ratings";

const StoryCard = ({ story }) => {
  const { reviewStar, successStory, userImage, userName, marriageDate } = story;

  // Helper to truncate text to 60 words
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between max-w-sm w-full h-[320px] mx-4">
      {/* Quote icon and stars */}
      <div className="flex items-center justify-between mb-3">
        <img src={mark} alt="Quote icon" className="w-10 h-10 opacity-30" />
        <StarRatings
          rating={reviewStar}
          starRatedColor="#fbbf24"
          numberOfStars={5}
          starDimension="24px"
          starSpacing="2px"
          name="rating"
        />
      </div>

      {/* Success Story Text */}
      <p className="text-gray-700 text-sm leading-relaxed font-serif flex-grow overflow-hidden">
        {truncateText(successStory, 60)}
      </p>

      {/* User Info */}
      <div className="flex items-center space-x-4 mt-6">
        <img
          src={userImage}
          alt={userName}
          className="w-14 h-14 rounded-full object-cover border-2 border-secondary"
        />
        <div>
          <h3 className="text-lg font-semibold text-primary">{userName}</h3>
          <p className="text-sm text-gray-500">
            Married on{" "}
            {new Date(marriageDate).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
