import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const AdminDashboardHome = () => {
  const { data: stats = {} } = useQuery({
    queryKey: ["getstats"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_URL}/adminstats`);
      return res.data;
    },
  });

  return (
    <div className="">
      <div>
        <h1 className="text-3xl">Admin Dashboard</h1>
        <p className="text-gray-500">
          Plan, prioritize, and accomplish your task with ease.
        </p>
      </div>

      {/* Stats Section */}
      <section className="max-w-5xl mt-6 bg-slate-200 p-5 rounded-2xl">
        <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
          <div className="border  rounded-2xl p-4 bg-gradient-to-b from-primary to-secondary text-white">
            <p className="text-xl">Total Revenue</p>
            <p className="text-3xl mt-3 font-semibold">
              {stats?.totalRevenue} <span className="text-lg">USD</span>
            </p>
            <p className="text-xm mt-2">Total revenue earned so far</p>
          </div>

          <div className="border rounded-2xl p-4 bg-slate-50  border-secondary">
            <p className="text-xl">Total Biodatas</p>
            <p className="text-3xl mt-3 font-semibold">
              {stats?.totalBiodatas}
            </p>
            <p className="text-xm mt-2 text-primary">Number of available biodatas</p>
          </div>

          <div className="border  rounded-2xl p-4 bg-slate-50  border-secondary">
            <p className="text-xl">Male Biodatas</p>
            <p className="text-3xl mt-3 font-semibold">
              {stats?.totalMaleBiodatas}
            </p>
            <p className="text-xm mt-2 text-primary">Available male biodatas</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          <div className="border rounded-2xl p-4 bg-slate-50  border-secondary">
            <p className="text-xl">Female Biodatas</p>
            <p className="text-3xl mt-3 font-semibold">
              {stats?.totalFemaleBiodatas}
            </p>
            <p className="text-xm mt-2 text-primary">Available female biodatas</p>
          </div>

          <div className="border rounded-2xl p-4 bg-slate-50 border-secondary">
            <p className="text-xl">Premium Biodatas</p>
            <p className="text-3xl mt-3 font-semibold">
              {stats?.totalPremiumBiodatas}
            </p>
            <p className="text-xm mt-2 text-primary">Available premium biodatas</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboardHome;
