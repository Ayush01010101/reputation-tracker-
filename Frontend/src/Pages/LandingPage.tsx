import type { ReactNode } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import WhyChooseUs from "../Components/WhyChooseUs";
import Testimonials from "../Components/Testimonials";
import DashboardStats from "../Components/Dashboard";
import Pricing from "../Components/Pricing";
import Footer from "../Components/Footer";
const LandingPage = (): ReactNode => {
  return (

    <div>
      <Navbar />
      <Hero />
      <Features />

      <DashboardStats />
      <WhyChooseUs />

      <Testimonials />
      <Pricing />
      <Testimonials />
      <Footer />

    </div>
  )
}

export default LandingPage
