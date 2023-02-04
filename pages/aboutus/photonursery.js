import ContentTemplate from "components/aboutus/ContentTemplate";

const title = "Photo Nursery";
const subtitle = "Imonggo Customer Feature";
const banner_image = "03.jpeg";
const next_article_url = `aboutus/ananda`;
const next_article_title = "Ananda";
const paragraphs = [
  {
    id: 1,
    text: "Jeff Secrease’s business is a bundle of joy.",
  },
  {
    id: 2,
    text: "It’s called Photo Nursery, a unique photography business that takes photographs of newborns right at the birthing center.",
  },
  {
    id: 3,
    text: "Photo Nursery’s clients are thankful for the service because they get beautiful photos of their new babies, instead of the traditional clinical photos usually taken by hospital staff.",
  },
  {
    id: 4,
    text: "More than 45,000 families have trusted the photography company since it opened in 2008.",
  },
  {
    id: 5,
    text: "Jeff, meanwhile, trusts Imonggo to help Photo Nursery stay on track. The company operates in four locations in both Florida and California, and the veteran businessman works from home. He likes that Imonggo can let him monitor the locations remotely.",
  },
  {
    id: 6,
    text: "'If my photographers have a problem, I can log in to Imonggo, on my side and see what they may be having issues with. I can log in and help their branch, as far as voiding a transaction, from my phone or from my computer, and not even be in the same state as them to help them. Traditional POS software you have to be in that location and have to do it manually,' Jeff told Imonggo in an interview.",
  },
  {
    id: 7,
    text: "Jeff also likes that Imonggo is intuitive, so he is sure that his photographers will utilize it to record sales and receive payment.",
  },
  {
    id: 8,
    text: "“The easier it is to understand, the more likely they’re gonna use it,” he said.",
  },
];

export default function Home() {
  return (
    <ContentTemplate
      title={title}
      subtitle={subtitle}
      banner_image={banner_image}
      paragraphs={paragraphs}
      next_article_url={next_article_url}
      next_article_title={next_article_title}
    />
  );
}
