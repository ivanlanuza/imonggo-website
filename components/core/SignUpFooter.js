import Image from "next/image";
import OrangeButton from "./OrangeButton";
import { CheckCircleIcon } from "@heroicons/react/solid";

const SignUpFooter = () => (
  <div className="h-[480px] bg-gray-100 font-sans">
    <div className="grid grid-cols-2 place-content-center items-center">
      <div className="col-span-1 grid place-content-end items-center pt-6">
        <Image
          src="/images/core/signupfooter.png"
          height="432"
          width="300"
        ></Image>
      </div>
      <div className="col-span-1 pl-4">
        <div className="textorange font-bold text-4xl pb-4">
          Easy-to-use-POS
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
);

export default SignUpFooter;
