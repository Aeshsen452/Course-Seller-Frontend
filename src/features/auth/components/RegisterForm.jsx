// import { useState } from "react";
// import Button from "../../../components/Button/Button";
// import { Link } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";
// import {
//   isRequired,
//   isValidEmail,
//   isValidPassword,
//   doPasswordsMatch,
//   hasLengthBetween,
// } from "../../../utils/validators"; 

// export default function RegisterForm({ onSuccess }) {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     city: "",
//     country: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const validateForm = () => {
//     const newErrors = {};

//     newErrors.firstName = hasLengthBetween(formData.firstName, 2, 30);
//     newErrors.lastName = hasLengthBetween(formData.lastName, 2, 30);
//     newErrors.email = isValidEmail(formData.email);
//     newErrors.city = isRequired(formData.city);
//     newErrors.country = isRequired(formData.country);
//     newErrors.password = isValidPassword(formData.password);
//     newErrors.confirmPassword = doPasswordsMatch(
//       formData.password,
//       formData.confirmPassword
//     );

//     Object.keys(newErrors).forEach(
//       (key) => !newErrors[key] && delete newErrors[key]
//     );

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       console.log("Register form submitted:", formData);
//       if (onSuccess) onSuccess();
//     }
//   };

//   return (
//     <>
//       <h2 className="font-bold text-center text-xl secondaryColor mb-4">
//         Register Now
//       </h2>
//       <p className="text-center mb-10 text-sm">
//         Create an account to access all courses and more!
//       </p>
//       <form onSubmit={handleSubmit} className="">
//         <div>
//           <label htmlFor="firstName" className="block mb-1">
//             First Name
//           </label>
//           <input
//             id="firstName"
//             type="text"
//             name="firstName"
//             placeholder="John"
//             value={formData.firstName}
//             onChange={handleChange}
//             className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
//               errors.firstName ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
//             }`}
//           />
//           {errors.firstName && (
//             <p className="text-red-500 text-sm">{errors.firstName}</p>
//           )}
//         </div>
//         <div>
//           <label htmlFor="lastName" className="block mb-1">
//             Last Name
//           </label>
//           <input
//             id="lastName"
//             type="text"
//             name="lastName"
//             placeholder="Doe"
//             value={formData.lastName}
//             onChange={handleChange}
//             className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
//               errors.lastName ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
//             }`}
//           />
//           {errors.lastName && (
//             <p className="text-red-500 text-sm">{errors.lastName}</p>
//           )}
//         </div>
//         <div>
//           <label htmlFor="email" className="block mb-1">
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             placeholder="user@email.com"
//             value={formData.email}
//             onChange={handleChange}
//             className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
//               errors.email ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
//             }`}
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm">{errors.email}</p>
//           )}
//         </div>
//         <div>
//           <label htmlFor="city" className="block mb-1">
//             City
//           </label>
//           <input
//             id="city"
//             type="text"
//             name="city"
//             placeholder="Sydney"
//             value={formData.city}
//             onChange={handleChange}
//             className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
//               errors.city ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
//             }`}
//           />
//           {errors.city && (
//             <p className="text-red-500 text-sm">{errors.city}</p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="country" className="block mb-1">
//             Country
//           </label>
//           <input
//             id="country"
//             type="text"
//             name="country"
//             placeholder="Australia"
//             value={formData.country}
//             onChange={handleChange}
//             className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
//               errors.country ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
//             }`}
//           />
//           {errors.country && (
//             <p className="text-red-500 text-sm">{errors.country}</p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="password" className="block mb-1">
//             Password
//           </label>
//           <div className="relative">
//             <input
//               id="password"
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="********"
//               value={formData.password}
//               onChange={handleChange}
//               className={`w-full border rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 ${
//                 errors.password ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
//               }`}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute inset-y-0 right-3 flex items-center text-gray-500"
//             >
//               {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
//             </button>
//           </div>
//           {errors.password && (
//             <p className="text-red-500 text-sm">{errors.password}</p>
//           )}
//         </div>
//         <div>
//           <label htmlFor="confirmPassword" className="block mb-1">
//             Confirm Password
//           </label>
//           <div className="relative mb-3">
//             <input
//               id="confirmPassword"
//               type={showConfirm ? "text" : "password"}
//               name="confirmPassword"
//               placeholder="********"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className={`w-full border rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 ${
//                 errors.confirmPassword
//                   ? "border-red-500 focus:ring-red-400"
//                   : "focus:ring-blue-400"
//               }`}
//             />
//             <button
//               type="button"
//               onClick={() => setShowConfirm(!showConfirm)}
//               className="absolute inset-y-0 right-3 flex items-center text-gray-500"
//             >
//               {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
//             </button>
//           </div>
//           {errors.confirmPassword && (
//             <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
//           )}
//         </div>

