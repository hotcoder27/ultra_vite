import { learntopviewImg, studyictImg, visausaImg, businessmainImg } from "../utils";

const missions = [
  {
    title: "Travel Abroad",
    description: "Assisting with USA permanent resident services, visa applications, travel planning, and accommodation arrangements for international travel.",
    image: visausaImg,
    link: "/travel-abroad",
  },
  {
    title: "Study Abroad",
    description: "Supporting students with overseas admission applications, visa application support, and guidance through programs like the Right Through Program (RTP).",
    image: studyictImg,
    link: "/study-abroad",
  },
  {
    title: "Online Tutoring and Test Prep",
    description: "Offering foundational and advanced tutoring across all educational levels, including preparation for standardized tests and graduate-level exams.",
    image: learntopviewImg,
    link: "/tutoring",
  },
  {
    title: "Business & Career",
    description: "Providing talent recruitment, corporate training, consulting services, and customized software solutions to enhance business growth and efficiency.",
    image: businessmainImg,
    link: "/business-career",
  },
];

export default function MissionPage() {
  return (
    <div className="relative min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8 shadow-md">
      <div className="absolute right-0 top-0 -z-10">
        <div className="h-64 w-64 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <h1 className="mb-16 text-4xl font-serif font-medium text-green-500 sm:text-5xl">Our Mission</h1>

        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {missions.map((mission, index) => (
            <div 
                key={index} 
                className={`flex flex-col space-y-4 ${index % 2 === 1 ? 'md:mt-12' : ''}`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-500 rounded-lg transform rotate-1"></div>
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="relative z-10 rounded-lg object-cover w-full aspect-[4/3]"
                />
              </div>
              <p className="text-lg text-gray-500">{mission.description}</p>
              <a href={mission.link} className="text-white bg-green-500 hover:bg-green-600 font-semibold p-2 rounded-full text-center">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
