import React from "react";
import Header from "../../Components/Header";
import LiveClasses from "../../Components/LiveClasses";
//import TopSlider from "../../Components/TopSlider";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <LiveClasses />
    </div>
  );
}
