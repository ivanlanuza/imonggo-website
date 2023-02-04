import NavBar from "components/core/NavBar";
import FooterBar from "components/core/FooterBar";

import { AdjustmentsIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <div className="bg-white font-sans">
      <NavBar />
      <div className="grid place-content-center h-screen mx-8 lg:h-[420px] items-center text-center ">
        <div className="textblue text-2xl font-black">
          Sorry! Help Center will be back soon. We are upgrading for a better
          experience.
        </div>
      </div>
      <FooterBar />
    </div>
  );
}
