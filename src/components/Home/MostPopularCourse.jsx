import logo from "../../assets/images/logo.png";
import Card from "../Card/Card";
import aus from "../../assets/images/aus.png";
import usa from "../../assets/images/usa.png";
import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../Card/BookCard"
export default function MostPopularCourse() {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const [courses, setCourse] = useState([]);

  // fetching all courses

  const fetchtopcourses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/gettopcourse`);
      if (response.data.status === 200) {
        setCourse(response.data.data);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchtopcourses();
  }, []);

  const handleBuyBook = () =>{
  alert()
  }

  // const courses = [
  //     { title: "AUS/NZ Program 1", image: logo, flag: aus },
  //   { title: "AUS/NZ Program 2", image: logo, flag: aus },
  //   { title: "AUS/NZ Program 3", image: logo, flag: aus },
  //   { title: "USA Program 1", image: logo ,flag: usa},
  //   { title: "USA Program 2", image: logo, flag: usa },
  //   { title: "USA Program 3", image: logo, flag: usa },
  // ];
  return (
    <div className="space-y-5">
      <h1 className="text-center font-bold text-5xl">Most Popular Courses</h1>
      <div className="coursesBgImage py-5">
        <p className="text-center text-sm mb-5">
          Quick overview of Kitehawk LMS Show how easy it is to create courses,
          assign tasks, track progress. Crafted with premium-grade features
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  container mx-auto px-6 lg:px-8 ">
          {courses.map((item, index) => (
            <BookCard
              key={index}
              title={item?.coursename}
              image={`${BASE_URL}/image/${item?.courseimage}`}
              imageClassName="w-40 h-40 sm:w-48 sm:h-48 object-contain mx-auto"
              onBuyNow={() => handleBuyBook(item.bookurl)}
              buttontext = "BUY WORKBOOKS"
            />
          ))}
        </div>
      </div>
    </div>
  );
}




// <Card
//               key={index}
//               title={
//                 <div className="flex items-center justify-center gap-2">
//                   <span>{item?.coursename}</span>
//                 </div>
//               }
//               image={`${BASE_URL}/image/${item.courseimage}`}
//               imageClassName="w-48 h-48 object-contain"
//               showDivider
//             />