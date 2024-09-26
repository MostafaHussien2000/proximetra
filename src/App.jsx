import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home-page/HomePage";
import AboutPage from "./pages/about-page/AboutPage";
import ServicePage from "./pages/services-page/ServicesPage";
import IndustriesPage from "./pages/industries-pages/IndustriesPage";
import CareersPage from "./pages/careers-page/CareersPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

import NavBar from "@/components/Navbar";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/projects-page/ProjectsPage";
import ProjectDetailsPage from "./pages/projects-page/ProjectDetailsPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={"/"} Component={HomePage} />
        <Route path={"/about"} Component={AboutPage} />
        <Route path={"/services"} Component={ServicePage} />
        <Route path={"/industries"} Component={IndustriesPage} />
        <Route path={"/careers"} Component={CareersPage} />
        <Route path={"/work"} Component={ProjectsPage} />
        <Route path={"/work/:slug"} Component={ProjectDetailsPage} />
        <Route path={"/contact"} Component={ContactUsPage} />
        <Route path={"/privacy-policy"} Component={PrivacyPolicy} />
        <Route path={"/terms-of-service"} Component={TermsOfService} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
