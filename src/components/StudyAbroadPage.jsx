import { stablibImg } from "../utils";
import ServicesPage from "./StudyAbroadDetails";
import ScholarshipFinder from "./ScholarshipFinder";
import CGPACalculator from "./CGPACalculato";
import FreeResources from "./FreeResources";

const StudyAbroadPage = () => {
  return (
    <section className="mt-6 max-sm:mt-18">
      <div className="bg-white px-6 py-12">
        <div className="container mx-auto max-w-8xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <img
                src={stablibImg}
                alt="Study Abroad"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Text Column */}
            <div className="order-1 md:order-2 flex flex-col md:pl-8">
              <h1 className="text-4xl font-bold mb-4 text-green-500">Your Journey to Global Education Starts Here</h1>

              <p className="text-lg text-gray-600">
                We provide expert guidance for your study abroad aspirations, ensuring a seamless process from application
                to visa approval.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-4">
        <ServicesPage />
      </div>
      <ScholarshipFinder />
      <FreeResources />
    </section>
  );
};

export default StudyAbroadPage;
