import { useState } from 'react';
import { logo } from "../utils";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto my-10 bg-white p-8 rounded-2xl shadow-lg overflow-hidden border border-gray-200" id='contact'>
      {/* Contact Form */}
      <div className="md:w-2/3 p-6">
        <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">Get In Touch With Our Team</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-lg focus:ring-green-500 focus:border-green-500 shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-lg focus:ring-green-500 focus:border-green-500 shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-lg focus:ring-green-500 focus:border-green-500 shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-2 p-3 w-full border rounded-lg focus:ring-green-500 focus:border-green-500 shadow-sm"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      
      {/* Image and Contact Info */}
      <div className="md:w-1/3 flex flex-col items-center justify-center bg-green-100 rounded-2xl p-6">
        <img src={logo} alt="Contact Us" className="rounded-lg shadow-md mb-6" />
        <h3 className="text-xl font-semibold text-green-700 mb-4">Contact Information</h3>
        <p className="text-gray-600"><strong>Whatsapp:</strong> +1 712-509-9002</p>
        <p className="text-gray-600"><strong>Phone:</strong> +234 814-849-6243</p>
        <p className="text-gray-600"><strong>Phone:</strong> +234 907-175-4008</p>
      </div>
    </div>
  );
}
