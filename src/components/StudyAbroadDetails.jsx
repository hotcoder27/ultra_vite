import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { livestabImg, interImg, stabImg } from "../utils";

const services = [
  {
    id: 1,
    name: "Overseas Admission Application",
    description: "Comprehensive guidance on university selection, application preparation, and submission.",
    highlights: [
      "Personalized university recommendations",
      "Application document review",
      "Submission tracking & updates",
    ],
    price: "$350",
    image: stabImg,
    paymentLink: "#",
  },
  {
    id: 2,
    name: "Right Through Program (RTP)",
    description: "End-to-end support from application to school acceptance for a seamless transition.",
    highlights: [
      "Dedicated consultant for your journey",
      "Application and pre-departure guidance",
      "Ongoing student support abroad",
    ],
    price: "$450",
    image: livestabImg,
    paymentLink: "#",
  },
  {
    id: 3,
    name: "Students Visa Application Support",
    description: "Expert assistance with visa documentation, submission, and interview preparation.",
    highlights: [
      "Visa form completion & submission",
      "Mock interview preparation",
      "Expedited processing support",
    ],
    price: "$200",
    image: interImg,
    paymentLink: "#",
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white shadow-xl rounded-2xl">
      <h2 className="text-4xl font-bold text-green-500 text-center mb-10">Explore Your Options</h2>

      <RadioGroup value={selectedService} onChange={setSelectedService} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <RadioGroup.Option
            key={service.id}
            value={service}
            className={({ checked }) =>
              `relative flex flex-col items-center gap-6 p-6 border rounded-2xl cursor-pointer transition-all shadow-sm ${
                checked ? "bg-green-100 border-green-500 shadow-md" : "bg-white border-gray-300"
              }`
            }
          >
            <img src={service.image} alt={service.name} className="w-48 h-36 object-cover rounded-lg" />
            <div className="text-center">
              <h3 className="text-2xl text-green-500 font-semibold">{service.name}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <ul className="mt-3 space-y-2 text-left">
                {service.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <p className="text-xl font-bold text-green-600 mt-4">Price: {service.price}</p>
              <a
                href={service.paymentLink}
                className="mt-4 inline-block bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition"
              >
                Sign Up Now
              </a>
            </div>
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </div>
  );
}
