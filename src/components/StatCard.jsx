import React from "react";
import { TrendingUp } from "lucide-react";

const StatCard = ({ title, value, icon: Icon, trend, color = "text-blue-600" }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm font-medium">{title}</p>
        <p className={`text-3xl font-bold ${color} mt-2`}>{value}</p>
        {trend && (
          <p
            className={`text-sm mt-2 flex items-center ${
              trend.startsWith("+") ? "text-red-600" : "text-green-600"
            }`}
          >
            <TrendingUp className="w-4 h-4 mr-1" />
            {trend}
          </p>
        )}
      </div>
      <div
        className={`p-3 rounded-full bg-gradient-to-r ${
          color.includes("blue")
            ? "from-blue-50 to-blue-100"
            : color.includes("red")
            ? "from-red-50 to-red-100"
            : color.includes("green")
            ? "from-green-50 to-green-100"
            : "from-purple-50 to-purple-100"
        }`}
      >
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
    </div>
  </div>
);

export default StatCard;
