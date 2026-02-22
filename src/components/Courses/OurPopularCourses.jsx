// import { useNavigate } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
// import Button from "../Button/Button";
// import Card from "../Card/Card";
// import aus from "../../assets/images/aus.png";
// import usa from "../../assets/images/usa.png";
// import { useState } from "react";

// export default function OurPopularCourses() {
//   const [selected, setSelected] = useState([]);
//   const navigate = useNavigate();

//   // ✅ Added flag field directly inside the courses array
//   const courses = [
//     { title: "AUS/NZ Program 1", image: logo, flag: aus },
//     { title: "AUS/NZ Program 2", image: logo, flag: aus },
//     { title: "AUS/NZ Program 3", image: logo, flag: aus },
//     { title: "USA Program 1", image: logo ,flag: usa},
//     { title: "USA Program 2", image: logo, flag: usa },
//     { title: "USA Program 3", image: logo, flag: usa },
//   ];

//   const handleSelect = (index) => {
//     setSelected((prev) =>
//       prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
//     );
//   };

//   return (
//     <div id="popular-courses" className="space-y-5">
//       <h1 className="text-center font-bold text-5xl mb-5">
//         Our Popular Courses
//       </h1>
//       <p className="text-center text-sm mb-10">
//         Quick overview of Kitehawk LMS — show how easy it is to create courses,
//         assign tasks, and track progress.
//       </p>

//       <div className="coursesBgImage py-10 text-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-10 gap-6 container mx-auto px-6 lg:px-8">
//           {courses.map((item, index) => (
//             <Card
//               key={index}
//               // ✅ Add flag + title together on one line
//               title={
//                 <div className="flex items-center justify-center gap-2">
//                   {item.flag && (
//                     <img
//                       src={item.flag}
//                       alt="flag"
//                       className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
//                     />
//                   )}
//                   <span>{item.title}</span>
//                 </div>
//               }
//               image={item.image}
//               imageClassName="w-48 h-48 object-contain"
//               onSelect={() => handleSelect(index)}
//               selected={selected?.includes(index)}
//               selectable={true}
//             />
//           ))}
//         </div>

//         <Button
//           text="Proceed Now"
//           onClick={() => navigate("/checkout")}
//           showDivider
//         />
//       </div>
//     </div>
//   );
// }

// 26/12/2025
// import { useNavigate } from "react-router-dom";
// import Button from "../Button/Button";
// import Card from "../Card/Card";
// import aus from "../../assets/images/aus.png";
// import usa from "../../assets/images/usa.png";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const BASE_URL = "https://kitehawk-api.onrender.com";
// const IMAGE_BASE_URL = "https://kitehawk-api.onrender.com/image/";

// export default function OurPopularCourses() {
//   const [selected, setSelected] = useState([]);
//   const [courses, setCourses] = useState([]); // 🔹 dynamic courses
//   const navigate = useNavigate();

//   // 🔹 Fetch courses from API
//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//        const token = localStorage.getItem("userToken");
//       const res = await axios.get(`${BASE_URL}/api/getallcourse`,{
//         headers:{
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setCourses(res.data?.data || []);
//     } catch (error) {
//       console.log(
//         "Get courses error:",
//         error?.response?.data || error.message
//       );
//     }
//   };

//   const handleSelect = (index) => {
//     setSelected((prev) =>
//       prev.includes(index)
//         ? prev.filter((i) => i !== index)
//         : [...prev, index]
//     );
//   };

//   return (
//     <div id="popular-courses" className="space-y-5">
//       <h1 className="text-center font-bold text-5xl mb-5">
//         Our Popular Courses
//       </h1>
//       <p className="text-center text-sm mb-10">
//         Quick overview of Kitehawk LMS — show how easy it is to create courses,
//         assign tasks, and track progress.
//       </p>

//       <div className="coursesBgImage py-10 text-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-10 gap-6 container mx-auto px-6 lg:px-8">
//           {courses.map((item, index) => (
//             <Card
//               key={item._id}
//               title={
//                 <div className="flex items-center justify-center gap-2">
//                   {/* ✅ Flag logic same rakha */}
//                   {item.coursename?.toLowerCase().includes("usa") && (
//                     <img
//                       src={usa}
//                       alt="flag"
//                       className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
//                     />
//                   )}
//                   {item.coursename?.toLowerCase().includes("aus") && (
//                     <img
//                       src={aus}
//                       alt="flag"
//                       className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
//                     />
//                   )}
//                   <span>{item.coursename}</span>
//                 </div>
//               }
//               image={`${IMAGE_BASE_URL}${item.courseimage}`}
//               imageClassName="w-48 h-48 object-contain"
//               onSelect={() => handleSelect(index)}
//               selected={selected?.includes(index)}
//               selectable={true}
//             />
//           ))}
//         </div>

//         <Button
//           text="Proceed Now"
//           onClick={() => navigate("/checkout")}
//           showDivider
//         />
//       </div>
//     </div>
//   );
// }

