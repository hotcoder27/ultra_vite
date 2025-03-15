import { useState, useEffect } from "react"
import { surelearnImg, sureImg, workImg, learntyImg } from "../utils"
import { links } from "../constants"

const Hero = () => {
  const [currentImageKey, setCurrentImageKey] = useState(links[0].label)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const linkImages = {
    "Travel Abroad": sureImg,
    "Study Abroad": surelearnImg,
    "Business & Career": workImg,
    "Online Tutoring and Test Prep": learntyImg,
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
            src={linkImages[currentImageKey] || learntyImg}
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
            <p className="text-lg text-white/80">
              Your all-in-one platform for educational advancement - We empower people at every stage of their
              educational journey.
            </p>
            <p className="text-lg text-green-400 font-medium">Partner with Us. Explore Your Options</p>

            <div className="flex items-center flex-wrap gap-2">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onMouseEnter={() => setCurrentImageKey(link.label)}
                  className={`inline-flex h-11 px-5 items-center justify-center shadow-sm text-sm font-medium transition-all rounded-md
                    ${
                      currentImageKey === link.label
                        ? "bg-green-600 text-white border-2 border-green-500"
                        : "text-white hover:bg-green-600 hover:text-white border-2 border-green-500/70"
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

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

