import { Send } from "lucide-react";
import { surelearnImg, learn, eexam, sureImg, winImg, workImg, meetImg } from "../utils";
import { links } from "../constants";


const Hero = () => {
  return (
    <main className='min-h-screen'>
      <div className='container mx-auto px-4 py-16 md:py-24'>
        <div className="flex flex-col lg:flex-row items-start gap-12">

          { /* Text content */ }
          <div className="w-full lg:w-[40%] space-y-8 pt-16 lg:pt-24">
            <h1 className="text-4xl font-bold md:text-5xl text-green-500 lg:text-6xl tracking-tight leading-tight">Learn. Connect. Explore. Grow.</h1>
            <p className="text-lg text-muted-foreground">
              Your all-in-one platform for educational advancement - We empower people at every stage of their educational journey.
            </p>
            <p className="text-lg text-muted-foreground text-green-500 font-medium">
              Partner with Us. Explore Your Options
            </p>

            <div className="flex items-center">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`inline-flex h-11 items-center justify-center shadow-sm  p-4 text-xs font-medium text-gray-500 hover:bg-green-600 hover:text-white border-2 border-green-500 transition-all ${
                    index === 0 ? 'rounded-l-lg border-r-2' :
                    index === links.length - 1 ? 'rounded-r-lg border-l-0' :
                    'border-l-0'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
          </div>

          {/* Image Grid */}
          <div className="w-full lg:w-[60%] relative h-[600px]">
            <div className="absolute right-0 top-2 w-40 h-62 rounded-2xl z-10 overflow-hidden">
              <img src={surelearnImg} alt="us image" className="object-cover" />
            </div>

            <div className="absolute right-50 top-14 w-45 h-62 rounded-2xl z-20 overflow-hidden">
              <img src={learn} alt="us image" className="object-cover" />
            </div>

            <div className="absolute right-0 bottom-6 w-40 h-72 rounded-2xl z-30 overflow-hidden">
              <img src={meetImg} alt="us image" className="object-cover" />
            </div>

            <div className="absolute right-50 bottom-2 w-45 h-62 rounded-2xl z-40 overflow-hidden">
              <img src={winImg} alt="us image" className="object-cover" />
            </div>

            <div className="absolute right-100 bottom-33 w-60 h-72 rounded-2xl z-40 overflow-hidden">
              <img src={sureImg} alt="us image" className="object-cover" />
            </div>

            <div className="absolute right-100 top-100 w-60 h-72 rounded-2xl z-40 overflow-hidden">
              <Send size={60} color="white" />
            </div>
          </div>


        </div>

      </div>
    </main>
  )
}

export default Hero