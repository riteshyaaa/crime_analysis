import React from "react";
import { TrendingUp, Calendar, MapPin, AlertTriangle } from "lucide-react";

const NavigationTabs = ({ activeView, setActiveView }) => {
  const tabs = [
    { id: "overview", label: "Overview", icon: TrendingUp },
    { id: "trends", label: "Trends", icon: Calendar },
    { id: "locations", label: "Locations", icon: MapPin },
    { id: "types", label: "Crime Types", icon: AlertTriangle },
  ];

  return (
    <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveView(tab.id)}
          className={`flex items-center px-4 py-2 rounded-md transition-all duration-200 ${
            activeView === tab.id
              ? "bg-white shadow text-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <tab.icon className="w-4 h-4 mr-2" />
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default NavigationTabs;
