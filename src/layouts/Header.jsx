// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { TfiClose } from "react-icons/tfi";
// import { CiMenuFries } from "react-icons/ci";
// import logo from "../assets/images/logo.png";
// import Button from "../components/Button/Button";
// import Modal from "../components/Modal/Modal";
// import RegisterForm from "../features/auth/components/RegisterForm";
// import LoginForm from "../features/auth/components/LoginForm";
// import ForgotPassword from "../features/auth/components/ForgotPassword";
// import Verify from "../features/auth/components/Verify";
// import ChangePassword from "../features/auth/components/ChangePassword";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [formType, setFormType] = useState("register");
//   const location = useLocation();

//   const navItems = [
//     { label: "Home", path: "/" },
//     { label: "Courses", path: "/courses" },
//     {label:"Books" , path:"/books"},
//     { label: "Contact Us", path: "/contact-us" },
//     { label: "Purchased Plans", path: "/purchased-plans" },

//   ];

//   return (
//     <header className="w-full">
//       <div className="flex items-center justify-between px-4 py-3 md:py-4">
//         <Link to="/" className="flex items-center">
//           <img src={logo} alt="Logo" className="h-20 w-auto md:h-12" />
//         </Link>

//         <button
//           className="md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? (
//             <TfiClose className="h-6 w-6" />
//           ) : (
//             <CiMenuFries className="h-6 w-6" />
//           )}
//         </button>

//         <div
//           className={`${
//             isOpen ? "flex" : "hidden"
//           } absolute left-0 top-14 z-50 w-full flex-col items-center bg-white gap-4  py-4 shadow-md md:static md:flex md:w-auto md:flex-row md:gap-8 md:py-0 md:shadow-none`}
//         >
//           {navItems.map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`text-sm font-medium ${
//                 location.pathname === item.path
//                   ? "text-[#F69837] text-decoration-none"
//                   : "textColor text-decoration-none"
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}
//           <Button onClick={() => setShowModal(true)} />
//         </div>
//       </div>
//       <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
//         {formType === "register" ? (
//           <RegisterForm
//             onSuccess={(next) => {
//               if (next === "login") setFormType("login");
//               else setShowModal(false);
//             }}
//           />
//         ) : formType === "login" ? (
//           <LoginForm
//             onSuccess={(next) => {
//               if (next === "register") setFormType("register");
//               else if (next === "forgotPassword") setFormType("forgotPassword");
//               else if (next === "verify") setFormType("verify");
//               else setShowModal(false);
//             }}
//           />
//         ) : formType === "forgotPassword" ? (
//           <ForgotPassword
//             onSuccess={(next) => {
//               if (next === "login") setFormType("login");
//               else if (next === "verify") setFormType("verify");
//               else setShowModal(false);
//             }}
//           />
//         ) : formType === "verify" ? (
//           <Verify
//             onSuccess={(next) => {
//               if (next === "login") setFormType("login");
//               else if (next === "changePassword")
//                 setFormType("changePassword"); // ✅ added
//               else setShowModal(false);
//             }}
//           />
//         ) : (
//           <ChangePassword
//             onSuccess={(next) => {
//               if (next === "login") setFormType("login");
//               else setShowModal(false);
//             }}
//           />
//         )}
//       </Modal>
//     </header>
//   );
// }

// import { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { TfiClose } from "react-icons/tfi";
// import { CiMenuFries } from "react-icons/ci";
// import logo from "../assets/images/logo.png";
// import userIcon from "../assets/images/user.png"; // profile icon
// import Button from "../components/Button/Button";
// import Modal from "../components/Modal/Modal";
// import RegisterForm from "../features/auth/components/RegisterForm";
// import LoginForm from "../features/auth/components/LoginForm";
// import ForgotPassword from "../features/auth/components/ForgotPassword";
// import Verify from "../features/auth/components/Verify";
// import ChangePassword from "../features/auth/components/ChangePassword";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [formType, setFormType] = useState("register");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();

//   // 🔹 Check token on load
//   useEffect(() => {
//     const token = localStorage.getItem("userToken");
//     setIsLoggedIn(!!token);
//   }, []);

//   const navItems = [
//     { label: "Home", path: "/" },
//     { label: "Courses", path: "/courses" },
//     { label: "Books", path: "/books" },
//     { label: "Contact Us", path: "/contact-us" },
//     { label: "Purchased Plans", path: "/purchased-plans" },
//   ];

