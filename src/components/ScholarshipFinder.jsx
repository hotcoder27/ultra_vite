import { stabImg } from "../utils";

const ScholarshipFinder = () => {
  return (
    <div className="bg-cream min-h-[300px] flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-black">Find Scholarships That Fit You</h2>
        <p className="text-lg text-gray-600 mt-2">
          Explore a wide range of scholarships tailored to your academic profile and financial needs.
        </p>
      </div>

      <div className="flex mt-6 w-full max-w-lg">
        <input
          type="text"
          placeholder="Enter your study field or country"
          className="w-full p-3 rounded-l-full border border-gray-300 focus:outline-none"
        />
        <button className="bg-green-500 text-white px-6 py-3 rounded-r-full font-semibold hover:bg-green-600">
          Find Scholarships
        </button>
      </div>

      <div className="mt-6 w-full max-w-4xl">
        <img
          src={stabImg}
          alt="Scholarship Finder"
          className="rounded-lg shadow-md w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ScholarshipFinder;
