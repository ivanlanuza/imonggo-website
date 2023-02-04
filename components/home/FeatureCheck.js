import { CheckCircleIcon } from "@heroicons/react/solid";

const FeatureCheck = ({ text }) => (
  <div className="grid grid-cols-6 lg:mx-2 mb-2">
    <div className="col-span-1 gap-0">
      <CheckCircleIcon className="textblue h-4 xl:h-8" />
    </div>
    <div className="col-span-5 text-left pt-0 xl:pt-1 text-xs xl:text-sm">
      {text}
    </div>
  </div>
);

export default FeatureCheck;
