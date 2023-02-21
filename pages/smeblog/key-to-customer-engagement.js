import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "Why e-commerce is the key to customer engagement";
const paragraphs = [
  {
    id: 1,
    text: "The global market has provided consumers worldwide with a range of different touchpoints through which they could review brands. Retail is no longer about merchants reaching out to their patrons; it’s now an interactive process that entails both effort from the retailers’ side and engagement from the customers.",
  },
  {
    id: 2,
    text: "Doug McMillon, president and CEO of Wal-Mart, believes that e-commerce is the key to engage customers and make them stay. He said, “We believe the winners in retail will be those who can bring together the best of the offline world with the best of online to serve customers however they want to shop.”",
  },
  {
    id: 3,
    text: "McMillon deems the use of mobile technology to be the central figure in creating a memorable brand experience. Connecting with tech-savvy consumers in multiple levels encourages customer engagement and loyalty that can only result to retail growth.",
  },
  {
    id: 4,
    text: "There are many strategies that retailers can use to convert casual consumers into engaged customers. The most important among these — and indeed the most obvious — is to understand all the channels that the consumers useso that integrating them efficiently will come easy.",
  },
  {
    id: 5,
    text: "One thing that retailers can focus on is developing a mobile campaign. Since mobile technology lies at the core of e-commerce, it is sure to drive consumers’ attention to the brand. In addition, the use of web analytics can also drive in-store foot traffic. To facilitate convenience for the customers, another thing that retailers could do is to employ contactless payments, like the use of digital wallets and QR codes.",
  },
  {
    id: 6,
    text: "“Customer engagement will depend primarily on how much time consumers spend on brand-related activities, how often they engage in said activities, and how willing they are about sharing their brand experience to other consumers.”",
  },
  {
    id: 7,
    text: "Equally important is to bring social media into play in order to maximize brand exposure. Sites like Facebook, Twitter and Instagram provide good platforms for publicity. Customer engagement will depend primarily on how much time consumers spend on brand-related activities, how often they engage in said activities, and how willing they are about sharing their brand experience to other consumers. It is in social media that retailers can harness the full power of their embodied brands.",
  },
  {
    id: 8,
    text: "In this increasingly mobile-driven world, e-commerce should no longer be reckoned as a mere advantage. E-commerce is a customer demand that retailers must respond to. It’s a challenge that retailers have to face.",
  },
  {
    id: 9,
    text: "Amazon’s CEO Jeff Bezos posed a similar challenge to retailers: If you’re not stubborn, you’ll give up on experiments too soon. And if you’re not flexible, you’ll pound your head against the wall and you won’t see a different solution to a problem you’re trying to solve. ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
