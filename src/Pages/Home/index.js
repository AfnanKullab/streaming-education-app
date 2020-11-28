import React from "react";
import Header from "../../Components/Header";
import LiveClasses from "../../Components/LiveClasses";
// import TopSlider from "../../Components/TopSlider";
import Commonsection from "../../Components/Commonsection";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <LiveClasses />
      {/* <TopSlider /> */}
      <Commonsection title="Weekly Schedule" />
      <Commonsection title="About Skooled" />
    </div>
  );
}
