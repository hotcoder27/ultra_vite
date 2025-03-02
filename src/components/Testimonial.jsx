import { testimonials } from "../constants"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gradient-to-r from-green-100 to-green-50 p-8 py-16 rounded-2xl shadow-lg relative">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-green-500 text-6xl mb-6">
          <Quote />
        </div>
        <blockquote className="text-xl md:text-2xl font-semibold text-gray-800 mb-8">
          <p>{testimonial.content}</p>
        </blockquote>
        <div className="flex items-center justify-center mb-6">
          <testimonial.avatarUrl aria-hidden="true" className="size-12 text-green-500" />
          <div className="ml-4 text-left">
            <p className="font-semibold text-gray-900">{testimonial.author}</p>
            <p className="text-gray-600">{testimonial.role}</p>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={prevSlide}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-green-500" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-green-500" />
          </button>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
      </div>
    </section>
  );
}

export default Testimonial