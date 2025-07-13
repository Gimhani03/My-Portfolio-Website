"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bmshwyr",
        "template_x7q34t3",
        form.current!,
        "VwX03xaCXPa3v32LZ"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen flex mt-10 justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full h-120 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Let's Work Together 👋</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-2">
          <input type="text" name="user_name" placeholder="Your Name" required className="w-full border p-3 rounded-xl" />
          <input type="email" name="user_email" placeholder="Your Email" required className="w-full border p-3 rounded-xl" />
          <textarea name="message" rows={5} placeholder="Your Message" required className="w-full border p-3 rounded-xl"></textarea>
          <button type="submit" className="bg-black text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>
    </div>
  );
}
