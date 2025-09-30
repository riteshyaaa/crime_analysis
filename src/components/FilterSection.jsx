import React, { useState } from "react";
import { Search } from "lucide-react";

const FilterSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTimeRange, setSelectedTimeRange] = useState("12months");
  const [selectedCrimeType, setSelectedCrimeType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search crimes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Time Range */}
        <select
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="1month">Last Month</option>
          <option value="3months">Last 3 Months</option>
          <option value="6months">Last 6 Months</option>
          <option value="12months">Last 12 Months</option>
        </select>

        {/* Crime Type */}
        <select
          value={selectedCrimeType}
          onChange={(e) => setSelectedCrimeType(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Crime Types</option>
          <option value="theft">Theft</option>
          <option value="assault">Assault</option>
          <option value="burglary">Burglary</option>
          <option value="vandalism">Vandalism</option>
        </select>

        {/* Location */}
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Locations</option>
          <option value="downtown">Downtown</option>
          <option value="northside">North Side</option>
          <option value="southside">South Side</option>
          <option value="eastend">East End</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
