import { surelearnImg, learn, eexam, sureImg, winImg, workImg, meetImg } from "../utils";

export default function MeetOurTeam() {
  const teamImages = [surelearnImg, learn, eexam, sureImg, winImg, workImg, meetImg];

  return (
    <section className="text-center py-10 bg-white">
      <h2 className="text-3xl font-bold text-green-500">
        Meet Our Passionate Team
      </h2>
      <p className="mt-4 text-lg text-gray-700">
        Our dedicated team is on a mission to provide world-class education and test prep support.
      </p>

      {/* Team Images Grid */}
      <div className="mt-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 justify-center">
        {teamImages.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Team member ${index + 1}`} 
            className="w-24 h-24 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>

      {/* CTA Button */}
      <a href="/">
        <button className="mt-6 bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition-all">
            Meet Our Team
        </button>
      </a>
    </section>
  );
}
