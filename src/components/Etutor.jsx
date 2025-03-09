import { studentImg } from '../utils';
import Courses from './Courses';
import WhyChooseUs from './WhyChooseUs';
import HireTutors from './HireTutor';
import MeetOurTeam from './MeetOurTeam';

export default function Etutor() {
  return (
    <section>
      <div className="bg-white py-6 mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-5xl font-bold leading-tight text-green-500">
            Every Learner. Every Stage.
          </h2>
          <p className="text-lg text-gray-800 font-medium">
            Expert tutoring for all academic levels:
          </p>
          <ul className="mt-4 space-y-3 text-lg text-gray-700">
            <li><span className="font-semibold">Basic (Grade 1 - JSS 3):</span> Strong foundation in core subjects.</li>
            <li><span className="font-semibold">Senior Secondary (SS1 - SS3):</span> Advanced subject coaching.</li>
            <li><span className="font-semibold">K-12 & Exams:</span> SAT, WAEC, UTME, IELTS prep.</li>
            <li><span className="font-semibold">Graduate & Beyond:</span> GRE, GMAT, TOEFL coaching.</li>
          </ul>
        </div>
        
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-end">
          <img
            src={studentImg}
            alt="Student studying"
            className="rounded-2xl shadow-xl max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
      <Courses />
      <WhyChooseUs />
      <HireTutors />
      <MeetOurTeam />
    </section>
  );
}
