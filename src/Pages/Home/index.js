import React from "react";
import Header from "../../Components/Header";
import LiveClasses from "../../Components/LiveClasses";
// import TopSlider from "../../Components/TopSlider";
import Card from "../../Components/Card";
import Commonsection from "../../Components/Commonsection";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <LiveClasses />
      {/* <TopSlider /> */}
      <Commonsection title="Weekly Schedule" />
      <Card />
      <Commonsection title="About Skooled" />
    </div>
  );
}
