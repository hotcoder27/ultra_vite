import { eb1aImg, eb2niwImg, sureusImg } from "../utils";

const usaPermanentResidentServices = [
  {
    id: 1,
    name: "EB1A Green Card Application Assistance",
    imageSrc: eb1aImg,
    imageAlt: "EB1A Service",
    price: "$00000",
  },
  {
    id: 2,
    name: "EB2-NIW Green Card Application Assistance",
    imageSrc: eb2niwImg,
    imageAlt: "EB2-NIW Service",
    price: "$0000",
  },
];

const TravelAbroadServices = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center px-6 sm:mt-[-37px] py-3">
      <div className="w-full max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-green-500 text-center">Explore Your Options</h2>
        
        <div className="flex gap-6 justify-center items-center max-sm:flex py-6">
          {usaPermanentResidentServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-green-500 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                alt={service.imageAlt}
                src={service.imageSrc}
                className="w-64 h-64 rounded-md object-cover group-hover:opacity-75"
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

export default TravelAbroadServices;
