// import { useState } from "react";
// import { isRequired, isValidEmail, isValidPhone } from "../../utils/validators";
// import user from "../../assets/images/user.png"
// import Button from "../../components/Button/Button";
// export default function UpdateProfile() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     country: "",
//     city: "",
//     phone: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phone" && !/^\d*$/.test(value)) return;

//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     let newErrors = {};

//     newErrors.firstName = isRequired(formData.firstName);
//     newErrors.lastName = isRequired(formData.lastName);
//     newErrors.email = isValidEmail(formData.email);
//     newErrors.country = isRequired(formData.country);
//     newErrors.city = isRequired(formData.city);
//     newErrors.phone = isValidPhone(formData.phone);

//     setErrors(newErrors);

//     return Object.values(newErrors).every((err) => err === "");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       alert("Profile Updated Successfully!");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center px-4">
//       <div className="w-full  p-6 rounded-xl shadow-lg">
//         <h1 className="text-2xl font-bold text-center mb-2">Update Profile</h1>
//         <p className="text-center text-gray-500 text-sm mb-6">
//           Quick overview of Kitehawk LMS Show how easy it is to create courses,
//           assign tasks, track progress.
//         </p>
//         <div className="flex justify-center mb-6">
//           <img src={user} alt="" className="object-cover"/>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.firstName && (
//               <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
//             )}
//           </div>
//           <div>
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.lastName && (
//               <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
//             )}
//           </div>
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//             )}
//           </div>
//           <div>
//             <input
//               type="text"
//               name="country"
//               placeholder="Country"
//               value={formData.country}
//               onChange={handleChange}
//               className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.country && (
//               <p className="text-red-500 text-sm mt-1">{errors.country}</p>
//             )}
//           </div>
//           <div>
//             <input
//               type="text"
//               name="city"
//               placeholder="City"
//               value={formData.city}
//               onChange={handleChange}
//               className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.city && (
//               <p className="text-red-500 text-sm mt-1">{errors.city}</p>
//             )}
//           </div>

//           <div>
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               maxLength={10}
//               className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.phone && (
//               <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
//             )}
//           </div>
//           <Button text="Update Profile" className="w-full"/>
//         </form>
//       </div>
//     </div>
//   );
// }






// import { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { isRequired, isValidEmail, isValidPhone } from "../../utils/validators";
// import userPlaceholder from "../../assets/images/user.png";
// import Button from "../../components/Button/Button";

// const BASE_URL = "https://kitehawk-api.onrender.com";
// const IMAGE_BASE_URL = "https://kitehawk-api.onrender.com/image/";

// export default function UpdateProfile() {
//   const fileInputRef = useRef(null);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     country: "",
//     city: "",
//     phone: "",
//   });

//   const [profileImage, setProfileImage] = useState(null); // 🔹 actual image url
//   const [imagePreview, setImagePreview] = useState(null); // 🔹 local preview
//   const [selectedImage, setSelectedImage] = useState(null); // 🔹 file object

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(true);

//   // 🔹 FETCH USER INFO
//   useEffect(() => {
//     fetchUserInfo();
//   }, []);

//   const fetchUserInfo = async () => {
//     try {
//       const token = localStorage.getItem("userToken");
//       if (!token) return;

//       const res = await axios.get(`${BASE_URL}/api/getinfo`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const data = res.data?.data;

//       if (data) {
//         setFormData({
//           firstName: data.firstname || "",
//           lastName: data.lastname || "",
//           email: data.email || "",
//           country: data.Country || "",
//           city: data.city || "",
//           phone: "",
//         });

//         // 🔹 Profile image from API (future ready)
//         if (data.profileimage) {
//           setProfileImage(`${IMAGE_BASE_URL}${data.profileimage}`);
//         }
//       }
//     } catch (error) {
//       console.log("Profile fetch error:", error?.response?.data || error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 HANDLE IMAGE SELECT
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setSelectedImage(file);
//     setImagePreview(URL.createObjectURL(file));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phone" && !/^\d*$/.test(value)) return;

//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     newErrors.firstName = isRequired(formData.firstName);
//     newErrors.lastName = isRequired(formData.lastName);
//     newErrors.email = isValidEmail(formData.email);
//     newErrors.country = isRequired(formData.country);
//     newErrors.city = isRequired(formData.city);
//     newErrors.phone = isValidPhone(formData.phone);

//     setErrors(newErrors);
//     return Object.values(newErrors).every((err) => err === "");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       alert("Profile Updated Successfully!");
//       // 🔹 future: yahan profile + image upload API lagegi
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-60">
//         <p className="text-gray-500">Loading profile...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center items-center px-4">
//       <div className="w-full p-6 rounded-xl shadow-lg">
//         <h1 className="text-2xl font-bold text-center mb-2">Update Profile</h1>
//         <p className="text-center text-gray-500 text-sm mb-6">
//           Quick overview of Kitehawk LMS Show how easy it is to create courses,
//           assign tasks, track progress.
//         </p>

//         {/* 🔹 PROFILE IMAGE SECTION */}
//         <div className="flex flex-col items-center mb-6">
//           <div
//             className="relative cursor-pointer"
//             onClick={() => fileInputRef.current.click()}
//           >
//             <img
//               src={imagePreview || profileImage || userPlaceholder}
//               alt="profile"
//               className="w-28 h-28 rounded-full object-cover border-2 border-orange-400"
//             />
//             <span className="absolute bottom-0 right-0 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
//               Edit
//             </span>
//           </div>

//           <input
//             ref={fileInputRef}
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={handleImageChange}
//           />
//         </div>

//         {/* 🔹 FORM */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3"
//           />

//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3"
//           />

//           <input
//             type="text"
//             name="country"
//             placeholder="Country"
//             value={formData.country}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3"
//           />

//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             value={formData.city}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3"
//           />

//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             maxLength={10}
//             className="w-full border rounded-lg p-3"
//           />

//           <Button text="Update Profile" className="w-full" />
//         </form>
//       </div>
//     </div>
//   );
// }




// import { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { isRequired, isValidEmail, isValidPhone } from "../../utils/validators";
// import userPlaceholder from "../../assets/images/user.png";
// import Button from "../../components/Button/Button";

// const BASE_URL = "https://kitehawk-api.onrender.com";
// const IMAGE_BASE_URL = "https://kitehawk-api.onrender.com/image/";

// export default function UpdateProfile() {
//   const fileInputRef = useRef(null);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     country: "",
//     city: "",
//     phone: "",
//   });

//   const [profileImage, setProfileImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   // 🔹 FETCH USER INFO
//   useEffect(() => {
//     fetchUserInfo();
//   }, []);

//   const fetchUserInfo = async () => {
//     try {
//       const token = localStorage.getItem("userToken");
//       if (!token) return;

//       const res = await axios.get(`${BASE_URL}/api/getinfo`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const data = res.data?.data;

//       if (data) {
//         setFormData({
//           firstName: data.firstname || "",
//           lastName: data.lastname || "",
//           email: data.email || "",
//           country: data.Country || "",
//           city: data.city || "",
//           phone: "",
//         });

//         if (data.profileimage) {
//           setProfileImage(`${IMAGE_BASE_URL}${data.profileimage}`);
//         }
//       }
//     } catch (error) {
//       console.log(
//         "Profile fetch error:",
//         error?.response?.data || error.message
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 IMAGE SELECT
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setSelectedImage(file);
//     setImagePreview(URL.createObjectURL(file));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phone" && !/^\d*$/.test(value)) return;

//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     newErrors.firstName = isRequired(formData.firstName);
//     newErrors.lastName = isRequired(formData.lastName);
//     newErrors.email = isValidEmail(formData.email);
//     newErrors.country = isRequired(formData.country);
//     newErrors.city = isRequired(formData.city);
//     newErrors.phone = isValidPhone(formData.phone);

//     setErrors(newErrors);
//     return Object.values(newErrors).every((err) => err === "");
//   };

//   // 🔹 UPDATE PROFILE API
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       const token = localStorage.getItem("userToken");
//       if (!token) return;

//       setSaving(true);

//       const payload = new FormData();
//       payload.append("email", formData.email);
//       payload.append("firstname", formData.firstName);
//       payload.append("lastname", formData.lastName);
//       payload.append("city", formData.city);
//       payload.append("Country", formData.country);

//       if (selectedImage) {
//         payload.append("profileimg", selectedImage);
//       }

//       await axios.put(`${BASE_URL}/api/update`, payload, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       alert("Profile Updated Successfully ✅");

//       // refresh image after update
//       if (selectedImage) {
//         setProfileImage(imagePreview);
//         setImagePreview(null);
//       }
//     } catch (error) {
//       console.log(
//         "Profile update error:",
//         error?.response?.data || error.message
//       );
//       alert("Profile update failed ❌");
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-60">
//         <p className="text-gray-500">Loading profile...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center items-center px-4">
//       <div className="w-full p-6 rounded-xl shadow-lg">
//         <h1 className="text-2xl font-bold text-center mb-2">Update Profile</h1>
//         <p className="text-center text-gray-500 text-sm mb-6">
//           Quick overview of Kitehawk LMS Show how easy it is to create courses,
//           assign tasks, track progress.
//         </p>

//         {/* 🔹 PROFILE IMAGE */}
//         <div className="flex flex-col items-center mb-6">
//           <div
//             className="relative cursor-pointer"
//             onClick={() => fileInputRef.current.click()}
//           >
//             <img
//               src={imagePreview || profileImage || userPlaceholder}
//               alt="profile"
//               className="w-28 h-28 rounded-full object-cover border-2 border-orange-400"
//             />
//             <span className="absolute bottom-0 right-0 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
//               Edit
//             </span>
//           </div>

//           <input
//             ref={fileInputRef}
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={handleImageChange}
//           />
//         </div>

//         {/* 🔹 FORM */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3"
//           />

//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3"
//           />

//           <input
//             type="text"
//             name="country"
//             placeholder="Country"
//             value={formData.country}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3"
//           />

//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             value={formData.city}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3"
//           />

//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             maxLength={10}
//             className="w-full border rounded-lg p-3"
//           />

//           <Button
//             text={saving ? "Updating..." : "Update Profile"}
//             className="w-full"
//             disabled={saving}
//           />
          
//         </form>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { isRequired, isValidEmail, isValidPhone } from "../../utils/validators";
// import userPlaceholder from "../../assets/images/user.png";

// const BASE_URL = "https://kitehawk-api.onrender.com";
// const IMAGE_BASE_URL = "https://kitehawk-api.onrender.com/image/";

// export default function UpdateProfile() {
//   const fileInputRef = useRef(null);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     country: "",
//     city: "",
//     phone: "",
//   });

//   const [profileImage, setProfileImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   useEffect(() => {
//     fetchUserInfo();
//   }, []);

//   const fetchUserInfo = async () => {
//     try {
//       const token = localStorage.getItem("userToken");
//       if (!token) return;

//       const res = await axios.get(`${BASE_URL}/api/getinfo`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const data = res.data?.data;

//       if (data) {
//         setFormData({
//           firstName: data.firstname || "",
//           lastName: data.lastname || "",
//           email: data.email || "",
//           country: data.Country || "",
//           city: data.city || "",
//           phone: "",
//         });

//         if (data.profileimage) {
//           setProfileImage(`${IMAGE_BASE_URL}${data.profileimage}`);
//         }
//       }
//     } catch (err) {
//       console.log("Profile fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setSelectedImage(file);
//     setImagePreview(URL.createObjectURL(file));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phone" && !/^\d*$/.test(value)) return;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     newErrors.firstName = isRequired(formData.firstName);
//     newErrors.lastName = isRequired(formData.lastName);
//     newErrors.email = isValidEmail(formData.email);
//     newErrors.country = isRequired(formData.country);
//     newErrors.city = isRequired(formData.city);
//     newErrors.phone = isValidPhone(formData.phone);

//     setErrors(newErrors);
//     return Object.values(newErrors).every((e) => e === "");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       setUpdating(true);
//       const token = localStorage.getItem("userToken");

//       const fd = new FormData();
//       fd.append("firstname", formData.firstName);
//       fd.append("lastname", formData.lastName);
//       fd.append("email", formData.email);
//       fd.append("city", formData.city);
//       fd.append("Country", formData.country);

//       if (selectedImage) {
//         fd.append("profileimg", selectedImage);
//       }

//       await axios.put(`${BASE_URL}/api/update`, fd, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       alert("Profile updated successfully");
//       fetchUserInfo();
//     } catch (err) {
//       console.log("Update error:", err?.response?.data || err.message);
//       alert("Failed to update profile");
//     } finally {
//       setUpdating(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-60">
//         <p className="text-gray-500">Loading profile...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center px-4">
//       <div className="w-full p-6 rounded-xl shadow-lg">
//         <h1 className="text-2xl font-bold text-center mb-2">Update Profile</h1>

//         {/* PROFILE IMAGE */}
//         <div className="flex justify-center mb-6">
//           <div
//             className="relative cursor-pointer"
//             onClick={() => fileInputRef.current.click()}
//           >
//             <img
//               src={imagePreview || profileImage || userPlaceholder}
//               className="w-28 h-28 rounded-full object-cover border-2 border-orange-400"
//               alt="profile"
//             />
//             <span className="absolute bottom-0 right-0 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
//               Edit
//             </span>
//           </div>
//           <input
//             ref={fileInputRef}
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={handleImageChange}
//           />
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="w-full border p-3 rounded" />
//           <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="w-full border p-3 rounded" />
//           <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full border p-3 rounded" />
//           <input name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="w-full border p-3 rounded" />
//           <input name="city" value={formData.city} onChange={handleChange} placeholder="City" className="w-full border p-3 rounded" />
//           <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" maxLength={10} className="w-full border p-3 rounded" />

//           <button
//             type="submit"
//             disabled={updating}
//             className="w-full rounded-full bg-orange-500 py-3 text-white font-bold disabled:opacity-50"
//           >
//             {updating ? "Updating..." : "Update Profile"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }















// import { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { isRequired, isValidEmail, isValidPhone } from "../../utils/validators";
// import userPlaceholder from "../../assets/images/user.png";

// const BASE_URL = "https://kitehawk-api.onrender.com";
// const IMAGE_BASE_URL = "https://kitehawk-api.onrender.com/image/";

// export default function UpdateProfile() {
//   const fileInputRef = useRef(null);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     country: "",
//     city: "",
//     phone: "",
//   });

//   const [profileImage, setProfileImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   // 🔹 FETCH USER INFO
//   useEffect(() => {
//     fetchUserInfo();
//   }, []);

//   const fetchUserInfo = async () => {
//     try {
//       const token = localStorage.getItem("userToken");
//       if (!token) return;

//       const res = await axios.get(`${BASE_URL}/api/getinfo`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const data = res.data?.data;

//       if (data) {
//         setFormData({
//           firstName: data.firstname || "",
//           lastName: data.lastname || "",
//           email: data.email || "",
//           country: data.Country || "",
//           city: data.city || "",
//           phone: "",
//         });

//         if (data.profileimage) {
//           setProfileImage(`${IMAGE_BASE_URL}${data.profileimage}`);
//         }
//       }
//     } catch (err) {
//       console.log("Profile fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 IMAGE CHANGE
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setSelectedImage(file);
//     setImagePreview(URL.createObjectURL(file));
//   };

//   // 🔹 INPUT CHANGE
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phone" && !/^\d*$/.test(value)) return;

//     setFormData({ ...formData, [name]: value });
//   };

//   // 🔹 OPTIONAL VALIDATION (ONLY FILLED FIELDS)
//   const validateForm = () => {
//     let newErrors = {};

//     if (formData.firstName)
//       newErrors.firstName = isRequired(formData.firstName);

//     if (formData.lastName)
//       newErrors.lastName = isRequired(formData.lastName);

//     if (formData.email)
//       newErrors.email = isValidEmail(formData.email);

//     if (formData.country)
//       newErrors.country = isRequired(formData.country);

//     if (formData.city)
//       newErrors.city = isRequired(formData.city);

//     if (formData.phone)
//       newErrors.phone = isValidPhone(formData.phone);

//     setErrors(newErrors);
//     return Object.values(newErrors).every((e) => e === "");
//   };

//   // 🔹 SUBMIT
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       setUpdating(true);
//       const token = localStorage.getItem("userToken");

//       const fd = new FormData();

//       // 🔹 SEND ONLY FILLED FIELDS
//       if (formData.firstName) fd.append("firstname", formData.firstName);
//       if (formData.lastName) fd.append("lastname", formData.lastName);
//       if (formData.email) fd.append("email", formData.email);
//       if (formData.city) fd.append("city", formData.city);
//       if (formData.country) fd.append("Country", formData.country);

//       if (selectedImage) {
//         fd.append("profileimg", selectedImage);
//       }

//       await axios.patch(`${BASE_URL}/api/update`, fd, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       alert("Profile updated successfully");
//       fetchUserInfo();
//       setImagePreview(null);
//       setSelectedImage(null);
//     } catch (err) {
//       console.log("Update error:", err?.response?.data || err.message);
//       alert("Failed to update profile");
//     } finally {
//       setUpdating(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-60">
//         <p className="text-gray-500">Loading profile...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center px-4">
//       <div className="w-full p-6 rounded-xl shadow-lg">
//         <h1 className="text-2xl font-bold text-center mb-4">
//           Update Profile
//         </h1>

//         {/* 🔹 PROFILE IMAGE */}
//         <div className="flex justify-center mb-6">
//           <div
//             className="relative cursor-pointer"
//             onClick={() => fileInputRef.current.click()}
//           >
//             <img
//               src={imagePreview || profileImage || userPlaceholder}
//               className="w-28 h-28 rounded-full object-cover border-2 border-orange-400"
//               alt="profile"
//             />
//             <span className="absolute bottom-0 right-0 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
//               Edit
//             </span>
//           </div>
//           <input
//             ref={fileInputRef}
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={handleImageChange}
//           />
//         </div>

//         {/* 🔹 FORM */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             placeholder="First Name"
//             className="w-full border p-3 rounded"
//           />

//           <input
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             placeholder="Last Name"
//             className="w-full border p-3 rounded"
//           />

//           <input
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="w-full border p-3 rounded"
//           />

//           <input
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             placeholder="Country"
//             className="w-full border p-3 rounded"
//           />

//           <input
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             placeholder="City"
//             className="w-full border p-3 rounded"
//           />

//           <input
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Phone"
//             maxLength={10}
//             className="w-full border p-3 rounded"
//           />

//           <button
//             type="submit"
//             disabled={updating}
//             className="w-full rounded-full bg-orange-500 py-3 text-white font-bold disabled:opacity-50"
//           >
//             {updating ? "Updating..." : "Update Profile"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { isRequired, isValidEmail, isValidPhone } from "../../utils/validators";
import userPlaceholder from "../../assets/images/user.png";

 const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const IMAGE_BASE_URL = "https://kitehawk-api.onrender.com/image/";

export default function UpdateProfile() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    phone: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  /* ================= FETCH USER INFO ================= */
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        navigate("/login");
        return;
      }

      const res = await axios.get(`${BASE_URL}/api/getinfo`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = res.data?.data;

      if (data) {
        setFormData({
          firstName: data.firstname || "",
          lastName: data.lastname || "",
          email: data.email || "",
          country: data.Country || "",
          city: data.city || "",
          phone: "",
        });

        if (data.profileimage) {
          setProfileImage(`${IMAGE_BASE_URL}${data.profileimage}`);
        }
      }
    } catch (err) {
      console.log("Profile fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= LOGOUT ================= */
const handleLogout = () => {
  localStorage.removeItem("userToken");
  window.location.href = "/";
};


  /* ================= IMAGE CHANGE ================= */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  /* ================= INPUT CHANGE ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });
  };

  /* ================= OPTIONAL VALIDATION ================= */
  const validateForm = () => {
    let newErrors = {};

    if (formData.firstName)
      newErrors.firstName = isRequired(formData.firstName);
    if (formData.lastName)
      newErrors.lastName = isRequired(formData.lastName);
    if (formData.email)
      newErrors.email = isValidEmail(formData.email);
    if (formData.country)
      newErrors.country = isRequired(formData.country);
    if (formData.city)
      newErrors.city = isRequired(formData.city);
    if (formData.phone)
      newErrors.phone = isValidPhone(formData.phone);

    setErrors(newErrors);
    return Object.values(newErrors).every((e) => e === "");
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setUpdating(true);
      const token = localStorage.getItem("userToken");

      const fd = new FormData();

      if (formData.firstName) fd.append("firstname", formData.firstName);
      if (formData.lastName) fd.append("lastname", formData.lastName);
      if (formData.email) fd.append("email", formData.email);
      if (formData.city) fd.append("city", formData.city);
      if (formData.country) fd.append("Country", formData.country);
      if (selectedImage) fd.append("profileimg", selectedImage);

      await axios.patch(`${BASE_URL}/api/update`, fd, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Profile updated successfully");
      fetchUserInfo();
      setImagePreview(null);
      setSelectedImage(null);
    } catch (err) {
      console.log("Update error:", err?.response?.data || err.message);
      alert("Failed to update profile");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center px-4">
      <div className="w-full p-6 rounded-xl shadow-lg">

        {/* 🔴 LOGOUT BUTTON */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleLogout}
            className="text-red-600 font-semibold border border-red-500 px-4 py-1 rounded-full hover:bg-red-500 hover:text-white transition"
          >
            Logout
          </button>
        </div>

        <h1 className="text-2xl font-bold text-center mb-4">
          Update Profile
        </h1>

        {/* PROFILE IMAGE */}
        <div className="flex justify-center mb-6">
          <div
            className="relative cursor-pointer"
            onClick={() => fileInputRef.current.click()}
          >
            <img
              src={imagePreview || profileImage || userPlaceholder}
              className="w-28 h-28 rounded-full object-cover border-2 border-orange-400"
              alt="profile"
            />
            <span className="absolute bottom-0 right-0 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              Edit
            </span>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="w-full border p-3 rounded" />
          <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="w-full border p-3 rounded" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full border p-3 rounded" />
          <input name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="w-full border p-3 rounded" />
          <input name="city" value={formData.city} onChange={handleChange} placeholder="City" className="w-full border p-3 rounded" />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" maxLength={10} className="w-full border p-3 rounded" />

          <button
            type="submit"
            disabled={updating}
            className="w-full rounded-full bg-orange-500 py-3 text-white font-bold disabled:opacity-50"
          >
            {updating ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
}
