import Image from "next/image";
import OrangeFeatureCheck from "./OrangeFeatureCheck";
import BottomTiltWhite from "components/core/BottomTiltWhite";
import OrangeButton from "components/core/OrangeButton";

const FreeTier = ({}) => (
  <div className="relative">
    <div className="grid grid-cols-8 pb-24 place-content-center lg:mt-16 lg:px-12 xl:px-32 bg-gradient-to-t from-orange-200 via-white ">
      <div className="hidden md:block col-span-3">
        <Image src="/images/pricing/free.png" width="609" height="471" />
      </div>
      <div className="col-span-8 md:col-span-5 px-4 lg:pl-16">
        <div className="grid grid-cols-2 items-center place-content-center">
          <div className="col-span-1">
            <div className="textorange font-black text-4xl lg:text-6xl">
              Free
            </div>
            <div className="textblue text-xs lg:text-md font-semibold">
              No Credit Card Needed!
            </div>
          </div>
          <div className="col-span-1 text-right">
            <div className="textorange font-black text-4xl lg:text-6xl">$0</div>
            <div className="textblue  text-xs lg:text-md  font-semibold">
              Forever
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3  mt-8">
          <div className="col-span-1">
            <OrangeFeatureCheck text="500 Products" />
            <OrangeFeatureCheck text="500 Invoices per month" />
          </div>
          <div className="col-span-1">
            <OrangeFeatureCheck text="Inventory Management" />
            <OrangeFeatureCheck text="Sales Analysis" />
          </div>
          <div className="col-span-1 text-right">
            <OrangeFeatureCheck text="1 Branch" />
            <OrangeFeatureCheck text="1 User" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 items-center place-content-center mt-8">
          <div className="col-span-2 hidden md:block"></div>
          <div className="col-span-1 text-right mt-0">
            <OrangeButton
              text="FREE Sign-up"
              url="https://secure.imonggo.com/signup-now"
            />
          </div>
        </div>
      </div>
    </div>
    <BottomTiltWhite />
  </div>
);

export default FreeTier;
