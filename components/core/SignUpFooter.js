import Image from "next/image";
import OrangeButton from "./OrangeButton";
import { CheckCircleIcon } from "@heroicons/react/solid";
import TopTiltWhite from "./TopTiltWhite";

//<div className="bg-[url('/images/home/hero_mid.jpg')] bg-cover ">

const SignUpFooter = () => (
  <div className="relative">
    <TopTiltWhite />

    <div className="h-[445px] bg-gray-100 font-sans">
      <div className="grid grid-cols-2 place-content-center items-center">
        <div className="col-span-1 h-[406px] mt-10  grid place-content-start items-center bg-[url('/images/core/signupfooterlandscape.jpg')] bg-cover "></div>
        <div className="col-span-1 pl-16">
          <div className="textorange font-bold text-4xl pb-4">
            Easy-to-use POS
          </div>
          <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
              <CheckCircleIcon className="textblue h-6" />
            </div>
            <div className="col-span-11 textblue">
              Transact customer orders faster.
            </div>
          </div>

          <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
              <CheckCircleIcon className="textblue h-6" />
            </div>
            <div className="col-span-11 textblue">
              Have accurate inventory all the time.
            </div>
          </div>

          <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
              <CheckCircleIcon className="textblue h-6" />
            </div>
            <div className="col-span-11 textblue">
              Access business reports anytime, anywhere.
            </div>
          </div>

          <div className="pt-8 w-2/5 h-12">
            <OrangeButton text="Sign-up now for FREE" url="/signup-now" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SignUpFooter;
