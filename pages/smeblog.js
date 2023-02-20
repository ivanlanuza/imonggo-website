import NavBar from "components/core/NavBar";
import FooterBar from "components/core/FooterBar";
import SignUpFooter from "components/core/SignUpFooter";
import BlogList from "components/smeblog/BlogList";
import SmeHeader from "components/smeblog/SmeHeader";

export default function AboutUs() {
  return (
    <div className="font-sans bg-white">
      <NavBar />
      <SmeHeader />
      <BlogList />
      <SignUpFooter />
      <FooterBar />
    </div>
  );
}
