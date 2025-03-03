import { learnxyImg } from '../utils';
import Courses from './Courses';
import WhyChooseUs from './WhyChooseUs';
import HireTutors from './HireTutor';
import MeetOurTeam from './MeetOurTeam';

export default function Etutor() {
  return (
    <section>
      <div className="bg-green-500 text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center">
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-4xl font-semibold sm:text-5xl mt-3 pt-12 lg:text-6xl text-pretty">Every Learner. Every Stage.</p>
            <p className="mt-4 text-lg text-white">
                Our tailored tutoring services cater to students at every level:
            </p>
            <ul className="mt-4 space-y-3 text-lg text-white">
                <li><span className="text-white font-semibold">Basic (Grade 1 - JSS 3):</span> Foundational tutoring in core subjects such as Mathematics, English, and Science to build strong academic skills.</li>
                <li><span className="text-white font-semibold">Senior Secondary (SS1 - SS3):</span> Advanced tutoring in subjects aligned with national and international curricula.</li>
                <li><span className="text-white font-semibold">K-12 Exams (SAT, WAEC/NECO, UTME, IELTS):</span> Comprehensive preparation for standardized tests and national exams.</li>
                <li><span className="text-white font-semibold">Graduate & Beyond (GRE, GMAT, TOEFL, IELTS):</span> Specialized coaching for graduate-level exams, equipping students for international academic opportunities.</li>
            </ul>
            <div className="mt-6">
                <button className="bg-white text-green-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer">
                Book A Trial Class
                </button>
            </div>
            </div>
            
            {/* Image Section */}
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <img
                src={learnxyImg}
                alt="Students studying together"
                className="rounded-lg shadow-lg max-w-full h-auto"
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
