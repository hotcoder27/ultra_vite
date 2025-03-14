import { stablibImg } from "../utils";
import ServicesPage from "./StudyAbroadDetails";
import ScholarshipFinder from "./ScholarshipFinder";
import CGPACalculator from "./CGPACalculato";
import FreeResources from "./FreeResources";

const StudyAbroadPage = () => {
  return (
    <section className="mt-6">
      <div className="bg-white flex flex-col items-center justify-center px-6 pt-6">
        <div className="max-w-5xl text-center">
          <img
            src={stablibImg}
            alt="Study Abroad"
            className="w-full h-80 object-cover rounded-2xl shadow-lg mb-4"
          />

          <h1 className="text-4xl font-bold my-4 xl:mt-12 text-green-500">
            Your Journey to Global Education Starts Here!
          </h1>

          <p className="text-lg mb-2 text-gray-600">
            We provide expert guidance for your study abroad aspirations, ensuring a seamless process from application to visa approval.
          </p>
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
