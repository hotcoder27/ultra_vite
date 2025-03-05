import { useState } from "react";
import { surelearnImg, learn, eexam, sureImg, winImg, workImg, meetImg, learnbkImg, learntyImg } from "../utils";
import { links } from "../constants";

const Hero = () => {
  const [hoveredImage, setHoveredImage] = useState(learntyImg);

  const linkImages = {
    "Travel Abroad": sureImg,
    "Study Abroad": surelearnImg,
    "Business & Career": workImg,
    "Online Tutoring and Test Prep": learntyImg,
  };

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          
          <div className="w-full lg:w-[40%] space-y-8 pt-16 lg:pt-24">
            <h1 className="text-4xl font-bold md:text-5xl text-green-500 lg:text-6xl tracking-tight leading-tight">
              Learn. Connect. Explore. Grow.
            </h1>
            <p className="text-lg text-muted-foreground">
              Your all-in-one platform for educational advancement - We empower people at every stage of their educational journey.
            </p>
            <p className="text-lg text-muted-foreground text-green-500 font-medium">
              Partner with Us. Explore Your Options
            </p>

            <div className="flex items-center flex-wrap gap-2">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onMouseEnter={() => setHoveredImage(linkImages[link.label] || learntyImg)}
                  className="inline-flex h-11 px-5 items-center justify-center shadow-sm text-xs font-medium text-gray-500 hover:bg-green-600 hover:text-white border-2 border-green-500 transition-all rounded-md"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[50%] h-[500px] overflow-hidden rounded-2xl shadow-lg lg:mt-6">
            <img src={hoveredImage} alt="hover image" className="object-cover w-full h-full transition-all duration-500 ease-in-out" />
          </div>

        </div>
      </div>
    </main>
  );
};

export default Hero;
