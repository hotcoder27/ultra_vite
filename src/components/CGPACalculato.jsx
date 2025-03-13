import { useState } from "react";

const CGPACalculator = () => {
  const [courses, setCourses] = useState([{ id: 1, code: "", units: "", grade: "" }]);

  const addCourse = () => {
    setCourses([...courses, { id: courses.length + 1, code: "", units: "", grade: "" }]);
  };

  const removeCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center px-6 py-8">
      <div className="text-center max-w-2xl">
        <h2 className="text-4xl font-bold text-gray-900">CGPA Calculator</h2>
        <p className="text-lg text-gray-600 mt-3">
          Calculate your CGPA with our easy-to-use tool provided by Ultra Ade Tech.
        </p>
      </div>

      <div className="mt-8 w-full max-w-lg">
        <label className="block text-lg font-semibold text-gray-700">Select Grading System:</label>
        <select className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400">
          <option>4.0 Scale</option>
        </select>
      </div>

      <div className="mt-6 w-full max-w-3xl">
        <table className="w-full border-collapse border border-gray-300 text-lg text-gray-700">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3">Course Code</th>
              <th className="border p-3">Credit Units</th>
              <th className="border p-3">Grade</th>
              <th className="border p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="border p-3">
                  <input type="text" className="w-full p-2 border rounded-lg" placeholder="Course Code" />
                </td>
                <td className="border p-3">
                  <input type="number" className="w-full p-2 border rounded-lg" placeholder="Credit Units" />
                </td>
                <td className="border p-3">
                  <select className="w-full p-2 border rounded-lg">
                    <option>Select</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>F</option>
                  </select>
                </td>
                <td className="border p-3 text-center">
                  <button onClick={() => removeCourse(course.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={addCourse} className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600">
        Add Course
      </button>
      
      <button className="mt-6 bg-green-500 text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-green-600 transition">
        Calculate CGPA
      </button>
    </div>
  );
};

export default CGPACalculator;
