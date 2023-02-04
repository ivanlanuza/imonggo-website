import { CheckCircleIcon } from "@heroicons/react/solid";

const OrangeFeatureCheck = ({ text }) => (
  <div className="grid grid-cols-6 mb-6">
    <div className="col-span-1">
      <CheckCircleIcon className="textorange h-8" />
    </div>
    <div className="col-span-5 text-sm text-left pt-2 textorange">{text}</div>
  </div>
);

export default OrangeFeatureCheck;
