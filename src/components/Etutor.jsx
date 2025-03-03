import { learnxyImg } from '../utils';
import { features } from '../constants';

export default function Etutor() {
  return (
    <div className="bg-white mt-16 py-6 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-1 text-4xl max-sm:text-2xl font-semibold tracking-tight text-pretty text-green-500 sm:text-5xl lg:text-balance">
            Every Learner, Every Stage
          </p>
          <p className="mt-2 text-lg/8 text-gray-600">
            Providing personalized tutoring and test preparation for all educational levels.
          </p>
          <img
            src={learnxyImg}
            alt="Learning Illustration"
            className="mx-auto mt-2 rounded-lg shadow-lg"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          
        </div>
        <div className="mx-auto mt-6 max-w-2xl sm:mt-14 lg:mt-18 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-green-500">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex justify-center">
            <button className="bg-green-500 text-white px-8 py-5 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors">
              Book a Trial Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
