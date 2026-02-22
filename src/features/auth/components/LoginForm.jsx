// import { useState } from "react";
// import Button from "../../../components/Button/Button";
// import { Link } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";
// import { isValidEmail, isValidPassword } from "../../../utils/validators";

// export default function LoginForm({ onSuccess }) {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let newErrors = {};
//     newErrors.email = isValidEmail(formData.email);
//     newErrors.password = isValidPassword(formData.password);

//     newErrors = Object.fromEntries(
//       Object.entries(newErrors).filter(([_, v]) => v)
//     );
//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       console.log("Login form submitted:", formData);
//       if (onSuccess) onSuccess();
//     }
//   };

//   return (
//     <>
//       <h2 className="font-bold text-center text-xl secondaryColor mb-4">
//         Login Now
//       </h2>
//       <p className="text-center text-sm mb-10">
//         Login to access all courses and more!
//       </p>

//       <form onSubmit={handleSubmit} className="space-y-4">
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
//             className="w-full border rounded-lg px-3 py-2"
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm">{errors.email}</p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="password" className="block mb-1">
//             Password
//           </label>
//           <div className="relative mb-2">
//             <input
//               id="password"
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="********"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-3 py-2 pr-10"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute inset-y-0 right-3"
//             >
//               {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
//             </button>
//           </div>
//           {errors.password && (
//             <p className="text-red-500 text-sm">{errors.password}</p>
//           )}
//           <Link
//             onClick={() => onSuccess("forgotPassword")}
//             className="text-[#F69837] text-sm flex justify-end"
//           >
//             Forgot Password
//           </Link>
//         </div>

//         <Button text="Sign in" className="w-full" />
//       </form>

//       <p className="text-sm text-center mt-2">
//         Do not have an account?{" "}
//         <Link onClick={() => onSuccess("register")} className="text-[#F69837]">
//           Register
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
import { isValidEmail, isValidPassword } from "../../../utils/validators";

export default function LoginForm({ onSuccess }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    let newErrors = {};
    newErrors.email = isValidEmail(formData.email);
    newErrors.password = isValidPassword(formData.password);

    newErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([_, v]) => v)
    );

    setErrors(newErrors);

    if (Object.keys(newErrors).length !== 0) return;

    setLoading(true);

    try {
      const payload = {
        email: formData.email,
        password: formData.password,
      };

      const res = await axios.post(
        `${BASE_URL}/api/login`,
        payload
      );

      // optional: store token if backend sends it
      if (res.data?.token) {
        localStorage.setItem("userToken", res.data.token);
      }

      if (onSuccess)
        alert("login succesfull ")
      console.log("Login API response:", res.data);

         onSuccess();
    } catch (error) {
      setApiError(
        error?.response?.data?.message || "Invalid email or password"
      );
      console.log("Login API error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="font-bold text-center text-xl secondaryColor mb-4">
        Login Now
      </h2>
      <p className="text-center text-sm mb-10">
        Login to access all courses and more!
      </p>

      {apiError && (
        <p className="text-red-500 text-center text-sm mb-3">{apiError}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="user@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <div className="relative mb-2">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3"
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
          <Link
            onClick={() => onSuccess("forgotPassword")}
            className="text-[#F69837] text-sm flex justify-end"
          >
            Forgot Password
          </Link>
        </div>

        <Button
          text={loading ? "Signing in..." : "Sign in"}
          className="w-full"
          disabled={loading}
        />
      </form>

      <p className="text-sm text-center mt-2">
        Do not have an account?{" "}
        <Link onClick={() => onSuccess("register")} className="text-[#F69837]">
          Register
        </Link>
      </p>
    </>
  );
}
