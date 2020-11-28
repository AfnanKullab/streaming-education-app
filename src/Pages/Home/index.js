import React from "react";
import Header from "../../Components/Header";
import LiveClasses from "../../Components/LiveClasses";
// import TopSlider from "../../Components/TopSlider";
import Card from "../../Components/Card";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <LiveClasses />
      {/* <TopSlider /> */}
      <Card />
    </div>
  );
}
