import ContentTemplate from "components/aboutus/ContentTemplate";

const title = "Fresh Grocer";
const subtitle = "Imonggo Customer Feature";
const banner_image = "02.jpeg";
const next_article_url = `aboutus/photonursery`;
const next_article_title = "Photo Nursery";
const paragraphs = [
  {
    id: 1,
    text: "When most of the world went on lockdown due to COVID-19, Fresh Grocer saw an opportunity.",
  },
  {
    id: 2,
    text: "The small business from Zimbabwe was originally in the B2B category, delivering fresh produce from the farms to hotels and restaurants. But due to the temporary closure of many of their partners, they had to quickly pivot into B2C. Now, Fresh Grocer delivers fresh produce from organic farms straight to the table of consumers.",
  },
  {
    id: 3,
    text: "Imonggo is instrumental in this pivot. Because Fresh Grocer uses Imonggo as their backend, they can pretty much manage the business online. The business owners can stay at home to take care of inventory and orders, so they can guide the staff on-site who are delivering the goods.",
  },
  {
    id: 4,
    text: "'Imonggo really helps by helping everyone to get on one platform to administer all the sales from that perspective', said Komborerai Murimba the business development manager of Fresh Grocer.",
  },
  {
    id: 5,
    text: "Murimba thinks Imonggo is important in running Fresh Grocer. The point of sale solution’s reports module, for example, helps them get a complete picture of their operations.",
  },
  {
    id: 6,
    text: "'I love Imonggo’s automatic calculation of margins, the invoice count. I say 90% of the time, I’m actually within Reports,' he said.",
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
