import Image from "next/image";

const ContentEasyJoin = ({}) => (
  <div className="block items-center font-sans text-center mt-6 mb-28 ">
    <div className="text-4xl font-bold textblue">Very easy to get started!</div>
    <div className="grid grid-cols-3 items-center place-content-center lg:mt-16 lg:mx-32">
      <div className="col-span-1">
        <Image src="/images/home/no-credit-card.png" height="119" width="124" />
        <div className="font-bold text-lg">No Credit Card required!</div>
      </div>
      <div className="col-span-1">
        <Image src="/images/home/1-minute-setup.png" height="90" width="90" />
        <div className="font-bold text-lg">1 minute account setup!</div>
      </div>
      <div className="col-span-1">
        <Image src="/images/home/free-forever.png" height="104" width="104" />
        <div className="font-bold text-lg">Free forever!</div>
      </div>
    </div>
  </div>
);

export default ContentEasyJoin;
