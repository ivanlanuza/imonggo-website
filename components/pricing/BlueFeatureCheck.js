import { CheckCircleIcon } from "@heroicons/react/solid";

const BlueFeatureCheck = ({ text }) => (
  <div className="grid grid-cols-6 mb-2">
    <div className="col-span-1">
      <CheckCircleIcon className="textblue h-8" />
    </div>
    <div className="col-span-5 text-left pt-1 textblue">{text}</div>
  </div>
);

export default BlueFeatureCheck;
