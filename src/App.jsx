import React, { useMemo, useState } from "react";
import { Shield, Download } from "lucide-react";
import { generateCrimeData } from "./utils/dataGenerator";
import FilterSection from "./components/FilterSection";
import NavigationTabs from "./components/NavigationTabs";
import OverviewView from "./views/OverviewView";
import TrendsView from "./views/TrendsView";
import LocationsView from "./views/LocationsView";
import CrimeTypesView from "./views/CrimeTypesView";

const App = () => {
  const [activeView, setActiveView] = useState("overview");
  const { monthlyData, crimeByType, crimeByLocation } = useMemo(() => generateCrimeData(), []);

  const renderActiveView = () => {
    switch (activeView) {
      case "overview":
        return <OverviewView monthlyData={monthlyData} crimeByType={crimeByType} />;
      case "trends":
        return <TrendsView monthlyData={monthlyData} />;
      case "locations":
        return <LocationsView crimeByLocation={crimeByLocation} />;
      case "types":
        return <CrimeTypesView crimeByType={crimeByType} />;
      default:
        return <OverviewView monthlyData={monthlyData} crimeByType={crimeByType} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Crime Analytics Dashboard</h1>
            </div>
            <div>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterSection />
        <NavigationTabs activeView={activeView} setActiveView={setActiveView} />
        {renderActiveView()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-600 text-sm">
            Crime Analytics Dashboard • Data updated in real-time • Built for public safety insights
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
