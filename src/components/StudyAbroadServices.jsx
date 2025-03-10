import { stabImg, livestabImg, interImg } from "../utils";

const services = [
  {
    id: 1,
    name: "Overseas Admission Application",
    imageSrc: stabImg,
    imageAlt: "Study Abroad Consulting",
    price: "$350",
  },
  {
    id: 2,
    name: "Right Through Program (RTP)",
    imageSrc: livestabImg,
    imageAlt: "RTP Program",
    price: "$450",
  },
  {
    id: 3,
    name: "Student Visa Application Support",
    imageSrc: interImg,
    imageAlt: "Visa Application Support",
    price: "$200",
  },
];

const StudyAbroadServices = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-green-600 text-center">Our Services</h2>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-green-500 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                alt={service.imageAlt}
                src={service.imageSrc}
                className="aspect-square w-full rounded-md object-cover group-hover:opacity-75"
              />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-white">{service.name}</h3>
                <p className="text-sm text-gray-200">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadServices;
