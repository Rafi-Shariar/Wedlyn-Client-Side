import axios from "axios";
import React, { useEffect, useState } from "react";
import BiodataCard from "../components/homepage/BiodataCard";
import LoadingSkeleton from "../components/shared/LoadingSkeleton";
import { fetchFilteredBiodatas } from "../utils/fetchFilteredBiodatas";
import toast from "react-hot-toast";

const divisions = [
  "Dhaka",
  "Chattogram",
  "Rangpur",
  "Barisal",
  "Khulna",
  "Mymensingh",
  "Sylhet",
];

export const BiodatasPage = () => {
  document.title = "Wedlyn | Biodatas";
  const [ageRange, setAgeRange] = useState([18, 50]);
  const [biodataType, setBiodataType] = useState("");
  const [division, setDivision] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [biodatas, setBiodatas] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const limit = 20;
  const [totalCount, setTotalCount] = useState(0);

  const handleAgeChange = (e) => {
    const val = Number(e.target.value);
    setAgeRange([10, val]);
  };

  useEffect(() => {
    setLoading(true);
    fetchFilteredBiodatas({ ageRange, biodataType, division, page, limit })
      .then(({ biodatas, total }) => {
        setBiodatas(biodatas);
        setTotalCount(total);
      })
      .catch(() => {
        toast.error("Failed to load biodatas");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [ageRange, biodataType, division, page]);

  useEffect(() => {
    setPage(1);
  }, [ageRange, biodataType, division]);

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div>
      <div className="max-w-7xl mx-auto p-6 lg:p-10 min-h-screen flex flex-col lg:flex-row gap-8">
        {/* Filter Dropdown for Mobile/Tablet */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="w-full bg-primary text-white rounded-md py-3 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex justify-between items-center px-4"
            aria-expanded={filtersOpen}
            aria-controls="mobile-filters"
          >
            Filters
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${
                filtersOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {filtersOpen && (
            <div
              id="mobile-filters"
              className="mt-4 bg-white rounded-xl shadow-md p-6 space-y-6"
            >
              {/* Age Range */}
              <div>
                <label
                  htmlFor="ageRangeMobile"
                  className="block font-medium mb-2"
                >
                  Age Range: {ageRange[0]} - {ageRange[1]}
                </label>
                <input
                  type="range"
                  min="18"
                  max="60"
                  id="ageRangeMobile"
                  value={ageRange[1]}
                  onChange={handleAgeChange}
                  className="w-full"
                />
              </div>

              {/* Biodata Type */}
              <div>
                <p className="font-medium mb-2">Biodata Type</p>
                <div className="space-y-2">
                  {["Male", "Female", ""].map((type) => (
                    <label
                      key={type || "any"}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="biodataTypeMobile"
                        value={type}
                        checked={biodataType === type}
                        onChange={() => setBiodataType(type)}
                        className="cursor-pointer"
                      />
                      {type === ""
                        ? "Any"
                        : type.charAt(0).toUpperCase() + type.slice(1)}
                    </label>
                  ))}
                </div>
              </div>

              {/* Division */}
              <div>
                <label
                  htmlFor="divisionMobile"
                  className="block font-medium mb-2"
                >
                  Division
                </label>
                <select
                  id="divisionMobile"
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">All Divisions</option>
                  {divisions.map((div) => (
                    <option key={div} value={div}>
                      {div}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-1/4 bg-white rounded-xl shadow-md p-6 sticky top-24 self-start">
          <h2 className="text-xl font-semibold mb-6 border-b pb-2">
            Filter Options
          </h2>

          <div className="mb-6">
            <label htmlFor="ageRange" className="block font-medium mb-2">
              Age Range: {ageRange[0]} - {ageRange[1]}
            </label>
            <input
              type="range"
              min="18"
              max="60"
              id="ageRange"
              value={ageRange[1]}
              onChange={handleAgeChange}
              className="w-full text-amber-300"
            />
          </div>

          <div className="mb-6">
            <p className="font-medium mb-2">Biodata Type</p>
            <div className="space-y-2">
              {["Male", "Female", ""].map((type) => (
                <label
                  key={type || "any"}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="biodataType"
                    value={type}
                    checked={biodataType === type}
                    onChange={() => setBiodataType(type)}
                    className="cursor-pointer"
                  />
                  {type === ""
                    ? "Any"
                    : type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="division" className="block font-medium mb-2">
              Division
            </label>
            <select
              id="division"
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              className="w-full border border-primary rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Divisions</option>
              {divisions.map((div) => (
                <option key={div} value={div}>
                  {div}
                </option>
              ))}
            </select>
          </div>
        </aside>

        {/* Biodata List */}
        <main className="flex-1">
          <h2 className="text-2xl font-semibold mb-6">
            Available Biodatas ( {biodatas.length} )
          </h2>
          {loading ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <LoadingSkeleton></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {biodatas.map((biodata) => (
                  <BiodataCard
                    key={biodata._id}
                    biodata={biodata}
                  ></BiodataCard>
                ))}
              </div>
            </>
          )}
        </main>
      </div>

      <div className="mt-8 flex justify-center flex-wrap gap-2 ">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded-md border bg-white hover:bg-gray-100 disabled:opacity-50"
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded-md border ${
              page === i + 1
                ? "bg-primary text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 rounded-md border bg-white hover:bg-gray-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};
