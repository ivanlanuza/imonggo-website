import BottomTiltWhite from "components/core/BottomTiltWhite";
import Link from "next/link";

const HeroFeatures = ({}) => (
  <div className="relative font-sans">
    <div className="bg-[url('/images/features/herofeatures.png')] bg-cover ">
      <div className="h-max ">
        <div className="relative pl-4 lg:pl-24 py-6 md:py-16 lg:py-20 w-4/5 lg:w-3/8  xl:h-[600px] h-[280px] md:h-[480px]">
          <div className="text-left font-bold lg:text-6xl text-xl md:text-4xl lg:tracking-wide tracking-tight">
            <span className=" text-white ">POS for family businesses</span>
          </div>
          <div className="lg:mt-8 mt-2 text-left lg:w-3/4">
            <span className="mt-6 max-w-lg mx-auto text-left md:text-xl text-xs text-white sm:max-w-3xl bg-opacity-60 leading-tight font-base py-1">
              Sell on-site or online, track inventory, access real-time reports,
              and check your business performance - all with Imonggo.
            </span>
          </div>
          <div className="flex">
            <Link href="https://secure.imonggo.com/signup-now">
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

export default HeroFeatures;
