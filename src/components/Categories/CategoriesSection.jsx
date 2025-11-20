import React from "react";
import { pageData } from "../../data/dummyData";
import "./Categories.css";

const CategoriesSection = () => {
  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="section-title">A broad selection of courses</h2>
        <p>
          Choose from over 210,000 online video courses with new additions
          published every month
        </p>

        <div className="categories-grid">
          {pageData.categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-icon">
                <i className={category.icon}></i>
              </div>
              <div className="category-name">{category.name}</div>
              <div className="category-description">Explore now</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
