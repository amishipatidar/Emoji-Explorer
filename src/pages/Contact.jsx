import { useState } from "react";
import React from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email.includes("@")) errs.email = "Valid email is required";
    if (!form.message) errs.message = "Message cannot be empty";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      setErrors({});
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-[#141e30] to-[#243b55] text-white">
      <div className="container mx-auto px-4 py-32 max-w-lg flex-1">
        <h2 className="text-[60px] font-bold text-cyan-400 mb-2 drop-shadow-lg animate-fadeIn text-center">
          Contact Us 💬
        </h2>
        <p className="text-center text-gray-300 mb-8">
          We'd love to hear from you — drop us a message anytime!
        </p>

        {submitted && <p className="text-green-400 mb-4 text-center">Thanks for your feedback!</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 rounded-md bg-slate-800 text-white border border-slate-600"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 rounded-md bg-slate-800 text-white border border-slate-600"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <textarea
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-3 rounded-md bg-slate-800 text-white border border-slate-600"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <button
            type="submit"
            className="bg-cyan-400 hover:bg-cyan-600 text-black font-semibold px-6 py-2 rounded-full mx-auto block"
          >
            Send
          </button>
        </form>
      </div>

      <footer className="text-center py-6 text-slate-400 text-sm border-t border-white/10">
        © 2025 Emoji Explorer. Made with ❤️ using React & Tailwind CSS.
      </footer>
    </div>
  );
};

export default Contact;
