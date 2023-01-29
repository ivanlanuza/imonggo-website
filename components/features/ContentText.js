import OrangeButton from "components/core/OrangeButton";

const ContentText = ({ title, text, url }) => (
  <div className="mb-8 w-5/6">
    <div className="text-4xl font-bold textblue tracking-tight">{title}</div>
    <div className="pt-4 textblue tracking-wide text-md">{text}</div>
    <div className="mt-6 w-2/5">
      <OrangeButton text="Learn More" url={url} />
    </div>
  </div>
);

export default ContentText;
