import BottomTiltWhite from "components/core/BottomTiltWhite";
import Link from "next/link";

const HeroPricing = ({}) => (
  <div className="relative font-sans">
    <div className="bg-[url('/images/pricing/heropricing.png')] bg-cover ">
      <div className="h-max ">
        <div className="relative pl-24 py-16 pr-4 md:py-32 lg:py-36 lg:w-3/8 w-2/5 xl:h-[640px] h-[340px] md:h-[480px]">
          <div className="text-left font-bold lg:text-6xl text-xl md:text-4xl lg:tracking-wide tracking-tight">
            <span className=" textblue ">
              Choose a plan that's right for you
            </span>
          </div>
          <div className="lg:mt-8 mt-2 text-left ">
            <span className="mt-6 max-w-lg mx-auto text-left md:text-xl text-xs text-white sm:max-w-3xl bg-opacity-60 leading-tight font-base py-1">
              Sign up now for FREE or subscribe to Premium for only $30/month or
              $330/year.
            </span>
          </div>
          <Link href="/signup-now">
            <div className="flex-shrink-0">
              <button
                type="button"
                className="mt-6 relative font-sans inline-flex items-center shadow-sm  bgorange text-white rounded-md border-orange-600 border-2 px-8 py-3      hover:border-white text-md  cursor-pointer"
              >
                <span>Sign Up for Free!</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
    <BottomTiltWhite />
  </div>
);

export default HeroPricing;
