import React from "react";
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { MapPin } from "lucide-react";

const LocationsView = ({ crimeByLocation }) => {
  return (
    <div className="space-y-6">
      {/* Crime by Location */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Crime by Location</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={crimeByLocation} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis type="number" stroke="#666" />
            <YAxis dataKey="location" type="category" stroke="#666" width={100} />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Location Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crimeByLocation.map((location) => (
          <div key={location.location} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">{location.location}</h4>
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Incidents</span>
                <span className="font-semibold">{location.count}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Crime Rate</span>
                <span className="font-semibold">{location.rate}/1000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${(location.count / Math.max(...crimeByLocation.map(l => l.count))) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationsView;
