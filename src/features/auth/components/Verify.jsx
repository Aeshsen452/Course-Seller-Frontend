import { useState } from "react";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import { isValidEmail } from "../../../utils/validators"
export default function Verify({ onSuccess }) {
  const [formData, setFormData] = useState({
    email: "",
    verificationCode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    validationErrors.email = isValidEmail(formData.email);
    if (!formData.verificationCode.trim()) {
      validationErrors.verificationCode = "Verification code is required";
    } else if (formData.verificationCode.length < 6) {
      validationErrors.verificationCode =
        "Verification code must be at least 6 digits";
    }

    Object.keys(validationErrors).forEach(
      (key) => !validationErrors[key] && delete validationErrors[key]
    );

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Verify form submitted:", formData);
      if (onSuccess) onSuccess("changePassword");
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
              errors.email ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>


        <div>
          <label htmlFor="verificationCode" className="block mb-1">
            Verification Code
          </label>
          <div>
            <input
              id="verificationCode"
              type="text"
              name="verificationCode"
              placeholder="123456"
              value={formData.verificationCode}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 ${
                errors.verificationCode
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-blue-400"
              }`}
            />
          </div>
          {errors.verificationCode && (
            <p className="text-red-500 text-sm">{errors.verificationCode}</p>
          )}
          <Link className="text-[#F69837] text-sm justify-end flex mt-1">
            Resend Code
          </Link>
        </div>

        <Button className="w-full" text="Verify Code" />
      </form>
    </>
  );
}
