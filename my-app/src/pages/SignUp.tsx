import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isTouched, setIsTouched] = useState(false);
  const [isConfirmTouched, setIsConfirmTouched] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") setIsTouched(true);
    if (name === "confirmPassword") setIsConfirmTouched(true);
  };

  const getPasswordError = () => {
    const { password } = formData;
    if (password.length < 8) return "⚠️ Password is too short";
    if (!/[a-z]/.test(password) || !/[0-9]/.test(password))
      return "⚠️ Password needs a number and a lowercase letter";
    return "";
  };

  const getConfirmPasswordError = () => {
    if (formData.confirmPassword !== formData.password)
      return "⚠️ Passwords do not match";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //Stops the browser from submitting the form the traditional way

    const pwdErr = getPasswordError();
    const confirmErr = getConfirmPasswordError();

    if (pwdErr || confirmErr) {
      alert(`${pwdErr || confirmErr}`);
      return;
    }

    alert(`Email: ${formData.email}\nPassword: ${formData.password}`);
  };

  const passwordError = getPasswordError();
  const isPasswordInvalid = isTouched && passwordError;

  const confirmPasswordError = getConfirmPasswordError();
  const isConfirmInvalid = isConfirmTouched && confirmPasswordError;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Sign up to ClothCloud
        </h2>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-medium">
            Username
          </label>
          <input className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 font-medium">
            Password*
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className={`w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 ${
              isPasswordInvalid
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            onChange={handleChange}
            value={formData.password}
            required
          />
          {isPasswordInvalid && (
            <p className="text-sm text-red-600 mt-1">{passwordError}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block mb-1 font-medium">
            Confirm Password*
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className={`w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 ${
              isConfirmInvalid
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            onChange={handleChange}
            value={formData.confirmPassword}
            required
          />
          {isConfirmInvalid && (
            <p className="text-sm text-red-600 mt-1">{confirmPasswordError}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded shadow hover:bg-blue-700 transition duration-200"
        >
          Create Account
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign in →
          </Link>
        </p>

        <div className="flex items-center gap-2 justify-center mt-6">
          <Link to="/">
            <img
              src="/logo.png"
              alt="ClothCloud"
              className="h-9 w-auto max-w-[120px] hover:opacity-80 transition"
            />
          </Link>
        </div>
      </form>
    </div>
  );
}
