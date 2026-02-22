import { useLocation } from "react-router-dom";
import CoursesBanner from "../components/Courses/CoursesBanner";
import OurPopularCourses from "../components/Courses/OurPopularCourses";
import { useEffect } from "react";

export default function CoursesPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <>
      <CoursesBanner />
      <OurPopularCourses />
    </>
  )
}
