import NavBar from "components/core/NavBar";
import HeroFeatures from "components/features/HeroFeatures";
import ContentFeatures from "components/features/ContentFeatures";
import SignUpFooter from "components/core/SignUpFooter";
import FooterBar from "components/core/FooterBar";

export default function Features() {
  return (
    <div className="font-sans bg-white">
      <NavBar />
      <HeroFeatures />
      <ContentFeatures />
      <SignUpFooter />
      <FooterBar />
    </div>
  );
}
