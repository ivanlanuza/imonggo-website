import Image from "next/image";

const ContentEasyJoin = ({}) => (
  <div className="block items-center font-sans text-center mt-6 lg:mb-28 ">
    <div className="text-xl lg:text-4xl font-bold textblue">
      Very easy to get started!
    </div>
    {/* For Large screen */}
    <div className="hidden lg:grid grid-cols-3 items-center place-content-center lg:mt-16 lg:mx-32">
      <div className=" col-span-1">
        <Image src="/images/home/no-credit-card.png" height="119" width="124" />
        <div className="font-bold text-lg">No Credit Card required!</div>
      </div>
      <div className="col-span-1 mt-2">
        <Image src="/images/home/1-minute-setup.png" height="90" width="90" />
        <div className="font-bold text-lg mt-4">1 minute account setup!</div>
      </div>
      <div className="col-span-1">
        <Image src="/images/home/free-forever.png" height="104" width="104" />
        <div className="font-bold text-lg mt-3">Free forever!</div>
      </div>
    </div>

    {/* For Small screen */}
    <div className="grid lg:hidden grid-cols-3 items-center place-content-center mt-6 lg:mx-32">
      <div className=" col-span-1">
        <Image src="/images/home/no-credit-card.png" height="60" width="62" />
        <div className="font-bold text-xs">No Credit Card required!</div>
      </div>
      <div className="col-span-1 mt-2">
        <Image src="/images/home/1-minute-setup.png" height="45" width="45" />
        <div className="font-bold text-xs mt-2">1 minute account setup!</div>
      </div>
      <div className="col-span-1 -mt-4">
        <Image src="/images/home/free-forever.png" height="52" width="52" />
        <div className="font-bold text-xs mt-2">Free forever!</div>
      </div>
    </div>
  </div>
);

export default ContentEasyJoin;
