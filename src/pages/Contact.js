import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-4 ">
<div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-semibold mb-6 text-center">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          If you have any questions, suggestions, or feedback, feel free to reach out to us.
        </p>
      </div>

      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-800 dark:text-gray-100"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-800 dark:text-gray-100"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
            placeholder="Your email"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-800 dark:text-gray-100"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
            placeholder="Your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
