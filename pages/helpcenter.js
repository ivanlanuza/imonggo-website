import NavBar from "components/core/NavBar";
import FooterBar from "components/core/FooterBar";

import { AdjustmentsIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <div className="bg-white">
      <NavBar />
      <div className="grid place-content-center h-[420px] items-center ">
        <AdjustmentsIcon className="h-20 textorange" />
        <div className="textblue text-2xl font-black">
          Sorry! Help Center will be back soon. We are upgrading for a better
          experience.
        </div>
      </div>
      <FooterBar />
    </div>
  );
}
