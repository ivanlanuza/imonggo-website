import { CheckCircleIcon } from "@heroicons/react/solid";

const FeatureCheck = ({ text }) => (
  <div className="grid grid-cols-6 mx-2 mb-2">
    <div className="col-span-1">
      <CheckCircleIcon className="textblue h-8" />
    </div>
    <div className="col-span-5 text-left pt-1">{text}</div>
  </div>
);

export default FeatureCheck;
