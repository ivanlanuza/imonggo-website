import Image from "next/image";
import BlueFeatureCheck from "./BlueFeatureCheck";
import BlueButton from "components/core/BlueButton";

const PremiumTier = ({}) => (
  <div className="relative">
    <div className="grid grid-cols-8 pb-12 place-content-center lg:mt-16 lg:px-12 xl:px-32 bg-gradient-to-t from-gray-300 via-white ">
      <div className="hidden md:block col-span-3">
        <Image src="/images/pricing/premium.png" width="648" height="501" />
      </div>
      <div className="col-span-8 md:col-span-5 px-4 lg:pl-16">
        <div className="grid grid-cols-2 items-center place-content-center">
          <div className="col-span-1">
            <div className="textblue font-black text-4xl lg:text-6xl">
              Premium
            </div>
            <div className="textorange text-xs lg:text-md font-semibold">
              Do more with Imonggo
            </div>
          </div>
          <div className="col-span-1 text-right">
            <div className="textblue font-black text-4xl lg:text-6xl">$30</div>
            <div className="textorange text-xs lg:text-md font-semibold">
              per branch per month
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3  mt-8">
          <div className="col-span-1">
            <BlueFeatureCheck text="Multiple Branches" />
            <BlueFeatureCheck text="Unlimited Users" />
            <BlueFeatureCheck text="Unlimited Products" />
            <BlueFeatureCheck text="Unlimited Transactions" />
          </div>
          <div className="col-span-1 text-right">
            <BlueFeatureCheck text="Customer Support" />
            <BlueFeatureCheck text="Built-in E-commerce Site" />
            <BlueFeatureCheck text="Credit Cards Processing" />
          </div>
          <div className="col-span-1">
            <BlueFeatureCheck text="Inventory Management" />
            <BlueFeatureCheck text="Sales Analysis" />
            <BlueFeatureCheck text="Chat Support" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 items-center place-content-center mt-8">
          <div className="col-span-2 hidden md:block"></div>
          <div className="col-span-1 text-right mt-0">
            <BlueButton
              text="Get the Plan"
              url="https://secure.imonggo.com/signup-now"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PremiumTier;
