import OrangeButton from "components/core/OrangeButton";

const ContentText = ({ title, text, url }) => (
  <div className="mb-0 md:mb-8 md:w-96 mx-2 md:mx-6 px-0 lg:px-0 text-center md:text-left">
    <div className="text-xl lg:text-4xl font-bold textblue tracking-tight">
      {title}
    </div>
    <div className="pt-2 mx-8 md:mx-0 lg:pt-4 textblue tracking-wide text-sm lg:text-md">
      {text}
    </div>
    <div className="block place-items-center">
      <div className="mt-6 mx-28 md:mx-0 md:w-full xl:w-3/5">
        <OrangeButton text="Learn More" url={url} />
      </div>
    </div>
  </div>
);

export default ContentText;
