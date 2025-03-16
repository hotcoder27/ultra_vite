import { stablibImg } from "../utils"
import ServicesPage from "./StudyAbroadDetails"
import ScholarshipFinder from "./ScholarshipFinder"
import CGPACalculator from "./CGPACalculato"
import FreeResources from "./FreeResources"

const StudyAbroadPage = () => {
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white px-6 py-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <img
                src={stablibImg || "/placeholder.svg"}
                alt="Study Abroad"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Text Column */}
            <div className="order-1 md:order-2 flex flex-col md:pl-8">
              <h1 className="text-4xl font-bold mb-4 text-green-500">Your Journey to Global Education Starts Here</h1>

              <p className="text-lg text-gray-600">
                We provide expert guidance for your study abroad aspirations, ensuring a seamless process from
                application to visa approval.
              </p>

              <div className="mt-6">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300">
                  Get Started
                </button>
                <button className="ml-4 border border-green-500 text-green-500 hover:bg-green-50 font-semibold py-2 px-6 rounded-lg transition-colors duration-300">
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Study Abroad Services</h2>
          <ServicesPage />
        </div>
      </div>

      {/* Scholarship Finder Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Find Scholarships</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Discover scholarships that match your profile and academic goals to make your study abroad journey more
            affordable.
          </p>
          <ScholarshipFinder />
        </div>
      </div>

      {/* CGPA Calculator Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">CGPA Calculator</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Calculate your CGPA and see how it translates to different international grading systems.
          </p>
          <CGPACalculator />
        </div>
      </div>

      {/* Free Resources Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Free Resources</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Access our library of free resources to help you prepare for your study abroad journey.
          </p>
          <FreeResources />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-green-500 text-white">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Global Education Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our expert counselors today and take the first step towards your international academic future.
          </p>
          <button className="bg-white text-green-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300">
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default StudyAbroadPage

