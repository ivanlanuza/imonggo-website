import NavBar from "components/core/NavBar";
import SinglePost from "./SinglePost";
import FooterBar from "components/core/FooterBar";

const BlogTemplate = ({ title, paragraphs }) => (
  <div className="bg-gray-100">
    <NavBar />
    <SinglePost title={title} paragraphs={paragraphs} />
    <FooterBar />
  </div>
);

export default BlogTemplate;
