import { useEffect, useState } from "react";
import women from "../../assets/CountUps/businesswoman.png";
import men from "../../assets/CountUps/man.png";
import marriage from "../../assets/CountUps/rings.png";
import axios from "axios";
import CountUp from "react-countup";
export const Statistic = () => {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/stats`)
      .then((res) => {
        setCounts(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gradient-to-l from-primary via-accent to-secondary mt-16 rounded-3xl">
      <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
        {/* Women */}
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <h6 className="mr-3 text-5xl font-extrabold text-primary">
              <CountUp end={counts.totalGirls} />
            </h6>
            <div className="flex items-center justify-center rounded-full bg-secondary w-10 h-10">
              <img src={women} alt="Women Icon" className="w-6 h-6" />
            </div>
          </div>
          <p className="mb-2 text-xl font-semibold text-black">
            Registered Brides
          </p>
          <p className="text-black max-w-sm mx-auto">
            Explore thousands of verified profiles of eligible brides seeking
            meaningful relationships and lasting marriages.
          </p>
        </div>

        {/* Men */}
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <h6 className="mr-3 text-5xl font-extrabold text-primary">
              <CountUp end={counts.totalBoys} />
            </h6>
            <div className="flex items-center justify-center rounded-full bg-secondary w-10 h-10">
              <img src={men} alt="Men Icon" className="w-6 h-6" />
            </div>
          </div>
          <p className="mb-2 text-xl font-semibold text-black">
            Registered Grooms
          </p>
          <p className="text-black max-w-sm mx-auto">
            Connect with thousands of verified groom profiles actively searching
            for their perfect life partner. Join our community to find your
            match.
          </p>
        </div>

        {/* Marriages */}
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <h6 className="mr-3 text-5xl font-extrabold text-primary">
              <CountUp end={counts.totalMarriages} />
            </h6>
            <div className="flex items-center justify-center rounded-full bg-secondary w-10 h-10">
              <img src={marriage} alt="Marriage Icon" className="w-6 h-6" />
            </div>
          </div>
          <p className="mb-2 text-xl font-semibold text-black">
            Successful Marriages
          </p>
          <p className="text-black max-w-sm mx-auto">
            Celebrating the journeys of couples united through Wedlyn, we
            proudly share success stories of marriages that started right here
            on our platform.
          </p>
        </div>
      </div>
    </div>
  );
};
