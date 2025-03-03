import { learnxyImg } from '../utils';

export default function HireTutors() {
  return (
    <section className="relative bg-green-500 text-white py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50" 
        style={{ backgroundImage: `url(${learnxyImg})` }} 
      ></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">
          Join Our Team of Expert Tutors!
        </h2>
        <p className="mt-4 text-lg">
          Empower students and make an impact! We’re looking for passionate educators to provide high-quality tutoring across all academic levels.
        </p>
        <button className="mt-6 bg-white text-green-600 font-semibold py-3 px-6 rounded-lg hover:bg-green-600 hover:text-white transition-all">
          Apply Now
        </button>
      </div>
    </section>
  );
}
