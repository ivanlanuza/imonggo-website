import NavBar from "components/core/NavBar";
import SinglePost from "./SinglePost";
import SignUpFooter from "components/core/SignUpFooter";
import FooterBar from "components/core/FooterBar";

const ContentTemplate = ({
  title,
  subtitle,
  banner_image,
  paragraphs,
  next_article_url,
  next_article_title,
}) => (
  <div className="bg-gray-200">
    <NavBar />
    <SinglePost
      title={title}
      subtitle={subtitle}
      banner_image={banner_image}
      paragraphs={paragraphs}
      next_article_url={next_article_url}
      next_article_title={next_article_title}
    />
    <SignUpFooter />
    <FooterBar />
  </div>
);

export default ContentTemplate;
