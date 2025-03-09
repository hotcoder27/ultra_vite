import { AcademicCapIcon, AdjustmentsHorizontalIcon, ChartBarIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function WhyChooseUs() {
  const methodsAndStrategies = [
    {
      title: "Personalized Learning Plans",
      description:
        "We tailor tutoring sessions to meet the unique needs of every student, ensuring a personalized approach to academic success.",
      icon: AdjustmentsHorizontalIcon,
    },
    {
      title: "Data-Driven Progress Tracking",
      description:
        "Our advanced analytics and regular assessments help track students' performance, enabling continuous improvement.",
      icon: ChartBarIcon,
    },
    {
      title: "Experienced and Passionate Tutors",
      description:
        "Our team consists of subject-matter experts who are committed to mentoring and inspiring students at every step.",
      icon: UserGroupIcon,
    },
    {
      title: "Comprehensive Curriculum Coverage",
      description:
        "Our programs are aligned with national and international standards, ensuring students excel in academics and standardized exams.",
      icon: AcademicCapIcon,
    },
  ];

  return (
    <section className="bg-white py-8 mt-4 rounded-lg shadow-md border-y-2 border-lime-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-500">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
          {methodsAndStrategies.map((item, index) => (
            <div key={index} className="text-center">
              <item.icon className="h-16 w-16 mx-auto text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-green-500">
                {item.title}
              </h3>
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
