import NavBar from "components/core/NavBar";
import HeroHome from "components/home/HeroHome";
import ContentEasyJoin from "components/home/ContentEasyJoin";
import ContentOperations from "components/home/ContentOperations";
import ContentProof from "components/home/ContentProof";
import ContentChoosePlan from "components/home/ContentChoosePlan";
import FooterBar from "components/core/FooterBar";

export default function Home() {
  return (
    <div className="bg-white">
      <NavBar />
      <HeroHome />
      <ContentEasyJoin />
      <ContentOperations />
      <ContentProof />
      <ContentChoosePlan />
      <FooterBar />
    </div>
  );
}
