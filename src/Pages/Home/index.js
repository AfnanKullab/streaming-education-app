import React from "react";
import Header from "../../Components/Header";
import LiveClasses from "../../Components/LiveClasses";
import Slider from "../../Components/Slider";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <LiveClasses />
      <Slider />
    </div>
  );
}
