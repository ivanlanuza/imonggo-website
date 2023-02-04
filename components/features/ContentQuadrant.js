import OneQuarter from "./OneQuarter";

const ContentQuadrant = ({ content }) => (
  <div className="w-80 mx-6">
    <div className="grid-cols-2 gap-2 lg:gap-8 grid lg:place-items-center">
      <div className="col-span-1">
        <div>
          <OneQuarter text={content.q2} iconvalue={content.iconvalueq2} />
        </div>
        <div className="mt-8">
          <OneQuarter text={content.q3} iconvalue={content.iconvalueq3} />
        </div>
      </div>
      <div className="col-span-1 md:mt-8">
        <div>
          <OneQuarter text={content.q1} iconvalue={content.iconvalueq1} />
        </div>
        <div className="mt-8">
          <OneQuarter text={content.q4} iconvalue={content.iconvalueq4} />
        </div>
      </div>
    </div>
  </div>
);

export default ContentQuadrant;
