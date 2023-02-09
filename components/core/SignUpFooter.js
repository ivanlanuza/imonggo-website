import Image from "next/image";
import OrangeButton from "./OrangeButton";
import { CheckCircleIcon } from "@heroicons/react/solid";
import TopTiltWhite from "./TopTiltWhite";

//<div className="bg-[url('/images/home/hero_mid.jpg')] bg-cover ">

const SignUpFooter = () => (
  <div className="relative">
    <TopTiltWhite />

    <div className="h-[310px] lg:h-[445px] bg-gray-100 font-sans">
      <div className="grid grid-cols-2 place-content-center items-center">
        <div className="col-span-1 h-[310px] lg:h-[406px] lg:mt-10  grid place-content-start items-center bg-[url('/images/core/signupfooterlandscape.jpg')] bg-cover "></div>
        <div className="mt-12 lg:mt-0 col-span-1 pl-4 lg:pl-16">
          <div className="textorange font-bold text-xl lg:text-4xl pb-4">
            Easy-to-use POS
          </div>
          <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
              <CheckCircleIcon className="textblue h-4 lg:h-6" />
            </div>
            <div className="col-span-11 text-xs pl-2 lg:pl-0 lg:text-lg textblue">
              Transact customer orders faster.
            </div>
          </div>

          <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
              <CheckCircleIcon className="textblue h-4 lg:h-6" />
            </div>
            <div className="col-span-11 text-xs pl-2 lg:pl-0 lg:text-lg textblue">
              Have accurate inventory all the time.
            </div>
          </div>

          <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
              <CheckCircleIcon className="textblue h-4 lg:h-6" />
            </div>
            <div className="col-span-11 text-xs pl-2 lg:pl-0 lg:text-lg textblue">
              Access business reports anytime, anywhere.
            </div>
          </div>

          <div className="pt-2 mr-2 md:pt-4 lg:pt-8 md:w-2/5 h-12">
            <OrangeButton text="Free Sign-up" url="/signup-now" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SignUpFooter;
