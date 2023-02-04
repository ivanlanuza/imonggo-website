import Link from "next/link";

const OrangeButton = ({ text, url }) => (
  <Link href={url}>
    <div className="flex-shrink-0">
      <button
        type="button"
        className="relative w-full items-center shadow-sm  bgorange text-white rounded-md  px-4 py-2      hover:border-white text-sm  cursor-pointer"
      >
        <div className="font-medium text-sm lg:text-lg">{text}</div>
      </button>
    </div>
  </Link>
);

export default OrangeButton;
