// import { useState } from "react";
// import Button from "../Button/Button";
// import { isRequired, isValidEmail, isValidPhone } from "../../utils/validators";
// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     let { name, value } = e.target;

//     if (name === "phone") {
//       value = value.replace(/[^0-9]/g, ""); 
//       if (value.length > 10) value = value.slice(0, 10); 
//     }

//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     newErrors.name = isRequired(formData.name);
//     newErrors.email = isValidEmail(formData.email);
//     newErrors.phone = isValidPhone(formData.phone);
//     newErrors.message = isRequired(formData.message);

//     Object.keys(newErrors).forEach(
//       (key) => !newErrors[key] && delete newErrors[key]
//     );

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       console.log("Form submitted successfully", formData);
//     }
//   };

//   return (
//     <div className="w-full flex justify-center items-center py-12 px-4 bg-white">
//       <div className="w-full max-w-xl">
//         <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
//           Get In Touch
//         </h2>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//           </div>
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//           </div>
//           <div>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter Your Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               maxLength={10}
//               className="w-full px-4 py-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
//             />
//             {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//           </div>
//           <div>
//             <textarea
//               name="message"
//               rows="4"
//               placeholder="Enter Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-4 py-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
//             ></textarea>
//             {errors.message && (
//               <p className="text-red-500 text-sm">{errors.message}</p>
//             )}
//           </div>
//           <Button text="Submit" className="w-full" type="submit" />
//         </form>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button";
import {
  isRequired,
  isValidEmail,
  isValidPhone,
} from "../../utils/validators";

 const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [apiError, setApiError] = useState("");

  /* ================= HANDLE INPUT ================= */
  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "phone") {
      value = value.replace(/[^0-9]/g, "");
      if (value.length > 10) value = value.slice(0, 10);
    }

    setFormData({ ...formData, [name]: value });
  };

  /* ================= HANDLE SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMsg("");
    setApiError("");

    const newErrors = {};
    newErrors.name = isRequired(formData.name);
    newErrors.email = isValidEmail(formData.email);
    newErrors.phone = isValidPhone(formData.phone);
    newErrors.message = isRequired(formData.message);

    Object.keys(newErrors).forEach(
      (key) => !newErrors[key] && delete newErrors[key]
    );

    setErrors(newErrors);

    if (Object.keys(newErrors).length !== 0) return;

    try {
      setLoading(true);

      await axios.post(`${BASE_URL}/api/getintouch`, {
        name: formData.name,
        email: formData.email,
        phonenumber: formData.phone, // 🔥 API expects phonenumber
        message: formData.message,
      });

      setSuccessMsg("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setApiError(
        error?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
      console.log(
        "Get in touch API error:",
        error?.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center items-center py-12 px-4 bg-white">
      <div className="w-full max-w-xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Get In Touch
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* NAME */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              maxLength={10}
              className="w-full px-4 py-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <textarea
              name="message"
              rows="4"
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {/* SUCCESS / ERROR */}
          {successMsg && (
            <p className="text-green-600 text-sm text-center">
              {successMsg}
            </p>
          )}
          {apiError && (
            <p className="text-red-600 text-sm text-center">
              {apiError}
            </p>
          )}

          <Button
            text={loading ? "Submitting..." : "Submit"}
            className="w-full"
            type="submit"
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
}
