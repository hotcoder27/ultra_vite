import { useState } from 'react';

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

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="flex flex-col md:flex-row max-w-4xl mx-auto my-6 bg-white p-8 rounded-lg shadow-md" id='contact'>
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="md:w-2/3 p-4">
        <h2 className="text-2xl font-semibold text-green-500 mb-6 text-center">Get In Touch With Our Team</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-green-500">Name</label>
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
          <label htmlFor="email" className="block text-sm font-medium text-green-500">Email</label>
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

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-green-500">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-green-500">Message</label>
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

      {/* Contact Information */}
      <div className="md:w-1/3 p-4 bg-green-100 rounded-lg mt-6 md:mt-0">
        <h3 className="text-xl font-semibold text-green-500 mb-4">Contact Information</h3>
        <p className="text-gray-500"><strong>Whatsapp:</strong> +1 712-509-9002</p>
        <p className="text-gray-500"><strong>Phone:</strong> +234 814-849-6243</p>
        <p className="text-gray-500"><strong>Phone:</strong> +234 907-175-4008</p>
        <p className="text-gray-500"><strong>Email:</strong> info@ultraadetech.com</p>
      </div>
    </div>
  );
}
