import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { learntyImg, learnxyImg, learn } from "../utils"; // Import images

const services = [
  {
    id: "online-tutoring-basic",
    title: "Basic (Grade 1-JSS 3)",
    description: "Foundational tutoring in core subjects such as Mathematics, English, and Science.",
    image: learntyImg,
    url: "#"
  },

  {
    id: "online-tutoring-senior",
    title: "Senior Secondary (SS1-SS3)",
    description: "Advanced tutoring in subjects aligned with national and international curricula.",
    image: learnxyImg,
    url: "#"
  },

  {
    id: "k12-prep",
    title: "K-12 (SAT, WAEC/NECO, UTME, IELTS)",
    description: "Comprehensive preparation for standardized tests and national exams.",
    image: learn,
    url: "#"
  },

  {
    id: "graduate-prep",
    title: "Graduate & Beyond (GRE, GMAT, TOEFL, IELTS)",
    description: "Specialized coaching for graduate-level exams to equip students for international opportunities.",
    image: learntyImg,
    url: "#"
  },

  {
    id: "business-training",
    title: "Business & Enterprise Training & Consulting",
    description: "Talent recruitment, corporate training, consulting services, and software solutions development.",
    image: learnxyImg,
    url: "#"
  },

  {
    id: "travel-abroad",
    title: "Travel Abroad Consulting",
    description: "Assistance with visa applications, travel planning, and USA Permanent Resident Services (EB1/EB2 NIW).",
    image: learn,
    url: "#"
  },

  {
    id: "study-abroad",
    title: "Study Abroad Consulting",
    description: "Overseas admission application, Right Through Program (RTP), and students visa application support.",
    image: learntyImg,
    url: "#"
  }

];

export default function Services() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [expandedService, setExpandedService] = useState(null);

  const handleExpandClick = (serviceId) => {
    setExpandedService((prev) => (prev === serviceId ? null : serviceId));
  };

  return (
    <div className="bg-green-500 min-h-screen text-white p-6 md:p-10 flex flex-col md:flex-row items-start" id="services">
      {/* Left Section (Text) */}
      <div className="md:w-1/3 w-full md:pr-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Personalized Services for You</h2>
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id}>
              <div
                className="border-b border-white cursor-pointer py-4 flex items-center justify-between hover:text-white transition"
                onMouseEnter={() => setSelectedService(service)}
                onClick={() => handleExpandClick(service.id)}
              >
                <span className="text-lg md:text-xl font-medium">{service.title}</span>
                {expandedService === service.id ? (
                  <X className="w-5 h-5 md:hidden" onClick={() => setExpandedService(null)} />
                ) : (
                  <Plus className="w-5 h-5 md:hidden" />
                )}
              </div>

              {/* Mobile Description & Image */}
              <AnimatePresence>
                {expandedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-white text-black rounded-lg shadow-lg mt-2 md:hidden"
                  >
                    <img src={service.image} alt="" className="w-full h-48 object-cover rounded-lg mb-2" />
                    <p className="text-black text-sm md:text-base leading-relaxed">{service.description}</p>
                    <a href={service.url} className="mt-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 block text-center">Learn More</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section (Desktop Image + Description) */}
      <div className="hidden md:flex md:w-2/3 w-full flex-col md:flex-row items-center md:items-start md:justify-start mt-6 md:mt-0 bg-white p-6 rounded-lg shadow-lg">
        <motion.img
          key={selectedService.id}
          src={selectedService.image}
          alt={selectedService.title}
          className="w-3/5 max-h-[500px] object-cover rounded-lg shadow-lg mx-auto md:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        <div className="md:ml-8 mt-4 md:mt-0 max-w-lg text-green-500 text-lg leading-relaxed">
          {selectedService.description}
          <a href={selectedService.url} className="mt-4 block bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 text-center">Learn More</a>
        </div>

      </div>
    </div>
  );
}
