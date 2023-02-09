import Image from "next/image";

const ContentOperations = ({}) => (
  <div className="block items-center font-sans text-center mt-6 textblue">
    <div className="block lg:hidden text-center font-bold text-lg align-top mt-16 mb-6">
      Imonggo is optimized to make your operations as simple as possible!
    </div>
    <div className="grid grid-cols-2 items-center place-content-center lg:mt-16 ">
      <div className="col-span-1">
        <Image src="/images/home/circular-image.png" height="480" width="480" />
      </div>
      <div className="col-span-1">
        <div className="hidden lg:block text-left font-bold text-2xl w-3/4 align-center lg:mb-12">
          Imonggo is optimized to make your operations as simple as possible!
        </div>
        <div className="grid grid-cols-8">
          <div className="col-span-1 text-left">
            <Image
              src="/images/home/sell-even-more.png"
              height="56"
              width="56"
            />
          </div>
          <div className="col-span-7 text-left place-content-center text-xs lg:text-lg mb-4  px-1 lg:px-0 lg:mb-12 md:pt-4">
            Transact customer orders faster.
          </div>
        </div>
        <div className="grid grid-cols-8">
          <div className="col-span-1 text-left">
            <Image
              src="/images/home/accurate-inventory.png"
              height="56"
              width="56"
            />
          </div>

          <div className="col-span-7 text-left text-xs lg:text-lg mb-4 px-1 lg:px-0 lg:mb-12 md:pt-4">
            Have accurate inventory all the time.
          </div>
        </div>
        <div className="grid grid-cols-8">
          <div className="col-span-1 text-left">
            <Image
              src="/images/home/business-reports.png"
              height="56"
              width="56"
            />
          </div>
          <div className="col-span-7 text-left text-xs lg:text-lg mb-4 px-1 lg:px-0 lg:mb-12 md:pt-4">
            Access business reports anytime, anywhere.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContentOperations;
