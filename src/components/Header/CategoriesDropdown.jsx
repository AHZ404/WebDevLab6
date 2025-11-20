import React, { useState } from "react";
import { pageData } from "../../data/dummyData";

const CategoriesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="categories"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span>Categories</span>
      {isOpen && (
        <div className="categories-dropdown">
          {pageData.categories.map((category) => (
            <a key={category.id} href="#">
              <i className={category.icon}></i> {category.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesDropdown;
