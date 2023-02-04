import OneQuarter from "./OneQuarter";

const SubFeaturesContent = ({ title, icon, text }) => (
  <div className="grid grid-cols-1 justify-items-center my-8 mx-4 ">
    <div className="block lg:w-3/5">
      <div className="grid-cols-2 grid  lg:place-items-center">
        <div className="col-span-1">
          <div>
            <OneQuarter text={title} iconvalue={icon} />
          </div>
        </div>
        <div className="col-span-1 place-items-center">
          <div className="font-medium  text-xs md:text-lg lg:text-lg textblue first-letter:text-4xl first-letter:font-bold">
            {text}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SubFeaturesContent;
