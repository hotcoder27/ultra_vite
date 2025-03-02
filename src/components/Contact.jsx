import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto my-6" id='contact'>
      <h2 className="text-2xl font-semibold text-green-500 mb-6 text-center">Get In Touch With Our Team</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-green-500">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-green-500">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-green-500">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="mt-1 p-2 w-full border rounded-md focus:ring-green-500 focus:border-green-500"
          required
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}