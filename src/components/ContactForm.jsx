import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-ZÀ-ž\s.'-]{2,}$/; // Accepts accented characters and names like O’Connor or Jean-Luc
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex = /^\+?[0-9\s\-()]{10,20}$/; // Accepts international phone formats

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = "Please enter a valid name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!phoneRegex.test(formData.contact.trim())) {
      newErrors.contact = "Enter a valid contact number (with or without +)";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent non-digit characters for 'contact' field
    if (name === "contact") {
      const digitsOnly = value.replace(/\D/g, ""); // \D = non-digits
      setFormData({ ...formData, [name]: digitsOnly });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  if (formData.contact.length < 7 || formData.contact.length > 15) {
    alert("Please enter a valid contact number.");
    return;
  }
    if (validate()) {
      console.log("Form submitted:", formData);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        contact: "",
        message: "",
      });
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      {success && (
        <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">
          Message sent successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-medium">Contact Number</label>
          <input
            type="tel"
            name="contact"
            required
            inputMode="numeric"
            value={formData.contact}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          {errors.contact && (
            <p className="text-red-600 text-sm">{errors.contact}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border p-2 rounded"
          />
          {errors.message && (
            <p className="text-red-600 text-sm">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#006838] text-white  px-4 py-2 rounded-3xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
