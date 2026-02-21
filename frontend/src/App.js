import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "@/App.css";
import "./styles/evolvance.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Services from "./components/Services";
import BrandValues from "./components/BrandValues";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DemoPage from "./pages/DemoPage";
import Privacy from "./pages/Privacy";
import Legal from "./pages/Legal";

const LandingPage = () => (
  <div className="App">
    <Header />
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <BrandValues />
      <CaseStudies />
      <Contact />
    </main>
    <Footer />

    {/* WhatsApp Floating Button */}
    <a
      href="https://chat.whatsapp.com/GGqFSVOseGvDCzrjwP2OBZ?mode=gi_t"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 hover:scale-110 transition-transform duration-300"
      aria-label="WhatsApp"
    >
      <img
        src="https://iili.io/fczZ0vt.png"
        alt="WhatsApp"
        className="w-16 h-16 drop-shadow-2xl"
      />
    </a>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/privacidad" element={<Privacy />} />
        <Route path="/aviso-legal" element={<Legal />} />
      </Routes>
    </Router>
  );
}

export default App;