//   return (
//     <header className="w-full">
//       <div className="flex items-center justify-between px-4 py-3 md:py-4">
//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img src={logo} alt="Logo" className="h-20 w-auto md:h-12" />
//         </Link>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? (
//             <TfiClose className="h-6 w-6" />
//           ) : (
//             <CiMenuFries className="h-6 w-6" />
//           )}
//         </button>

//         {/* Nav */}
//         <div
//           className={`${
//             isOpen ? "flex" : "hidden"
//           } absolute left-0 top-14 z-50 w-full flex-col items-center bg-white gap-4 py-4 shadow-md md:static md:flex md:w-auto md:flex-row md:gap-8 md:py-0 md:shadow-none`}
//         >
//           {navItems.map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`text-sm font-medium ${
//                 location.pathname === item.path
//                   ? "text-[#F69837]"
//                   : "textColor"
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}

//           {/* 🔹 Login OR Profile */}
//           {!isLoggedIn ? (
//             <Button onClick={() => setShowModal(true)} />
//           ) : (
//             <img
//               src={userIcon}
//               alt="Profile"
//               className="w-10 h-10 rounded-full cursor-pointer border-2 border-[#F69837]"
//               onClick={() => navigate("/profile")}
//             />
//           )}
//         </div>
//       </div>

//       {/* Auth Modal */}
//       <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
//         {formType === "register" ? (
//           <RegisterForm
//             onSuccess={(next) => {
//               if (next === "login") setFormType("login");
//               else setShowModal(false);
//             }}
//           />
//         ) : formType === "login" ? (
//           <LoginForm
//             onSuccess={(next) => {
//               if (next === "register") setFormType("register");
//               else if (next === "forgotPassword") setFormType("forgotPassword");
//               else if (next === "verify") setFormType("verify");
//               else {
//                 setShowModal(false);
//                 setIsLoggedIn(true); // ✅ LOGIN SUCCESS
//               }
//             }}
//           />
//         ) : formType === "forgotPassword" ? (
//           <ForgotPassword
//             onSuccess={(next) => {
//               if (next === "login") setFormType("login");
//               else if (next === "verify") setFormType("verify");
//               else setShowModal(false);
//             }}
//           />
//         ) : formType === "verify" ? (
//           <Verify
//             onSuccess={(next) => {
//               if (next === "login") setFormType("login");
//               else if (next === "changePassword")
//                 setFormType("changePassword");
//               else setShowModal(false);
//             }}
//           />
//         ) : (
//           <ChangePassword
//             onSuccess={(next) => {
//               if (next === "login") setFormType("login");
//               else setShowModal(false);
//             }}
//           />
//         )}
//       </Modal>
//     </header>
//   );
// }

// import { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { TfiClose } from "react-icons/tfi";
// import { CiMenuFries } from "react-icons/ci";
// import axios from "axios";

// import logo from "../assets/images/logo.png";
// import userPlaceholder from "../assets/images/user.png";

// import Button from "../components/Button/Button";
// import Modal from "../components/Modal/Modal";
// import RegisterForm from "../features/auth/components/RegisterForm";
// import LoginForm from "../features/auth/components/LoginForm";
// import ForgotPassword from "../features/auth/components/ForgotPassword";
// import Verify from "../features/auth/components/Verify";
// import ChangePassword from "../features/auth/components/ChangePassword";

// const BASE_URL = process.env.REACT_APP_API_BASE_URL;
// const IMAGE_BASE_URL = "https://kitehawk-api.onrender.com/image/";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [formType, setFormType] = useState("register");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [profileImage, setProfileImage] = useState(null);

//   const location = useLocation();
//   const navigate = useNavigate();

//   /* ================= CHECK LOGIN + FETCH PROFILE ================= */
//   useEffect(() => {
//     const token = localStorage.getItem("userToken");
//     setIsLoggedIn(!!token);

//     if (token) {
//       fetchProfileImage(token);
//     }
//   }, []);

//   const fetchProfileImage = async (token) => {
//     try {
//       const res = await axios.get(`${BASE_URL}/api/getinfo`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const data = res.data?.data;
//       if (data?.profileimage) {
//         setProfileImage(`${IMAGE_BASE_URL}${data.profileimage}`);
//       } else {
//         setProfileImage(null);
//       }
//     } catch (err) {
//       console.log("Header profile fetch error:", err);
//       setProfileImage(null);
//     }
//   };

