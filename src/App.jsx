import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import CTAFooter from "./components/CTAFooter";

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Header />
      <Hero />
      <StatsBar />
      <Services />
      <Industries />
      <Process />
      <WhyUs />
      <CTAFooter />
    </div>
  );
}