// import { useNavigate } from "react-router-dom";
// import Button from "../Button/Button";
// import Card from "../Card/Card";
// import aus from "../../assets/images/aus.png";
// import usa from "../../assets/images/usa.png";
// import { useEffect, useState } from "react";
// import axios from "axios";

//  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
// const IMAGE_BASE_URL = "https://kitehawk-api.onrender.com/image/";

// export default function OurPopularCourses() {
//   const [selected, setSelected] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const token = localStorage.getItem("userToken");
//       const res = await axios.get(`${BASE_URL}/api/getallcourse`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setCourses(res.data?.data || []);
//     } catch (error) {
//       console.log(
//         "Get courses error:",
//         error?.response?.data || error.message
//       );
//     }
//   };

//   const handleSelect = (index) => {
//     setSelected((prev) =>
//       prev.includes(index)
//         ? prev.filter((i) => i !== index)
//         : [...prev, index]
//     );
//   };

//   const handleProceed = () => {
//     const selectedCourses = selected.map((index) => {
//       const course = courses[index];
//       return {
//         id: course._id,
//         name: course.coursename,
//         price: course.courseprice,
//       };
//     });

//     navigate("/checkout", {
//       state: { courses: selectedCourses },
//     });
//   };

//   return (
//     <div id="popular-courses" className="space-y-5">
//       <h1 className="text-center font-bold text-5xl mb-5">
//         Our Popular Courses
//       </h1>
//       <p className="text-center text-sm mb-10">
//         Quick overview of Kitehawk LMS — show how easy it is to create courses,
//         assign tasks, and track progress.
//       </p>

//       <div className="coursesBgImage py-10 text-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-10 gap-6 container mx-auto px-6 lg:px-8">
//           {courses.map((item, index) => (
//             <Card
//               key={item._id}
//               title={
//                 <div className="flex items-center justify-center gap-2">
//                   {item.coursename?.toLowerCase().includes("usa") && (
//                     <img src={usa} className="w-6 h-6 object-contain" />
//                   )}
//                   {item.coursename?.toLowerCase().includes("aus") && (
//                     <img src={aus} className="w-6 h-6 object-contain" />
//                   )}
//                   <span>{item.coursename}</span>
//                 </div>
//               }
//               image={`${IMAGE_BASE_URL}${item.courseimage}`}
//               imageClassName="w-48 h-48 object-contain"
//               onSelect={() => handleSelect(index)}
//               selected={selected.includes(index)}
//               selectable
//             />
//           ))}
//         </div>

//         <Button
//           text="Proceed Now"
//           onClick={handleProceed}
//           showDivider
//         />
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";
import aus from "../../assets/images/aus.png";
import usa from "../../assets/images/usa.png";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const IMAGE_BASE_URL = "https://kitehawk-api.onrender.com/image/";

export default function OurPopularCourses() {
  const [selected, setSelected] = useState([]);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const res = await axios.get(`${BASE_URL}/api/getallcourse`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      setCourses(res.data?.data || []);
    } catch (error) {
      console.log("Get courses error:", error?.response?.data || error.message);
    }
  };

  const handleSelect = (index) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const handleProceed = () => {
    // 🔐 LOGIN CHECK
    const token = localStorage.getItem("userToken");

    if (!token) {
      alert("Please login to continue purchase");
      return;
    }

    if (selected.length === 0) {
      alert("Please select at least one course");
      return;
    }

    const selectedCourses = selected.map((index) => {
      const course = courses[index];
      return {
        id: course._id,
        name: course.coursename,
        price: course.courseprice,
      };
    });

    navigate("/checkout", {
      state: { courses: selectedCourses },
    });
  };

  return (
    <div id="popular-courses" className="space-y-5">
      <h1 className="text-center font-bold text-5xl mb-5">
        Our Popular Courses
      </h1>

      <p className="text-center text-sm mb-10">
        Quick overview of Kitehawk LMS — show how easy it is to create courses,
        assign tasks, and track progress.
      </p>

      <div className="coursesBgImage py-10 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-10 gap-6 container mx-auto px-6 lg:px-8">
          {courses.map((item, index) => (
            <Card
              key={item._id}
              title={
                <div className="flex items-center justify-center gap-2">
                  {item.coursename?.toLowerCase().includes("usa") && (
                    <img src={usa} className="w-6 h-6 object-contain" />
                  )}
                  {item.coursename?.toLowerCase().includes("aus") && (
                    <img src={aus} className="w-6 h-6 object-contain" />
                  )}
                  <span>{item.coursename}</span>
                </div>
              }
              image={`${IMAGE_BASE_URL}${item.courseimage}`}
              imageClassName="w-48 h-48 object-contain"
              onSelect={() => handleSelect(index)}
              selected={selected.includes(index)}
              selectable
            />
          ))}
        </div>

        <Button text="Proceed Now" onClick={handleProceed} showDivider />
      </div>
    </div>
  );
}

