// src/components/Details.js
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import myImage from "../assets/blank.png";
import Cropper from "react-easy-crop";
import getCroppedImg from "../Utils/cropimage";

function Details() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    state: "",
    profileImage: "",
  });

  // States for image cropping.
  const [showCropper, setShowCropper] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:3000/api/auth/details", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (res.data.user) {
            setUserDetails(res.data.user);
          }
        })
        .catch((err) => {
          console.error("Error fetching user details:", err);
        });
    }

    const handleProfileUpdated = (e) => {
      setUserDetails(e.detail);
    };

    window.addEventListener("profileUpdated", handleProfileUpdated);
    return () =>
      window.removeEventListener("profileUpdated", handleProfileUpdated);
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCropSave = async () => {
    try {
      const croppedImage = await getCroppedImg(selectedImage, croppedAreaPixels);
      const token = localStorage.getItem("token");
      const res = await axios.put(
        "http://localhost:3000/api/auth/details",
        { profileImage: croppedImage },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.user) {
        setUserDetails(res.data.user);
        window.dispatchEvent(
          new CustomEvent("profileUpdated", { detail: res.data.user })
        );
      }
      setShowCropper(false);
      setSelectedImage(null);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
    } catch (error) {
      console.error("Error cropping image:", error);
      setShowCropper(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl p-8">
        {/* Profile Image Section */}
        <div className="flex flex-col items-center">
          <div
            className="w-40 h-40 rounded-full bg-center bg-cover shadow-2xl"
            style={{
              backgroundImage: `url(${userDetails.profileImage || myImage})`,
            }}
            aria-label="User profile image"
          ></div>
          <div className="mt-4">
            <label
              htmlFor="upload-image"
              className="px-6 py-2 bg-orange-500 text-white rounded-full font-bold shadow hover:bg-orange-600 transition-all cursor-pointer"
              aria-label="Edit profile image"
            >
              Edit Picture
            </label>
            <input
              id="upload-image"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>

        {/* My Details Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-serif">
            My Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center font-serif">
            <div>
              <p className="text-xl font-semibold text-gray-700">First Name</p>
              <p className="mt-2 text-gray-600">{userDetails.firstName}</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-700">Last Name</p>
              <p className="mt-2 text-gray-600">{userDetails.lastName}</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-700">Username</p>
              <p className="mt-2 text-gray-600">{userDetails.username}</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-700">Email</p>
              <p className="mt-2 text-gray-600">{userDetails.email}</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-700">Phone Number</p>
              <p className="mt-2 text-gray-600">{userDetails.phoneNumber}</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-700">State</p>
              <p className="mt-2 text-gray-600">{userDetails.state}</p>
            </div>
          </div>
        </div>

        {/* Cropping Modal */}
        {showCropper && (
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded w-full max-w-md">
              <div style={{ width: "100%", height: "300px", position: "relative" }}>
                <Cropper
                  image={selectedImage}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
              </div>
              <div className="mt-4 flex justify-end gap-4">
                <button
                  onClick={() => setShowCropper(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCropSave}
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Save Crop
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Details;
