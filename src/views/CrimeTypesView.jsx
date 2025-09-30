import React from "react";
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const CrimeTypesView = ({ crimeByType }) => {
  return (
    <div className="space-y-6">
      {/* Crime Types Analysis */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Crime Types Analysis</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={crimeByType}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="type" stroke="#666" angle={-45} textAnchor="end" height={100} />
            <YAxis stroke="#666" />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CrimeTypesView;
