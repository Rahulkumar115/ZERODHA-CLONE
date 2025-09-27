import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/auth/check`, { withCredentials: true })
      .then(res => {
        if (res.data.valid) {
          setUser(res.data.user);
          setFormData(f => ({
            ...f,
            name: res.data.user.name,
            email: res.data.user.email,
          }));
        }
      }).catch(() => setUser(null));
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      setMessage("New password and confirm password do not match.");
      return;
    }
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/auth/user/update`,
        formData,
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      setUser(res.data.user);
      setIsEditing(false);
      setMessage(res.data.message || "Profile updated successfully.");
      setFormData(prev => ({ ...prev, currentPassword: "", newPassword: "", confirmPassword: "" }));
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to update profile.");
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <h2 className="profile-title">User Profile</h2>
      {message && <div className="alert alert-info profile-message">{message}</div>}
      <form>
        <label className="profile-label" htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          className="profile-input"
          disabled={!isEditing}
          onChange={handleChange}
        />

        <label className="profile-label" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          className="profile-input"
          disabled={!isEditing}
          onChange={handleChange}
        />

        {isEditing && (
          <>
            <label className="profile-label" htmlFor="currentPassword">Current Password</label>
            <input
              id="currentPassword"
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              className="profile-input"
              onChange={handleChange}
            />

            <label className="profile-label" htmlFor="newPassword">New Password</label>
            <input
              id="newPassword"
              type="password"
              name="newPassword"
              value={formData.newPassword}
              className="profile-input"
              onChange={handleChange}
            />

            <label className="profile-label" htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              className="profile-input"
              onChange={handleChange}
            />
          </>
        )}

        <div className="profile-buttons">
          {isEditing ? (
            <>
              <button type="button" className="btn btn-success" onClick={handleSave}>Save</button>
              <button type="button" className="btn btn-outline-secondary" onClick={() => {
                setIsEditing(false);
                setFormData({
                  name: user.name,
                  email: user.email,
                  currentPassword: "",
                  newPassword: "",
                  confirmPassword: ""
                });
                setMessage("");
              }}>Cancel</button>
            </>
          ) : (
            <>
              <button type="button" className="btn btn-primary" onClick={() => setIsEditing(true)}>Edit Profile</button>
              <button type="button" className="btn btn-outline-danger" onClick={() => navigate("/")}>Cancel</button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Profile;