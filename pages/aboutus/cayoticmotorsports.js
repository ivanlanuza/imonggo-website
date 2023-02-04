import ContentTemplate from "components/aboutus/ContentTemplate";

const title = "Cayotic Motorsports";
const subtitle = "Imonggo Customer Feature";
const banner_image = "06.png";
const next_article_url = `aboutus/terrariet`;
const next_article_title = "Terrariet";
const paragraphs = [
  {
    id: 1,
    text: "Mark Cummings has chosen Imonggo’s iPad app to help run Cayotic, a cool motorsports store in the Cayman Islands, and he stands by how effective it is.",
  },
  {
    id: 2,
    text: "“It is super easy to make sales receipts for my cash sales. Inventory is a breeze to add and basically manages it self though the software,” he says. He also like that he’s not tied to the counter. He can bring the iPad point-of-sale to the customer at any part of the store, cultivating a friendlier atmosphere and better customer service.",
  },
  {
    id: 3,
    text: "Mark adds, “I started using Imonggo in November of 2016 and it has helped my business grow and expand. I really liked all the features and how user friendly it is.”",
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
