import ContentTemplate from "components/aboutus/ContentTemplate";

const title = "AREA Inc";
const subtitle = "Imonggo Customer Feature";
const banner_image = "05.jpeg";
const next_article_url = `aboutus/cayoticmotorsports`;
const next_article_title = "Cayotic Motorsports";
const paragraphs = [
  {
    id: 1,
    text: "AREA is a small wholesale/retail modern bedding company selling bedding, furniture, home-wares, and clothing. The New York-based store has been using Imonggo in 2010.",
  },
  {
    id: 2,
    text: "In 2016, AREA needed a deeper analysis of their inventory data with a comprehensive ERP software so, they utilized Imonggo’s API to make it work.",
  },
  {
    id: 3,
    text: "AREA’s Vanessa Chew explains, “We’re small but since we do both wholesale and retail (stores and e-commerce) and have multiple facilities managing our inventory gets complex. Thus we need to simplify and integrate our inventory process.”",
  },
  {
    id: 4,
    text: "Imonggo’s powerful API lets the point-of-sale connect with any system, whether e-commerce, payment gateway or business intelligence. Thus, the Imonggo API definitely lets AREA simplify their inventory.",
  },
  {
    id: 5,
    text: "Vanessa adds, “We aim to sync the inventory levels by passing all transactions (Sales, Returns, Exchanges, Receive from Supplier, Return to Supplier, Transfers, Adjustments, Physical Count – anything that affects inventory). We are currently doing this manually and it takes up too much of our time and leaves too much room for error and inconsistencies.”",
  },
  {
    id: 6,
    text: "AREA will be able to have a more efficient inventory process after the integration has been completed. All thanks to Imonggo’s API.",
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
