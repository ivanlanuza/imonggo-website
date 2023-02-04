import Image from "next/image";
import OrangeButton from "components/core/OrangeButton";

const HeaderContent = () => (
  <div className="grid grid-cols-8  pb-12 place-content-center mt-8 lg:mt-16 px-4 lg:px-32">
    <div className="col-span-8 lg:col-span-5">
      <div className="textorange font-bold text-4xl">Why choose Imonggo?</div>
      <div className="textblue font-medium text-md lg:text-lg mt-8">
        Since 2010, Imonggo has been helping SME retailers in 170 different
        countries globally.
      </div>
      <div className="textblue font-medium text-md lg:text-lg mt-4">
        Imonggo is a web-based, easy-to-use POS that enables you to operate,
        record, track, and manage your sales and inventory, from 1 to 100
        branches.
      </div>
      <div className="textblue font-medium text-md lg:text-lg mt-4">
        Imonggo gives you powerful inventory management, sales management, and
        business analysis tools that are very simple to use without any setup
        required. It also provides additional functions that are very useful for
        business - customer reward points, offline and mobile sales, and
        business intelligence.
      </div>
      <div className="lg:w-3/5 xl:w-2/5 mt-8">
        <OrangeButton text="Learn More" url="features" />
      </div>
    </div>
    <div className="col-span-8 lg:col-span-3 lg:pl-16 order-first lg:order-last">
      <Image src="/images/aboutus/aboutus.png" width="431" height="407" />
    </div>
  </div>
);

export default HeaderContent;
