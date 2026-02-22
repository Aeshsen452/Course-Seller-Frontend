export const isRequired = (value) => {
  if (!value || value.trim() === "") {
    return "This field is required";
  }
  return "";
};

export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || email.trim() === "") {
    return "Email is required";
  }
  if (!regex.test(email)) {
    return "Enter a valid email address";
  }
  return "";
};

export const isValidPassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!password) {
    return "Password is required";
  }
  if (!regex.test(password)) {
    return "Password must be at least 8 characters, include uppercase, lowercase, and a number";
  }
  return "";
};

export const doPasswordsMatch = (password, confirmPassword) => {
  if (!confirmPassword) {
    return "Please confirm your password";
  }
  if (password !== confirmPassword) {
    return "Passwords do not match";
  }
  return "";
};

export const hasLengthBetween = (value, min, max) => {
  if (!value) return `This field is required`;
  if (value.length < min) return `Must be at least ${min} characters`;
  if (value.length > max) return `Must be less than ${max} characters`;
  return "";
};
export const isValidPhone = (phone) => {
  const regex = /^[0-9]{10}$/;
  if (!phone || phone.trim() === "") {
    return "Phone number is required";
  }
  if (!regex.test(phone)) {
    return "Phone number must be exactly 10 digits";
  }
  return "";
};