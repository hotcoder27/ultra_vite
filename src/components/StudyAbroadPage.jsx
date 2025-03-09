import React from "react";
import { stabImg, livestabImg, stablibImg } from "../utils";

const StudyAbroadPage = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl text-white text-center py-6 lg:py-10">
        <img
          src={stablibImg}
          alt="Study Abroad"
          className="w-full h-80 object-cover rounded-2xl shadow-lg mb-6"
        />
        <h1 className="text-4xl font-bold mb-4 text-green-500">Your Journey to Global Education Starts Here!</h1>
        <p className="text-lg mb-6 text-gray-600">
          We provide expert guidance for your study abroad aspirations, ensuring a seamless process from application to visa approval.
        </p>
      </div>
    </div>
  );
};

export default StudyAbroadPage;
