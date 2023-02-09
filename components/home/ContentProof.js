import Image from "next/image";

const ContentProof = ({}) => (
  <div className="relative">
    <div className=" font-sans  mt-12 bg-orange-50 py-4 lg:py-12">
      <div className=" grid grid-cols-2  mx-2 lg:mx-0 gap-4 lg:gap-0">
        <div className="col-span-1 text-center">
          <div className="inline-flex place-items-center">
            <div className="">
              <Image
                src="/images/home/check-12-years.png"
                height="120"
                width="120"
              />
            </div>
            <div className=" inline-flex place-items-center font-base  lg:font-bold pl-1 lg:pl-4  text-xs lg:text-lg  ">
              12 years of helping small & mid-sized retailers.
            </div>
          </div>
        </div>
        <div className="col-span-1 text-center">
          <div className="inline-flex place-items-center">
            <div className="">
              <Image
                src="/images/home/50k-support.png"
                height="120"
                width="120"
              />
            </div>
            <div className=" inline-flex place-items-center font-base  lg:font-bold pl-1 lg:pl-4  text-xs lg:text-lg  ">
              50,000+ businesses helped in 170 countries.
            </div>
          </div>
        </div>
        {/*
        <div className="col-span-1">
          <div className="grid grid-cols-8 border">
            <div className="col-span-2 lg:col-span-1">
              <Image
                src="/images/home/check-12-years.png"
                height="120"
                width="120"
              />
            </div>
            <div className="font-base lg:font-bold pl-1 lg:pl-4 pt-2 md:pt-6 text-xs lg:text-lg text-left col-span-6 lg:col-span-7">
              12 years of helping small & mid-sized retailers.
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-8 border">
            <div className="col-span-2 lg:col-span-1">
              <Image
                src="/images/home/50k-support.png"
                height="120"
                width="120"
              />
            </div>
            <div className="font-base lg:font-bold pt-2 md:pt-6  text-xs lg:text-lg col-span-6 lg:col-span-7 pl-1 lg:pl-4 text-left">
              50,000+ businesses helped in 170 countries.
            </div>
          </div>
        </div>
*/}
      </div>
    </div>
  </div>
);

export default ContentProof;
