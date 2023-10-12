import React from "react";
import styles from "./LandingPage.module.css";
import DashboardNav from "../layouts/DashboardNav";
import LandingBanner from "../modules/LandingBanner";
import Pelans from "../modules/Pelans";
import Features from "../modules/Features";
import FAQs from "../modules/FAQs";
import ContactUs from "../modules/ContactUs";
import AboutUs from "../modules/AboutUs";
import Supporters from "../modules/Supporters";
import Privacy from "../modules/Privacy";
import Footer from "../modules/Footer";

function LandingPage() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <DashboardNav />
        <LandingBanner />
        <Pelans />
        <Features />
        <FAQs />
        <ContactUs />
        <AboutUs />
        <Supporters />
        <Privacy />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
