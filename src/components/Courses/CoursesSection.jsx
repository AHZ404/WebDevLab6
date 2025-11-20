import React from "react";
import { pageData } from "../../data/dummyData";
import "./Courses.css";

const CourseCard = ({ course }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  return (
    <div className="course-card">
      <div className="course-image">
        <i className="fas fa-book-open"></i>
      </div>
      <div className="course-content">
        <div className="course-title">{course.title}</div>
        <div className="course-instructor">{course.instructor}</div>
        <div className="course-rating">
          <div className="rating-value">{course.rating}</div>
          <div className="rating-stars">{renderStars(course.rating)}</div>
          <div className="rating-count">
            ({course.ratingCount.toLocaleString()})
          </div>
        </div>
        <div className="course-price">
          ${course.price}{" "}
          <span className="original-price">${course.originalPrice}</span>
        </div>
        {course.badge && <div className="course-badge">{course.badge}</div>}
      </div>
    </div>
  );
};

const CoursesSection = () => {
  return (
    <section className="courses-section">
      <div className="container">
        <h2 className="section-title">Featured courses</h2>

        <div className="courses-grid">
          {pageData.courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
