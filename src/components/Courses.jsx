export default function Courses() {
    const courses = [
      { name: "Basic (Grade 1-JSS 3)", link: "/" },
      { name: "Senior Secondary (SS1-SS3)", link: "/" },
      { name: "K-12 (SAT, WAEC/NECO, UTME, IELTS)", link: "/" },
      { name: "Graduate & Beyond (GRE, GMAT, TOEFL, IELTS)", link: "/" },
    ];
  
    return (
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-green-500">Featured Tutoring Programs</h2>
          <p className="mt-4 text-gray-600">
            Tailored programs to meet the needs of every student at every academic stage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {courses.map((course, index) => (
              <a
                key={index}
                href={course.link}
                className="border rounded-lg p-6 text-center hover:bg-green-500 hover:border-white transition-all group"
              >
                <p className="font-medium text-gray-800 group-hover:text-white transition-all">
                  {course.name}
                </p>
              </a>
            ))}
          </div>
          <button
            className="mt-8 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-500 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    );
  }
  