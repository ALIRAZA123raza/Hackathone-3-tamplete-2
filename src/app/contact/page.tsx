import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-900">
      <h1 className="text-4xl font-bold mb-8 animate-bounce">
        Avion
      </h1>
      <p className="text-lg mb-4">Feel free to reach out !</p>
      <form className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg max-w-md w-full">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Write your message here..."
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Contact Number Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-lg">📞 +44 20 7946 0958</p>
        <p className="text-lg">📧 contact@avion.com</p>
      </div>
    </div>
  );
};

export default Contact;
