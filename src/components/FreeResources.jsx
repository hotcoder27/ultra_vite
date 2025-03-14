const FreeResources = () => {
    return (
      <div className="bg-white flex flex-col items-center justify-center px-6 py-8 sm:mt-[-30px]">
        <div className="text-center max-w-2xl">
          <h2 className="text-4xl font-bold text-green-500">Our Free Resources</h2>
        </div>
  
        <div className="flex mt-8 w-full max-w-6xl gap-6 justify-center max-md:flex-col">
          <a href="#" className="border hover:border-green-400 bg-white hover:bg-green-100 rounded-lg p-6 text-center w-1/3 max-md:w-full shadow-sm hover:shadow-md block">
            <h3 className="text-xl font-semibold text-green-500">CGPA Calculator</h3>
            <p className="text-gray-600 mt-2">Calculate your CGPA and track your academic progress!</p>
          </a>
          
          <a href="#" className="border hover:border-green-400 bg-white hover:bg-green-100 rounded-lg p-6 text-center w-1/3 max-md:w-full shadow-sm hover:shadow-md block">
            <h3 className="text-xl font-semibold text-green-500">Admission Tips</h3>
            <p className="text-gray-600 mt-2">Get expert advice on getting into the best school for you</p>
          </a>
          
          <a href="#" className="border hover:border-green-400 bg-white hover:bg-green-100 rounded-lg p-6 text-center max-md:w-full w-1/3 shadow-sm hover:shadow-md block">
            <h3 className="text-xl font-semibold text-green-500">School Tips</h3>
            <p className="text-gray-600 mt-2">Get insights on school life, rankings & academic success</p>
          </a>
        </div>
      </div>
    );
  };
  
  export default FreeResources;  