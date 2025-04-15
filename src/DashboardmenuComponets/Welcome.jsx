import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import defaultImage from "../assets/blank.png"; // Default image

function Welcome() {
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize username from route state or localStorage (defaults to "Dex")
  const storedUsername = localStorage.getItem("username");
  const initialUsername =
    location.state?.username ||
    (storedUsername && storedUsername !== "undefined" ? storedUsername : "Dex");

  // State for username and profile image.
  const [username, setUsername] = useState(initialUsername);
  const [profileImage, setProfileImage] = useState(defaultImage);

  // Fetch user details from the backend on mount.
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:3000/api/auth/details", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (res.data.user) {
            // Update profile image from backend if available.
            if (res.data.user.profileImage) {
              setProfileImage(res.data.user.profileImage);
            } else {
              setProfileImage(defaultImage);
            }
            // Update username from backend if available.
            if (res.data.user.username) {
              setUsername(res.data.user.username);
              localStorage.setItem("username", res.data.user.username);
            }
          }
        })
        .catch((err) => {
          console.error("Error fetching user details:", err);
        });
    }
  }, []);

  // Listen for "profileUpdated" event to update username and profile image.
  useEffect(() => {
    const handleProfileUpdated = (event) => {
      // Update profile image if provided.
      if (event.detail.profileImage) {
        setProfileImage(event.detail.profileImage);
      }
      // Update username if provided.
      if (event.detail.username) {
        setUsername(event.detail.username);
        localStorage.setItem("username", event.detail.username);
      }
    };
    window.addEventListener("profileUpdated", handleProfileUpdated);
    return () => window.removeEventListener("profileUpdated", handleProfileUpdated);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-200 to-gray-400">
      <div className="flex flex-col items-center text-center space-y-8 p-6 bg-white rounded-lg shadow-lg max-w-lg w-full">
        {/* Image Section */}
        <div
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-center bg-cover bg-no-repeat rounded-full border-4 border-gray-300"
          style={{ backgroundImage: `url(${profileImage})` }}
          aria-label="Welcome image"
        ></div>

        {/* Welcome Text Section */}
        <div className="space-y-4">
          <h1 className="text-[orangered] font-serif text-4xl sm:text-3xl md:text-4xl lg:text-5xl">
            Welcome, {username}
          </h1>
          <p className="text-gray-700 text-lg sm:text-base md:text-lg lg:text-xl font-medium">
            Your journey to success starts here.
          </p>
          <p className="text-gray-500 text-sm sm:text-sm md:text-base lg:text-lg">
            Let’s explore and achieve great milestones together.
          </p>
        </div>

        {/* Button Section */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="px-6 py-3 bg-[orangered] text-white rounded-lg font-semibold shadow-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 transition-all"
            onClick={() => navigate("/Past Questions")}
          >
            Past Questions
          </button>
          <button
            className="px-6 py-3 bg-[orangered] text-white rounded-lg font-semibold shadow-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 transition-all"
            onClick={() => navigate("/CBT Exam")}
          >
            CBT Exam
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
