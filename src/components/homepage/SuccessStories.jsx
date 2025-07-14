import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingSkeleton from "../shared/LoadingSkeleton";
import Marquee from "react-fast-marquee";
import StoryCard from "./StoryCard";
const SuccessStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/successstories`)
      .then((res) => {
        setStories(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="px-4 py-16 sm:px-6 lg:px-8 text-center mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Real Stories, Real Connections
        </h1>
        <p className="text-gray-600 text-base leading-relaxed  mx-auto">
          Every successful match is a beautiful story, and at{" "}
          <strong>Wedlyn</strong>, we're honored to have played a role in so
          many meaningful unions. Read heartwarming stories from real couples
          who found their life partners through our platform. These inspiring
          journeys prove that love, trust, and the right connection can lead to
          forever.
        </p>
      </div>

      <div>
        {loading ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <LoadingSkeleton></LoadingSkeleton>
              <LoadingSkeleton></LoadingSkeleton>
              <LoadingSkeleton></LoadingSkeleton>
            </div>
          </>
        ) : (
          <>
            
              <Marquee >
               {
                stories.map(story => <StoryCard key={story._id} story={story}></StoryCard>)
               }
              </Marquee>
            
          </>
        )}
      </div>
    </div>
  );
};

export default SuccessStories;
