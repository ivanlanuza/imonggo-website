import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "How seller optimism affects customer satisfaction";
const paragraphs = [
  {
    id: 1,
    text: "A wise business principle is to always find a way to reach customer satisfaction. The retail industry is not just about selling a product; it’s about making the customers feel that their purchase makes an impact on their lives.",
  },
  {
    id: 2,
    text: "Nurturing the customer is a crucial step in advancing in the ladder of business. Conventional study relates that it is 10 times more expensive to acquire a new customer than to take care of a loyal one.",
  },
  {
    id: 3,
    text: "But how hard is it to create loyal customers? A simple, genuine smile can make all the difference.",
  },
  {
    id: 4,
    subtitle: "The Smile Contagion",
  },
  {
    id: 5,
    text: "When the seller smiles, the customer smiles as well. A research study conducted by the Department of Psychology in Bowling Green State University and Penn State University mentions how emotional contagion works in the retail industry. The findings show that customers are more drawn to sellers who have brighter and more genuine smiles. ",
  },
  {
    id: 6,
    text: "The customer is oblivious to the preferences that he makes because it is “almost a reflex,” as Adam Smith puts it. But by merely smiling, the seller somehow transfers his optimism to the customer. As a result, the customer feels happy about himself and the product that the seller presents to him.",
  },
  {
    id: 7,
    subtitle: "Building Lasting Impressions",
  },
  {
    id: 8,
    text: "A smile is a personal touch that can go a long way when projecting to the customer a positive image of the company. It produces a hypnotic effect that leaves the customer enchanted.",
  },
  {
    id: 9,
    text: "The individual seller’s attitude in business is a reflection of his company’s work ethic, so when the seller displays positive emotions, the customer assumes that the company and its products and services are as good as they appear to be.",
  },
  {
    id: 10,
    subtitle: "A Bond of Trust",
  },
  {
    id: 11,
    text: "Usually, a customer is lost in indecision so he tries to look for someone or something to help him find his way. A guiding smile can give him just that. A customer discerns confidence and assurance when a seller displays optimism through a simple, genuine smile. The customer gets the impression that the seller is really sure about the product he’s trying to merchandise.",
  },
  {
    id: 12,
    text: "When used in the proper context, a smile initiates trust. And when there is already a bond of trust formed between seller and customer, the customer becomes willing to do business and invest in the company’s products and services.",
  },
  {
    id: 13,
    text: "Ultimately, a satisfied customer is the golden trophy that every retail business must strive to acquire. Besides, what can be more fulfilling than the thought of giving the customers the gratification that they deserve? ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
