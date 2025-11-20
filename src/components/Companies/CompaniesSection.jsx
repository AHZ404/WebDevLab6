import React from "react";
import { pageData } from "../../data/dummyData";
import "./Companies.css";

const CompaniesSection = () => {
  return (
    <section className="trusted-companies">
      <div className="container">
        <h2 className="section-title">Trusted by companies of all sizes</h2>

        <div className="companies-logos">
          {pageData.companies.map((company) => (
            <div key={company.id} className="company-logo">
              <i className={`fab fa-${company.logo} fa-2x`}></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
