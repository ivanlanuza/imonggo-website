import BottomTiltWhite from "components/core/BottomTiltWhite";
import Link from "next/link";

const HeroPricing = ({}) => (
  <div className="relative font-sans">
    <div className="bg-[url('/images/pricing/heropricing.png')] bg-cover bg-blend-overlay bg-white bg-opacity-60 md:bg-opacity-20">
      <div className="h-max ">
        <div className="relative pl-4 lg:pl-24 py-6 md:py-16 lg:py-20 w-4/5 xl:w-2/4  xl:h-[600px] h-[280px] md:h-[480px]">
          <div className="text-left font-bold lg:text-6xl text-xl md:text-4xl lg:tracking-wide tracking-tight">
            <span className=" textblue ">
              Choose a plan that&apos;s right for you
            </span>
          </div>
          <div className="lg:mt-8 mt-2 text-left xl:w-2/4">
            <span className="mt-6 max-w-lg mx-auto text-left md:text-xl text-xs textblue sm:max-w-3xl bg-opacity-60 leading-tight font-base py-1">
              Sign up now for FREE or subscribe to Premium for only $30/month or
              $330/year.
            </span>
          </div>
          <div className="flex">
            <Link href="https://secure.imonggo.com/signup">
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="mt-3 lg:mt-6 relative font-sans inline-flex items-center shadow-sm  bgorange text-white rounded-md border-orange-600 border-2 px-4 lg:px-8 py-2 lg:py-3      hover:border-white text-xs lg:text-lg  cursor-pointer"
                >
                  <span>Sign Up for Free!</span>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <BottomTiltWhite />
  </div>
);

export default HeroPricing;
