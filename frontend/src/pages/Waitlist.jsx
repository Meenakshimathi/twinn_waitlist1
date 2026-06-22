import { useState } from "react";
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

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/waitlist/join",
        formData
      );

      alert(res.data.message);

    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div style={{ width: "500px", margin: "50px auto" }}>
      <h1>Join the Future of Live Commerce</h1>

      <form onSubmit={submitForm}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="business"
          placeholder="Your Brand / Business"
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <button type="submit">
          Yes! Notify Me
        </button>
      </form>
    </div>
  );
}

export default Waitlist;