"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: "Please fill in all fields",
      });
      return;
    }

    setFormStatus({
      submitting: true,
      submitted: false,
      error: null,
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Form submitted successfully
      setFormStatus({
        submitting: false,
        submitted: true,
        error: null,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({
          ...prev,
          submitted: false,
        }));
      }, 5000);
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          {/* Contact Form - Left Side */}
          <div className="flex-1 w-full max-w-md">
            <div className="mb-8">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--tertiary)" }}
              >
                CONTACT US
              </h3>

              <h1
                className="text-3xl font-bold mb-6"
                style={{ color: "var(--secondary)" }}
              >
                Get in Touch
              </h1>
              <div
                className="w-16 h-1 mb-6"
                style={{ backgroundColor: "var(--tertiary)" }}
              ></div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Form status messages */}
              {formStatus.error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  {formStatus.error}
                </div>
              )}

              {formStatus.submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {/* Name Field */}
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{
                    focusColor: "var(--tertiary)",
                    focusRing: "var(--tertiary)",
                  }}
                  disabled={formStatus.submitting}
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{
                    focusColor: "var(--tertiary)",
                    focusRing: "var(--tertiary)",
                  }}
                  disabled={formStatus.submitting}
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{
                    focusColor: "var(--tertiary)",
                    focusRing: "var(--tertiary)",
                  }}
                  disabled={formStatus.submitting}
                ></textarea>
              </div>

              {/* Send Button */}
              <div>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-md text-white font-medium transition-colors duration-300 hover:opacity-90 disabled:opacity-50"
                  style={{ backgroundColor: "var(--tertiary)" }}
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>

          {/* Image - Right Side */}
          <div className="flex-1 flex items-start justify-center mt-8 md:mt-[140px]">
            <div className="relative">
              <Image
                src="/code_blue.png"
                alt="Codex Billing"
                width={450}
                height={550}
                className="max-w-full h-auto rounded-2xl shadow-lg"
                style={{
                  objectFit: "contain",
                  maxHeight: "550px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