//   const navItems = [
//     { label: "Home", path: "/" },
//     { label: "Courses", path: "/courses" },
//     { label: "Books", path: "/books" },
//     { label: "Contact Us", path: "/contact-us" },
//     { label: "Purchased Plans", path: "/purchased-plans" },
//   ];

//   return (
//     <header className="w-full">
//       <div className="flex items-center justify-between px-4 py-3 md:py-4">
//         {/* LOGO */}
//         <Link to="/" className="flex items-center">
//           <img src={logo} alt="Logo" className="h-20 w-auto md:h-12" />
//         </Link>

//         {/* MOBILE MENU BUTTON */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? (
//             <TfiClose className="h-6 w-6" />
//           ) : (
//             <CiMenuFries className="h-6 w-6" />
//           )}
//         </button>

//         {/* NAV */}
//         <div
//           className={`${
//             isOpen ? "flex" : "hidden"
//           } absolute left-0 top-14 z-50 w-full flex-col items-center bg-white gap-4 py-4 shadow-md
//           md:static md:flex md:w-auto md:flex-row md:gap-8 md:py-0 md:shadow-none`}
//         >
//           {navItems.map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`text-sm font-medium ${
//                 location.pathname === item.path
//                   ? "text-[#F69837]"
//                   : "textColor"
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}

//           {/* 🔹 LOGIN OR PROFILE IMAGE */}
//           {!isLoggedIn ? (
//             <Button onClick={() => setShowModal(true)} />
//           ) : (
//             <img
//               src={profileImage || userPlaceholder}
//               alt="Profile"
//               className="w-10 h-10 rounded-full cursor-pointer border-2 border-[#F69837] object-cover"
//               onClick={() => navigate("/profile")}
//             />
//           )}
//         </div>
//       </div>

//       {/* ================= AUTH MODAL ================= */}
//       <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
//         {formType === "register" ? (
//           <RegisterForm
//             onSuccess={(next) => {
//               if (next === "login") setFormType("login");
//               else setShowModal(false);
//             }}
//           />
//         ) : formType === "login" ? (
//           <LoginForm
//             onSuccess={(next) => {
//               if (next === "register") setFormType("register");
//               else if (next === "forgotPassword") setFormType("forgotPassword");
//               else if (next === "verify") setFormType("verify");
//               else {
//                 setShowModal(false);
//                 setIsLoggedIn(true);

//                 const token = localStorage.getItem("userToken");
//                 if (token) fetchProfileImage(token);
//               }
//             }}
//           />
//         ) : formType === "forgotPassword" ? (
//           <ForgotPassword
//             onSuccess={(next) => {
//               if (next === "login") setFormType("login");
//               else if (next === "verify") setFormType("verify");
//               else setShowModal(false);
//             }}
//           />
//         ) : formType === "verify" ? (
//           <Verify
//             onSuccess={(next) => {
//               if (next === "login") setFormType("login");
//               else if (next === "changePassword")
//                 setFormType("changePassword");
//               else setShowModal(false);
//             }}
//           />
//         ) : (
//           <ChangePassword
//             onSuccess={(next) => {
//               if (next === "login") setFormType("login");
//               else setShowModal(false);
//             }}
//           />
//         )}
//       </Modal>
//     </header>
//   );
// }

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";
import axios from "axios";

import logo from "../assets/images/logo.png";
import userPlaceholder from "../assets/images/user.png";

