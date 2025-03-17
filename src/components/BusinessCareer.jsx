import { meetImg } from "../utils"
import ContactForm from "./Contact"

const BusinessHero = () => {
  return (
    <section>
      <div className="w-full h-[80vh] bg-white py-12 md:py-20 mt-16 mb-6">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase">BUSINESS:</h2>
                <h1 className="text-5xl  md:text-6xl lg:text-7xl font-serif leading-tight">
                  Enterprise Training & Consulting
                </h1>
                <div className="mt-2">
                  <span className="text-4xl md:text-5xl font-serif italic text-green-500">For You</span>
                </div>
              </div>

              <p className="text-lg md:text-xl text-gray-700 max-w-xl">
                We make every step of business development easier—from talent recruitment to training and consulting—so
                companies can achieve their strategic goals.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#"
                  className="flex items-center justify-between min-w-[200px] px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                >
                  <span>Get Started</span>
                  <span>↓</span>
                </a>
                
              </div>
            </div>

            <div className="h-140 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={meetImg}
                alt="Business professionals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-10 md:py-20 max-md:mt-95"> 
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-serif text-left mb-8">Why Choose Ultra Ade Tech?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-medium text-green-500 mb-4">Business-Centric Solutions</h3>
              <p className="text-gray-700">We provide cutting-edge strategies and digital solutions to drive business success and scalability.</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-green-500 mb-4">Enterprise Growth & Innovation</h3>
              <p className="text-gray-700">Our expertise helps enterprises leverage technology and market trends to stay ahead of the competition.</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-green-500 mb-4">Career Development & Upskilling</h3>
              <p className="text-gray-700">We offer tailored programs to help professionals enhance their skills and accelerate career growth.</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-green-500 mb-4">Global Business Network</h3>
              <p className="text-gray-700">With a strong global presence, we connect businesses and professionals with international opportunities and partnerships.</p>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />

    </section>
  )
}

export default BusinessHero
