import React, { useState } from "react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { Mail, Phone, Calendar, MapPin, Hash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import pic from "../assets/user.png"


const ProfileSection = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const [editable, setEditable] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || "John",
    lastName: user?.lastName || "Doe",
    email: user?.primaryEmailAddress?.emailAddress || "john.doe@example.com",
    phone: user?.primaryPhoneNumber?.phoneNumber || "+1 (555) 123-4567",
    dob: "1990-01-15",
    address: "123 Main Street",
    city: "New York",
    zip: "10001",
    userId: user?.id || "UID-12345",
    photo: user?.imageUrl || "https://via.placeholder.com/120",
  });

  const handleChange = (field, value) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  // logout and redirect to home
  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 sm:p-6">
      <div className="w-full max-w-4xl bg-card/20 backdrop-blur-xl border border-border/30 rounded-xl shadow-[var(--shadow-card)] overflow-hidden">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gradient-to-r from-blue-900 to-blue-700 px-4 sm:px-6 py-4 gap-2 sm:gap-0">
          <h2 className="text-lg font-semibold text-white text-center sm:text-left">
            Profile Information
          </h2>
          <span className="px-3 py-1 text-xs font-medium bg-yellow-400 text-black rounded-full self-center sm:self-auto">
            KYC Pending
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row p-4 sm:p-6 gap-6 sm:gap-8">
          {/* Left Side - Profile */}
          <div className="w-full md:w-1/3 flex flex-col items-center text-center">
            <img
              src={pic}
              alt="Profile"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-primary shadow-[var(--shadow-glow)] object-cover"
            />
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-white">
              {profileData.firstName} {profileData.lastName}
            </h3>
            <p className="text-gray-300 text-sm">{profileData.email}</p>
          </div>

          {/* Right Side - Details */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
            {/* First Name */}
            <div>
              <label className="text-sm text-white">First Name</label>
              <input
                type="text"
                value={profileData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-md bg-card/50 border border-border/50 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                disabled={!editable}
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="text-sm text-white">Last Name</label>
              <input
                type="text"
                value={profileData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-md bg-card/50 border border-border/50 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                disabled={!editable}
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-white flex items-center gap-1">
                <Mail className="w-4 h-4" /> Email
              </label>
              <input
                type="email"
                value={profileData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-md bg-card/50 border border-border/50 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                disabled={!editable}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-white flex items-center gap-1">
                <Phone className="w-4 h-4" /> Phone
              </label>
              <input
                type="text"
                value={profileData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-md bg-card/50 border border-border/50 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                disabled={!editable}
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="text-sm text-white flex items-center gap-1">
                <Calendar className="w-4 h-4" /> Date of Birth
              </label>
              <input
                type="date"
                value={profileData.dob}
                onChange={(e) => handleChange("dob", e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-md bg-card/50 border border-border/50 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                disabled={!editable}
              />
            </div>

            {/* ZIP Code */}
            <div>
              <label className="text-sm text-white">ZIP Code</label>
              <input
                type="text"
                value={profileData.zip}
                onChange={(e) => handleChange("zip", e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-md bg-card/50 border border-border/50 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                disabled={!editable}
              />
            </div>

            {/* Address */}
            <div className="sm:col-span-2">
              <label className="text-sm text-white flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Address
              </label>
              <input
                type="text"
                value={profileData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-md bg-card/50 border border-border/50 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                disabled={!editable}
              />
            </div>

            {/* City */}
            <div>
              <label className="text-sm text-white">City</label>
              <input
                type="text"
                value={profileData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-md bg-card/50 border border-border/50 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                disabled={!editable}
              />
            </div>

            {/* User ID */}
            <div>
              <label className="text-sm text-white flex items-center gap-1">
                <Hash className="w-4 h-4" /> User ID
              </label>
              <input
                type="text"
                value={profileData.userId}
                disabled
                className="w-full mt-1 px-3 py-2 rounded-md bg-card/50 border border-border/50 text-white opacity-70 cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 px-4 sm:px-6 py-4 border-t border-border/30">
          <button
            onClick={() => setEditable(!editable)}
            className="w-full sm:w-auto px-4 py-2 rounded-md bg-gray-700 text-white font-medium hover:bg-gray-600 transition"
          >
            {editable ? "Save Profile" : "Edit Profile"}
          </button>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => alert("Redirect to e-KYC process")}
              className="w-full sm:w-auto px-4 py-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-500 transition"
            >
              Complete e-KYC
            </button>
            <button
              onClick={handleLogout}
              className="w-full sm:w-auto px-4 py-2 rounded-md bg-red-600 text-white font-medium hover:bg-red-500 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
