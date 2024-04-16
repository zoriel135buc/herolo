export const WeatherComponent = (date) => {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayNumber = new Date(date).getDay();
  const dayName = dayNames[dayNumber];
  return dayName;
};
