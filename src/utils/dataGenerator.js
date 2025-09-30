export const generateCrimeData = () => {
  const crimeTypes = ["Theft", "Assault", "Burglary", "Vandalism", "Drug Offense", "Vehicle Crime", "Fraud"];
  const locations = ["Downtown", "North Side", "South Side", "East End", "West End", "Suburbs"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const monthlyData = months.map((month) => ({
    month,
    totalCrimes: Math.floor(Math.random() * 200) + 50,
    theft: Math.floor(Math.random() * 40) + 10,
    assault: Math.floor(Math.random() * 30) + 5,
    burglary: Math.floor(Math.random() * 25) + 5,
    vandalism: Math.floor(Math.random() * 20) + 5,
    drugOffense: Math.floor(Math.random() * 15) + 5,
    vehicleCrime: Math.floor(Math.random() * 35) + 10,
    fraud: Math.floor(Math.random() * 20) + 5,
  }));

  const crimeByType = crimeTypes.map((type) => ({
    type,
    count: Math.floor(Math.random() * 150) + 50,
    severity: Math.random() > 0.5 ? "High" : Math.random() > 0.3 ? "Medium" : "Low",
  }));

  const crimeByLocation = locations.map((location) => ({
    location,
    count: Math.floor(Math.random() * 100) + 20,
    rate: (Math.random() * 5 + 1).toFixed(1),
  }));

  return { monthlyData, crimeByType, crimeByLocation };
};
