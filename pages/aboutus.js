import NavBar from "components/core/NavBar";
import Video from "components/aboutus/Video";
import HeaderContent from "components/aboutus/HeaderContent";
import FooterBar from "components/core/FooterBar";
import CustomerStories from "components/aboutus/CustomerStories";
import ContentList from "components/aboutus/ContentList";
import SignUpFooter from "components/core/SignUpFooter";

export default function AboutUs() {
  return (
    <div className="font-sans bg-white">
      <NavBar />

      <HeaderContent />
      <CustomerStories />
      <ContentList />
      <SignUpFooter />
      <FooterBar />
    </div>
  );
}
