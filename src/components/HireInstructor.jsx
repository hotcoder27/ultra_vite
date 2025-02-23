import { learn, learntyImg, learnbkImg, workImg, meetImg, surelearnImg } from "../utils";

export default function HireInstructors() {
    return (
        <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-green-500 sm:text-6xl">
                Join Our Team as an Instructor
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Share your expertise and inspire the next generation of learners. Join our dynamic team and make a difference today.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                  <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src={learnbkImg} alt="Learning" className="size-full object-cover" />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src={learn} alt="Learn" className="size-full object-cover" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src={workImg} alt="Instructor" className="size-full object-cover" />
                        </div>
                        
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src={meetImg} alt="Learn" className="size-full object-cover" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src={learntyImg} alt="Instructor" className="size-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <a href="#" className="inline-block rounded-full border border-transparent bg-green-500 px-8 py-3 text-center font-medium text-white hover:bg-green-600">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  