import NavBar from "components/core/NavBar";
import HeroFeatures from "components/features/HeroFeatures";
import ContentFeatures from "components/features/ContentFeatures";
import FooterBar from "components/core/FooterBar";

export default function Features() {
  return (
    <div>
      <NavBar />
      <HeroFeatures />
      <ContentFeatures />
      <FooterBar />
    </div>
  );
}