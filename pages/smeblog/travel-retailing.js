import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "The importance of travel retailing";
const paragraphs = [
  {
    id: 1,
    text: "An interesting study conducted just recently manifested that 96% of those who travel relish shopping while visiting a foreign place, and 83% of them deem shopping as an important part of their trip.",
  },
  {
    id: 2,
    text: "This is exactly the reason why travel retail is rocketing to the top of the business chain. Consumers are always looking for ways to spend their money. Taleb Rifai, secretary general of the United Nations World Tourism Organization, remarked, “Shopping is becoming an increasingly relevant component of the tourism value chain. Shopping has converted into a determinant factor affecting destination choice, an important component of the overall travel experience and, in some cases, the prime travel motivation.”",
  },
  {
    id: 3,
    text: "What is this concept, anyway? Dubbed as “duty-free retail,” travel retail is a global industry that is an essential component of tourism marketing since its main purpose is to sell goods to international travelers. Brands use this as one of their strategies to expand business.",
  },
  {
    id: 4,
    text: "Barbara Lavernos: “Travel retail is like a sixth continent in the world. In six years, travel retail will be a $100 billion business, up from $48 billion today. Our customers today are global shoppers and that has changed how we operate our business.”",
  },
  {
    id: 5,
    text: "Airports are its common hubs since they harbor a good number of tourists. “This channel is becoming very important,” observed Bruno Pavlovsky, chairman of the famed fashion brand Chanel. “Customers are spending time in airports where the environment has become increasingly sophisticated.”",
  },
  {
    id: 6,
    text: "Michael Barret, executive officer of the Asia Pacific Travel Retail Association, pointed out three important principles in his speech in the APRCE Manila 2015: understanding who the customer is, making the emotional connection, and focusing on the unique value of a place to avoid the same old thing.",
  },
  {
    id: 7,
    text: "As far as the near future is concerned, this industry is not going anywhere. In fact, its prospects are very bright. As the managing director of worldwide travel retail for Loreal Luxe, Barbara Lavernos, said, “Travel retail is like a sixth continent in the world. In six years, travel retail will be a $100 billion business, up from $48 billion today. Our customers today are global shoppers and that has changed how we operate our business.” ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
