// src/App.js
import React from "react";
import "./index.css";

export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phone = "92"; // 🔁 Replace with your WhatsApp number

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  const FloatingWhatsAppButton = () => {
    const phone = "9230"; // 🔁 Replace with your WhatsApp number

    return (
      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.968 7.968 0 0 0 8.008.002C3.582.002 0 3.582 0 8a7.95 7.95 0 0 0 1.189 4.2l-1.26 4.605 4.724-1.237A7.974 7.974 0 0 0 8.007 16C12.426 16 16 12.418 16 7.998a7.96 7.96 0 0 0-2.399-5.672ZM8.008 14.493a6.47 6.47 0 0 1-3.326-.91l-.238-.14-2.803.734.751-2.74-.157-.248a6.459 6.459 0 0 1-.998-3.39c0-3.577 2.91-6.487 6.488-6.487a6.47 6.47 0 0 1 4.602 1.902A6.47 6.47 0 0 1 14.5 8c0 3.577-2.91 6.493-6.492 6.493Zm3.644-4.787c-.2-.1-1.18-.582-1.364-.648-.184-.065-.318-.1-.453.1s-.518.648-.634.782c-.117.134-.233.15-.433.05-.2-.1-.843-.31-1.605-.99-.593-.53-.993-1.18-1.11-1.38-.116-.2-.013-.308.087-.408.09-.089.2-.233.3-.35.1-.117.133-.2.2-.334.066-.133.033-.25-.017-.35-.05-.1-.453-1.093-.62-1.497-.162-.39-.33-.338-.453-.343h-.388c-.134 0-.35.05-.533.25-.183.2-.7.682-.7 1.65 0 .968.717 1.9.816 2.034.1.134 1.41 2.15 3.417 3.015.478.206.85.33 1.14.422.478.153.913.132 1.256.08.383-.057 1.18-.483 1.35-.95.166-.467.166-.867.117-.95-.05-.082-.183-.133-.383-.233Z" />
        </svg>
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6 font-sans">
      <header className="text-center py-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">Unlock Your True Potential</h1>
        <p className="mt-4 text-xl text-gray-600">
          Guidance to break limiting beliefs and create a life you love
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Your Life Coach</h2>
          <p className="text-gray-700 text-lg">
            I'm here to help you uncover what’s holding you back and guide you step-by-step to
            clarity, confidence, and success. Whether it’s personal growth, career, or relationships —
            you don’t have to do it alone.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What I Can Help You With</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li>Overcoming limiting beliefs</li>
            <li>Improving self-confidence and motivation</li>
            <li>Creating a clear life vision</li>
            <li>Finding purpose and direction</li>
          </ul>
        </section>

        <section className="bg-purple-100 rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Ready to Take the First Step?</h2>
          <p className="text-purple-800 text-lg mb-6">
            Let’s talk about how I can support you on your journey. Your future self will thank you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto text-left"
          >
            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-purple-700 transition w-full"
            >
              Send on WhatsApp
            </button>
          </form>
        </section>
      </main>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        © 2025 Life Coach | Designed with ❤️
      </footer>

      <FloatingWhatsAppButton />
    </div>
  );
}
