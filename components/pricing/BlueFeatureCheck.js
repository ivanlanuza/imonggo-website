import { CheckCircleIcon } from "@heroicons/react/solid";

const BlueFeatureCheck = ({ text }) => (
  <div className="grid grid-cols-6 mb-6">
    <div className="col-span-1">
      <CheckCircleIcon className="textblue h-6 md:h-8" />
    </div>
    <div className="col-span-5 text-xs lg:text-sm text-left md:pl-4 pt-1 md:pt-2 textblue">
      {text}
    </div>
  </div>
);

export default BlueFeatureCheck;
