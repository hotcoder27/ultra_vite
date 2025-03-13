import { stabImg } from "../utils";

const SchoolFinder = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center px-6 py-16">
      <div className="text-center max-w-2xl">
        <h2 className="text-4xl font-bold text-green-500">Find Scholarships That Fit You</h2>
        <p className="text-lg text-gray-600 mt-3">
          Explore a wide range of scholarships tailored to your academic profile and financial needs.
        </p>
      </div>

      <div className="flex mt-8 w-full max-w-3xl relative">
        <input
          type="text"
          placeholder="Enter your program, school, or scholarship name"
          className="w-full p-4 text-lg rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 pr-32"
        />

        <button className="absolute right-1 top-1 bottom-1 bg-green-500 text-white px-6 py-3 text-lg font-semibold rounded-full hover:bg-green-600 transition">
          Find Scholarships        
        </button>
      </div>

      <div className="mt-10 w-full max-w-6xl px-4">
        <img
          src={stabImg}
          alt="Students walking on campus"
          className="rounded-lg shadow-lg w-full object-cover h-64"
        />
      </div>
    </div>
  );
};

export default SchoolFinder;