import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import RegisterForm from "../features/auth/components/RegisterForm";
import LoginForm from "../features/auth/components/LoginForm";
import ForgotPassword from "../features/auth/components/ForgotPassword";
import Verify from "../features/auth/components/Verify";
import ChangePassword from "../features/auth/components/ChangePassword";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const IMAGE_BASE_URL = "https://kitehawk-api.onrender.com/image/";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState("register");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [submenu, setsubmenu] = useState(false);
  const [activelink, setactivelink] = useState(-1);

  const location = useLocation();
  const navigate = useNavigate();

  /* ================= CHECK LOGIN + FETCH PROFILE ================= */
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setIsLoggedIn(!!token);

    if (token) {
      fetchProfileImage(token);
    }
  }, []);

  const fetchProfileImage = async (token) => {
    try {
      const res = await axios.get(`${BASE_URL}/api/getinfo`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = res.data?.data;
      if (data?.profileimage) {
        setProfileImage(`${IMAGE_BASE_URL}${data.profileimage}`);
      } else {
        setProfileImage(null);
      }
    } catch (err) {
      console.log("Header profile fetch error:", err);
      setProfileImage(null);
    }
  };

  /* ================= NAV ITEMS ================= */
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Online Courses", path: "/courses" },
    { label: "Workbooks", path: "/books" },
    { label: "Program Info", path: "/programinfo" },
     { label: "Resources", path: "/resources" },
    { label: "Teaching Tips", path: "/teaching" },
    { label: "Blog", path: "/blog" },
   
    { label: "Contact Us", path: "/contact-us" },
    ...(isLoggedIn
      ? [{ label: "Purchased Plans", path: "/purchased-plans" }]
      : []),
  ];

  return (
    <header className="w-full">
      <div className="flex items-center justify-between px-4 py-3 md:py-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 w-auto md:h-12" />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <TfiClose className="h-6 w-6" />
          ) : (
            <CiMenuFries className="h-6 w-6" />
          )}
        </button>

        {/* NAV */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute left-0 top-14 z-50 w-full flex-col items-center bg-white gap-4 py-4 shadow-md
          md:static md:flex md:w-auto md:flex-row md:gap-8 md:py-0 md:shadow-none`}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium ${
                // location.pathname.startsWith(item.path)
                //   ? `text-[#F69837]`
                //   : "textColor"

                location.pathname === item.path ||
                (item.path !== "/" && location.pathname.startsWith(item.path))
                  ? `text-[#F69837]`
                  : "textColor"
              }`}
              onMouseEnter={() => {
                if (item.path === "/resources") {
                  setsubmenu(true);
                } else {
                  setsubmenu(false);
                }
              }}
            >
              {item.label}
            </Link>
          ))}
          {submenu && (
            <div
              className="bg-white absolute top-12 p-2 text-sm rounded-lg right-[470px] py-4 font-medium "
              onMouseLeave={() => {
                setsubmenu(false);
              }}
            >
              <ul className="flex flex-col gap-y-2 cursor-pointer ">
                {Array(5)
                  .fill("program")
                  .map((item, index) => (
                    <li
                      key={index}
                      className={`hover:text-[#F69837] transition-colors ${activelink === index ? "text-[#F69837]" : ""}`}
                      onClick={() => {
                        setactivelink(index);
                        navigate(`/resources/program/${index + 1}`);
                      }}
                    >
                      Program {index + 1}
                    </li>
                  ))}
              </ul>
            </div>
          )}
          {/* LOGIN OR PROFILE */}
          {!isLoggedIn ? (
            <Button onClick={() => setShowModal(true)} />
          ) : (
            <img
              src={profileImage || userPlaceholder}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-[#F69837] object-cover"
              onClick={() => navigate("/profile")}
            />
          )}
        </div>
      </div>

      {/* ================= AUTH MODAL ================= */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        {formType === "register" ? (
          <RegisterForm
            onSuccess={(next) => {
              if (next === "login") setFormType("login");
              else setShowModal(false);
            }}
          />
        ) : formType === "login" ? (
          <LoginForm
            onSuccess={(next) => {
              if (next === "register") setFormType("register");
              else if (next === "forgotPassword") setFormType("forgotPassword");
              else if (next === "verify") setFormType("verify");
              else {
                setShowModal(false);
                setIsLoggedIn(true);

                const token = localStorage.getItem("userToken");
                if (token) fetchProfileImage(token);
              }
            }}
          />
        ) : formType === "forgotPassword" ? (
          <ForgotPassword
            onSuccess={(next) => {
              if (next === "login") setFormType("login");
              else if (next === "verify") setFormType("verify");
              else setShowModal(false);
            }}
          />
        ) : formType === "verify" ? (
          <Verify
            onSuccess={(next) => {
              if (next === "login") setFormType("login");
              else if (next === "changePassword") setFormType("changePassword");
              else setShowModal(false);
            }}
          />
        ) : (
          <ChangePassword
            onSuccess={(next) => {
              if (next === "login") setFormType("login");
              else setShowModal(false);
            }}
          />
        )}
      </Modal>
    </header>
  );
}
