import Image from "next/image";

const ContentProof = ({}) => (
  <div className="relative">
    <div className="block items-center font-sans text-center mt-12 bg-orange-50 py-12">
      <div className="grid grid-cols-2 items-center place-content-center lg:mx-32">
        <div className="col-span-1">
          <div className="grid grid-cols-8">
            <div className="col-span-1">
              <Image
                src="/images/home/check-12-years.png"
                height="120"
                width="120"
              />
            </div>
            <div className="font-black pl-4 pt-2 text-lg text-left col-span-5">
              12 years of helping small & mid-sized retail stores worldwide.
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-8">
            <div className="col-span-1">
              <Image
                src="/images/home/50k-support.png"
                height="120"
                width="120"
              />
            </div>
            <div className="font-black pt-2 text-lg col-span-4 pl-4 text-left">
              50,000+ businesses helped in different cities worldwide.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContentProof;
