import React, { useMemo } from "react";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import StatCard from "../components/StatCard";
import { Shield, AlertTriangle, MapPin, Users } from "lucide-react";

const OverviewView = ({ monthlyData, crimeByType }) => {
  const colors = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6", "#06b6d4", "#f97316"];

  const totalCrimes = useMemo(() => {
    return monthlyData.reduce((sum, month) => sum + month.totalCrimes, 0);
  }, [monthlyData]);

  const crimeGrowthRate = useMemo(() => {
    const recent = monthlyData.slice(-3).reduce((sum, month) => sum + month.totalCrimes, 0);
    const previous = monthlyData.slice(-6, -3).reduce((sum, month) => sum + month.totalCrimes, 0);
    return previous > 0 ? (((recent - previous) / previous) * 100).toFixed(1) : 0;
  }, [monthlyData]);

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Crimes"
          value={totalCrimes.toLocaleString()}
          icon={Shield}
          trend={`${crimeGrowthRate > 0 ? "+" : ""}${crimeGrowthRate}%`}
          color="text-blue-600"
        />
        <StatCard
          title="Most Common"
          value="Theft"
          icon={AlertTriangle}
          trend="34% of total"
          color="text-red-600"
        />
        <StatCard
          title="Hotspot Area"
          value="Downtown"
          icon={MapPin}
          trend="High density"
          color="text-purple-600"
        />
        <StatCard
          title="Clearance Rate"
          value="67%"
          icon={Users}
          trend="+2.3%"
          color="text-green-600"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Crime Trends Over Time */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Crime Trends Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="colorCrimes" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
              />
              <Area type="monotone" dataKey="totalCrimes" stroke="#3b82f6" fillOpacity={1} fill="url(#colorCrimes)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Crime Distribution */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Crime Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={crimeByType.slice(0, 6)}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {crimeByType.slice(0, 6).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default OverviewView;
