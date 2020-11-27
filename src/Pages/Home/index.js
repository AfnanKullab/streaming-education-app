import React from "react";
import Header from "../../Components/Header";
import LiveClasses from "../../Components/LiveClasses";
import TopSlider from "../../Components/TopSlider";
import WeeklySchedule from "../../Components/WeeklySchedule";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <LiveClasses />
      <TopSlider />
      <WeeklySchedule />
    </div>
  );
}
