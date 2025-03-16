import { stablibImg, sureusImg } from "../utils"
import TravelAbroadServices from "./TravelAbroadServices"

const TravelAbroadPage = () => {
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white px-6 py-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <img
                src={sureusImg}
                alt="Study Abroad"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Text Column */}
            <div className="order-1 md:order-2 flex flex-col md:pl-8">
              <h1 className="text-4xl font-bold mb-4 text-green-500">Your Journey to USA Permanent Residence Start Here</h1>

              <p className="text-lg text-gray-600">
                We provide expert guidance for your Permanent Residency, ensuring a seamless process from
                application to approval.
              </p>

              <div className="mt-6">
                <button className="bg-green-500 hover:bg-green-600 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300">
                  Get Started
                </button>
                <button className="ml-4 border cursor-pointer border-green-500 text-green-500 hover:bg-green-50 font-semibold py-2 px-6 rounded-lg transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Study Abroad Details Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <TravelAbroadServices />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-green-500 text-white">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Check if you qualify for either EB1A or EBNIW</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our expert counselors today and take the first step towards your relocation dream.
          </p>
          <button className="bg-white text-green-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300">
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default TravelAbroadPage

