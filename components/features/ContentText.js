import OrangeButton from "components/core/OrangeButton";

const ContentText = ({ title, text, url }) => (
  <div className="mb-8 md:w-5/6 px-2 lg:px-0 text-center md:text-left">
    <div className="text-xl lg:text-4xl font-bold textblue tracking-tight">
      {title}
    </div>
    <div className="pt-2 lg:pt-4 textblue tracking-wide text-sm lg:text-md">
      {text}
    </div>
    <div className="grid place-items-center md:block">
      <div className="mt-6 w-3/5 md:w-full xl:w-2/5">
        <OrangeButton text="Learn More" url={url} />
      </div>
    </div>
  </div>
);

export default ContentText;
