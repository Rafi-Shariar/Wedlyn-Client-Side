import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FaMoneyBillWave } from "react-icons/fa";

// Light pastel color palette
const COLORS = ["#A5D8FF", "#FFC9DE", "#FFDCA5", "#D3F9D8"];

const DashboardBiodataStats = ({ stats }) => {
  const {
    totalBiodatas,
    totalMaleBiodatas,
    totalFemaleBiodatas,
    totalPremiumBiodatas,
    totalRevenue,
  } = stats || {};

  // Prepare data for the pie chart
  const chartData = [
    { name: "Male Biodatas", value: totalMaleBiodatas },
    { name: "Female Biodatas", value: totalFemaleBiodatas },
    { name: "Premium Biodatas", value: totalPremiumBiodatas },
    {
      name: "Others",
      value: totalBiodatas - (totalMaleBiodatas + totalFemaleBiodatas),
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-center text-primary mb-6">Biodata Statistics</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Pie Chart */}
        <ResponsiveContainer width={300} height={300}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              innerRadius={50}
              paddingAngle={4}
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="#fff" />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        {/* Revenue Summary */}
        {/* <div className="text-center space-y-3">
          <p className="text-lg text-gray-700">Total Biodatas: <span className="font-semibold">{totalBiodatas}</span></p>
          <p className="text-lg text-gray-700">Male: <span className="font-semibold">{totalMaleBiodatas}</span></p>
          <p className="text-lg text-gray-700">Female: <span className="font-semibold">{totalFemaleBiodatas}</span></p>
          <p className="text-lg text-gray-700">Premium: <span className="font-semibold">{totalPremiumBiodatas}</span></p>
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center gap-2">
            <FaMoneyBillWave className="text-green-500 text-2xl" />
            <span className="text-xl font-bold text-green-700">
              Total Revenue: ${totalRevenue}
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DashboardBiodataStats;
