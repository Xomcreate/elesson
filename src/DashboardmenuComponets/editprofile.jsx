// src/components/EditProfile.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function EditProfile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
    state: "",
  });

  // Fetch current user details and pre-populate the form.
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:3000/api/auth/details", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (res.data.user) {
            setFormData({
              firstName: res.data.user.firstName || "",
              lastName: res.data.user.lastName || "",
              username: res.data.user.username || "",
              phoneNumber: res.data.user.phoneNumber || "",
              state: res.data.user.state || "",
            });
          }
        })
        .catch((err) => {
          console.error("Error fetching user details:", err);
        });
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Validate that all required fields are filled.
  const validateForm = () => {
    const { firstName, lastName, username, phoneNumber, state } = formData;
    if (!firstName || !lastName || !username || !phoneNumber || !state) {
      alert("Fill all the fields");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const token = localStorage.getItem("token");
    try {
      const res = await axios.put(
        "http://localhost:3000/api/auth/details",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        window.dispatchEvent(
          new CustomEvent("profileUpdated", { detail: res.data.user })
        );
        alert("Details updated");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="min-h-[100vh] bg-gray-300 flex justify-center items-center py-8 px-4">
      <form
        onSubmit={handleSubmit}
        className="h-auto grid grid-rows-7 gap-6 w-full bg-white max-w-2xl p-8 rounded-lg shadow-xl"
      >
        <div className="row-span-1 font-serif text-[24px] md:text-[28px] text-[orangered] font-bold flex justify-center items-center">
          <h1>Edit Profile</h1>
        </div>
        <div className="row-span-5 grid gap-6 md:grid-cols-2">
          {/* Left Column (Personal Info) */}
          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <label className="font-medium text-[16px] md:text-[18px] text-gray-600 w-full md:w-[30%]">
                First Name:
              </label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                className="h-[40px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <label className="font-medium text-[16px] md:text-[18px] text-gray-600 w-full md:w-[30%]">
                Last Name:
              </label>
              <input
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                className="h-[40px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <label className="font-medium text-[16px] md:text-[18px] text-gray-600 w-full md:w-[30%]">
                Username:
              </label>
              <input
                name="username"
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                className="h-[40px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>
          {/* Right Column (Contact Info) */}
          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <label className="font-medium text-[16px] md:text-[18px] text-gray-600 w-full md:w-[30%]">
                Phone:
              </label>
              <input
                name="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="h-[40px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <label className="font-medium text-[16px] md:text-[18px] text-gray-600 w-full md:w-[30%]">
                State:
              </label>
              <input
                name="state"
                type="text"
                placeholder="Enter your state"
                value={formData.state}
                onChange={handleChange}
                className="h-[40px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <div className="row-span-1 flex justify-center items-center">
          <button
            type="submit"
            className="px-8 py-3 w-full md:w-auto bg-[orangered] text-white font-semibold text-lg rounded-md hover:bg-[#00008B] transition duration-200 ease-in"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
