import React, { useState } from "react";
import axios from "axios";

function Waitlist() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    business: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/waitlist/join",
        formData
      );

      alert(res.data.message);

      setFormData({
        fullName: "",
        email: "",
        business: "",
        phone: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to join waitlist");
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h1>Join the Future of Live Commerce</h1>

      <p>
        Be the first to know when AI Twin goes live.
        Join our waitlist and get early access,
        exclusive updates and special launch benefits.
      </p>

      <h2>Join the Waitlist</h2>

      <p>Fill in your details and we'll keep you in the loop.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="text"
          name="business"
          placeholder="Your Brand / Business"
          value={formData.business}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <div style={{ display: "flex", gap: "10px" }}>
          <div
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              minWidth: "80px",
            }}
          >
            🇮🇳 +91
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ flex: 1, padding: "10px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            background: "#ff4d6d",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Yes! Notify Me
        </button>
      </form>
    </div>
  );
}

export default Waitlist;