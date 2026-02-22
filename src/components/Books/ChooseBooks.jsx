// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
// import Button from "../Button/Button";
// import book1 from "../../assets/images/book1.png";
// import book2 from "../../assets/images/book2.png";
// import book3 from "../../assets/images/book3.png";
// import book4 from "../../assets/images/book4.png";
// import book5 from "../../assets/images/book5.png";
// import allbooks from "../../assets/images/allbooks.png";
// import BookCard from "../Card/BookCard";

// export const ChooseBooks = () => {
//   const [selected, setSelected] = useState([]);
//   const navigate = useNavigate();

//   const books = [
//     { title: "2020 Edition Program 2 Workbook for Grade 4 – 9 years+", image: book1 },
//     { title: "2020 Edition Program 1 Workbook for Grade 3 – 8 years+", image: book2 },
//     { title: "2020 Edition Program 5 Workbook for Grade 7 – 12 years+", image: book3 },
//     { title: "2020 Edition Program 3 Workbook for Grade 5 – 10 years+", image: book4 },
//     { title: "2019 Edition Program 4 Workbook for Grade 6 – 11 years+", image: book5 },
//     { title: "Latest Editions Programs 1-5 Workbook Bundle", image: allbooks },
//   ];

//   const handleSelect = (index) => {
//     setSelected((prev) =>
//       prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
//     );
//   };

//   return (
//     <div className="w-full px-4 sm:px-6 lg:px-10 py-10 space-y-6">
//       {/* Heading */}
//       <h1
//         id="choose"
//         className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl mb-3 text-gray-800"
//       >
//         Choose The Best For You
//       </h1>

//       {/* Subtext */}
//       <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
//         No matter your age, we can help you learn the basics of written and spoken English through phonics.
//       </p>

//       {/* Books Grid */}
//       <div className="coursesBgImage py-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
//           {books.map((item, index) => (
//             <BookCard
//               key={index}
//               title={item.title}
//               image={item.image}
//               imageClassName="w-40 h-40 sm:w-48 sm:h-48 object-contain mx-auto"
//               onBuyNow={() => alert(`Buying ${item.title}`)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Optional Back or CTA Button */}
//       {/* <div className="text-center mt-8">
//         <Button onClick={() => navigate("/courses")} text="Back to Courses" />
//       </div> */}
//     </div>
//   );
// };


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import BookCard from "../Card/BookCard";
import axios from "axios";

 const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const IMAGE_BASE_URL = "https://kitehawk-api.onrender.com/image/";

export const ChooseBooks = () => {
  const [selected, setSelected] = useState([]);
  const [books, setBooks] = useState([]); // 🔹 dynamic books
  const navigate = useNavigate();

  // 🔹 Fetch books from API
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const token = localStorage.getItem("userToken");

      const res = await axios.get(
        `${BASE_URL}/api/getallbooks`,
        {
          headers: {
            Authorization: `Bearer ${token}` // ⚠️ keeping same pattern as your project
          },
        }
      );

      setBooks(res.data?.data || []);
    } catch (error) {
      console.log(
        "Get books error:",
        error?.response?.data || error.message
      );
    }
  };

  const handleSelect = (index) => {
    setSelected((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handleBuyBook = (bookUrl) => {
    if (bookUrl) {
      window.open(bookUrl, "_blank");
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-10 space-y-6">
      {/* Heading */}
      <h1
        id="choose"
        className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl mb-3 text-gray-800"
      >
        Choose The Best For You
      </h1>

      {/* Subtext */}
      <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
        No matter your age, we can help you improve your written and spoken English through phonics.
      </p>

      {/* Books Grid */}
      <div className="coursesBgImage py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {books.map((item, index) => (
            <BookCard
              key={item._id}
              title={item.bookname}
              image={`${IMAGE_BASE_URL}${item.bookimage}`}
              imageClassName="w-40 h-40 sm:w-48 sm:h-48 object-contain mx-auto"
              onBuyNow={() => handleBuyBook(item.bookurl)}
               buttontext = "BUY ONLINE PROGRAMS"
            />
          ))}
        </div>
      </div>

      {/* Optional Back or CTA Button */}
      {/* 
      <div className="text-center mt-8">
        <Button onClick={() => navigate("/courses")} text="Back to Courses" />
      </div> 
      */}
    </div>
  );
};