//         <Button text="Sign up" className="w-full" />
//       </form>

//       <p className="text-sm text-center mt-2">
//         Already have an account?
//         <Link onClick={() => onSuccess("login")} className="text-[#F69837]">
//           {" "}
//           Log In
//         </Link>
//       </p>
//     </>
//   );
// }


import { useState } from "react";
import axios from "axios";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import {
  isRequired,
  isValidEmail,
  isValidPassword,
  doPasswordsMatch,
  hasLengthBetween,
} from "../../../utils/validators";
const BASE_URL = process.env.REACT_APP_API_BASE_URL;
export default function RegisterForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    country: "",
    password: "",
    confirmPassword: "",
    type: "", // ADDED
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    const newErrors = {};

    newErrors.firstName = hasLengthBetween(formData.firstName, 2, 30);
    newErrors.lastName = hasLengthBetween(formData.lastName, 2, 30);
    newErrors.email = isValidEmail(formData.email);
    newErrors.city = isRequired(formData.city);
    newErrors.country = isRequired(formData.country);
    newErrors.password = isValidPassword(formData.password);
    newErrors.confirmPassword = doPasswordsMatch(
      formData.password,
      formData.confirmPassword
    );
    newErrors.type = isRequired(formData.type); // ADDED

    Object.keys(newErrors).forEach(
      (key) => !newErrors[key] && delete newErrors[key]
    );

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    setLoading(true);

    try {
      const payload = {
        email: formData.email,
        password: formData.password,
        firstname: formData.firstName,
        lastname: formData.lastName,
        city: formData.city,
        Country: formData.country,
        type: formData.type, // ADDED
      };

      await axios.post(
        `${BASE_URL}/api/signup`,
        payload
      );

      if (onSuccess)
        alert("signUp succesfull ")
   onSuccess("login");
    } catch (error) {
      setApiError(
        error?.response?.data?.message || "Signup failed. Try again."
      );
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="font-bold text-center text-xl secondaryColor mb-4">
        Register Now
      </h2>
      <p className="text-center mb-10 text-sm">
        Create an account to access all courses and more!
      </p>

      {apiError && (
        <p className="text-red-500 text-center text-sm mb-3">{apiError}</p>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1">First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full border rounded-lg px-3 py-2 ${
              errors.firstName ? "border-red-500" : ""
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full border rounded-lg px-3 py-2 ${
              errors.lastName ? "border-red-500" : ""
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border rounded-lg px-3 py-2 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">City</label>
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`w-full border rounded-lg px-3 py-2 ${
              errors.city ? "border-red-500" : ""
            }`}
          />
        </div>

        <div>
          <label className="block mb-1">Country</label>
          <input
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`w-full border rounded-lg px-3 py-2 ${
              errors.country ? "border-red-500" : ""
            }`}
          />
        </div>

        {/* TYPE FIELD ADDED */}
        <div>
          <label className="block mb-1">Account Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className={`w-full border rounded-lg px-3 py-2 ${
              errors.type ? "border-red-500" : ""
            }`}
          >
            <option value="">Select type</option>
            <option value="user">Student</option>
            <option value="institute">Institute</option>
          </select>

          {errors.type && (
            <p className="text-red-500 text-sm">{errors.type}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 pr-10 ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2"
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
        </div>

        <div>
          <label className="block mb-1">Confirm Password</label>
          <div className="relative mb-3">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 pr-10 ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-2"
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <Button
          text={loading ? "Signing up..." : "Sign up"}
          className="w-full"
          disabled={loading}
        />
      </form>

      <p className="text-sm text-center mt-2">
        Already have an account?
        <Link onClick={() => onSuccess("login")} className="text-[#F69837]">
          {" "}
          Log In
        </Link>
      </p>
    </>
  );
}

