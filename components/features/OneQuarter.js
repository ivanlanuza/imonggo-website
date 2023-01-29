import DirtyIcons from "./DirtyIcons";

const OneQuarter = ({ text, iconvalue }) => (
  <div>
    <div className="h-32 p-2 border-2 rounded-xl w-36 pt-6 border-[#0B224B] hover:bg-[#0B224B] text-[#0B224B] hover:text-white">
      <div className=" grid place-items-center">
        <DirtyIcons iconvalue={iconvalue} />
      </div>
      <div className=" text-center text-xs font-bold ">{text}</div>
    </div>
  </div>
);

export default OneQuarter;
