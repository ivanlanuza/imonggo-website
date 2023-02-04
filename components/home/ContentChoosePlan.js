import OrangeButton from "components/core/OrangeButton";
import FeatureCheck from "./FeatureCheck";

const ContentChoosePlan = ({}) => (
  <div className="block items-center font-sans text-center textblue mt-16 pb-16 bg-gradient-to-t from-orange-200 via-white">
    <div className="text-4xl font-bold textblue">Choose your Plan</div>
    <div className="grid grid-cols-3 gap-4 lg:mt-16 lg:mx-48">
      <div className="col-span-1 border border-gray-800 rounded-md pt-4">
        <div className="font-medium text-4xl">Free Plan</div>
        <div className="font-bold text-6xl pt-4">$0</div>
        <div className="font-base text-lg pb-8">forever</div>
        <div className="ml-6">
          <FeatureCheck text="1 Branch" />
          <FeatureCheck text="1 User" />
          <FeatureCheck text="500 Products" />
          <FeatureCheck text="500 Transactions per month" />
          <FeatureCheck text="Inventory Management" />
          <FeatureCheck text="Sales Analysis" />
        </div>
        <div className="mx-8 mb-6 mt-6">
          <OrangeButton text="Sign Up for Free" url="/signup-now" />
        </div>
      </div>
      <div className="col-span-2 border border-gray-800 rounded-md pt-4">
        <div className="font-medium text-4xl">Premium Plan</div>
        <div className="font-bold text-6xl pt-4">$30</div>
        <div className="font-base text-lg pb-8">monthly per branch</div>
        <div className="grid grid-cols-2 mx-8">
          <div className="col-span-1">
            <FeatureCheck text="Multiple Branches" />
            <FeatureCheck text="Unlimited Users" />
            <FeatureCheck text="Unlimited Products" />
            <FeatureCheck text="Unlimited Transactions" />
            <FeatureCheck text="Customer Support" />
            <FeatureCheck text="Built-in E-commerce Site" />
          </div>
          <div className="col-span-1">
            <FeatureCheck text="Credit Cards Processing (US)" />
            <FeatureCheck text="Inventory Management" />
            <FeatureCheck text="Sales Analysis" />
            <FeatureCheck text="Chat Support" />
          </div>
        </div>
        <div className="mx-48 mb-6 mt-4">
          <OrangeButton text="Get Premium" url="/signup-now" />
        </div>
      </div>
    </div>
  </div>
);

export default ContentChoosePlan;
