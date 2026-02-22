// import { useState } from "react";
// import Button from "../../../components/Button/Button";
// import { isValidEmail } from "../../../utils/validators"; 
// export default function ForgotPassword({ onSuccess }) {
//   const [formData, setFormData] = useState({
//     email: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = {};
//     validationErrors.email = isValidEmail(formData.email);

//     Object.keys(validationErrors).forEach(
//       (key) => !validationErrors[key] && delete validationErrors[key]
//     );

//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       console.log("Forgot password form submitted:", formData);
//       if (onSuccess) onSuccess("verify");
//     }
//   };

//   return (
//     <>
//       <h2 className="font-bold text-center text-xl secondaryColor mb-4">
//         Forgot Password
//       </h2>
//       <p className="text-center text-sm mb-10">
//         Enter your registered email to reset your password
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
//             className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
//               errors.email ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
//             }`}
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm">{errors.email}</p>
//           )}
//         </div>

//         <Button text="Send Code" className="w-full" />
//       </form>
//     </>
//   );
// }


import { useState } from "react";
import axios from "axios";
import Button from "../../../components/Button/Button";
import { isValidEmail } from "../../../utils/validators";

export default function ForgotPassword({ onSuccess }) {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    const validationErrors = {};
    validationErrors.email = isValidEmail(formData.email);

    Object.keys(validationErrors).forEach(
      (key) => !validationErrors[key] && delete validationErrors[key]
    );

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    setLoading(true);

    try {
      const payload = {
        email: formData.email,
      };

      const res = await axios.post(
        `${BASE_URL}/api/forgot-password`,
        payload
      );

      console.log("Forgot password response:", res.data);

      // move to verify screen on success
      if (onSuccess)
        alert("otp sent ")
        onSuccess("verify");
    } catch (error) {
      setApiError(
        error?.response?.data?.message ||
          "Failed to send reset code. Please try again."
      );
      console.log("Forgot password API error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="font-bold text-center text-xl secondaryColor mb-4">
        Forgot Password
      </h2>
      <p className="text-center text-sm mb-10">
        Enter your registered email to reset your password
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
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-400"
                : "focus:ring-blue-400"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <Button
          text={loading ? "Sending..." : "Send Code"}
          className="w-full"
          disabled={loading}
        />
      </form>
    </>
  );
}

