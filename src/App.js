import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CategoriesSection from "./components/Categories/CategoriesSection";
import CoursesSection from "./components/Courses/CoursesSection";
import CompaniesSection from "./components/Companies/CompaniesSection";
import Footer from "./components/Footer/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CategoriesSection />
      <CoursesSection />
      <CompaniesSection />
      <Footer />
    </div>
  );
}

export default App;
