import { useState, useEffect } from "react"
import { relocationImg, studygroupImg, businessopenImg, rlpImg } from "../utils"
import { links } from "../constants"

const Hero = () => {
  const [currentImageKey, setCurrentImageKey] = useState(links[0].label)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const linkImages = {
    "Travel Abroad": relocationImg,
    "Study Abroad": studygroupImg,
    "Business & Career": businessopenImg,
    "Online Tutoring and Test Prep": rlpImg,
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % links.length
        setCurrentImageKey(links[newIndex].label)
        return newIndex
      })
    }, 5000) 

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={linkImages[currentImageKey] || rlpImg}
            alt={currentImageKey}
            className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl space-y-8 text-white">
            <h1 className="text-4xl font-bold md:text-5xl text-white lg:text-6xl tracking-tight leading-tight">
              Learn. Connect. Explore. Grow.
            </h1>
            <p className="text-lg text-green-500">
              Your all-in-one platform for educational advancement - We empower people at every stage of their
              educational journey.
            </p>
              <div className="flex space-x-2 pt-4">
                {links.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index)
                      setCurrentImageKey(links[index].label)
                    }}
                    className={`w-3 h-3 rounded-full ${currentImageIndex === index ? "bg-green-500" : "bg-white/50"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero

