import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "What pricing method is best for your business?";
const paragraphs = [
  {
    id: 1,
    text: "What most people don’t know about pricing is that it requires a lot of considerations. Every smart businessman would agree that pricing is more than just assigning a number to an object. Those numbers you see in sales tags are not the work of a whim; they’re the product of refined business thinking.",
  },
  {
    id: 2,
    text: "A lot of factors need to be considered before deciding on the perfect pricing model. You have to look at it from two major perspectives: yours and your customers’.",
  },
  { id: 3, subtitle: "Business Perspective" },
  {
    id: 4,
    text: "From your end, it’s wise to consider what type of product you sell. If you’re selling branded goods, look at how the market treats them. Your move will basically depend on how your competitors play the game. You can’t sell Cheetos for twice the price of your competitors, neither can you sell it for way lower than the standard. On the other hand, if you sell your own products (i.e. products specially made for you), you can price based on value.",
  },
  {
    id: 5,
    text: "You also need to consider the size of your team. The higher the pricing of your store, the less traffic you see on a daily basis. This works the other way around, too. The lower your pricing, the higher is your expected daily traffic. So if you offer cheap prices and have a small staff, you might want to reassess your business structure.",
  },
  { id: 6, subtitle: "Customer Perspective" },
  {
    id: 7,
    text: "This perspective boils down to one question: If you were the customer, how much would you pay for your product?",
  },
  {
    id: 8,
    text: "To answer this question, you first need to know who your customer is. To what niche does he belong? How many customers like him do you have? Once you have the answers, you basically have the data for designing your prices.",
  },
  {
    id: 9,
    text: "“Pricing is actually a pretty simple and straightforward thing. Customers will not pay literally a penny more than the value of a product.”",
  },
  {
    id: 10,
    text: "And since pricing is partly scientific, identifying your best price points would be a smart move. A price point, as Webster Dictionary describes it, is the standard price set by the manufacturer for a product. Price points are important because consumers react differently to how numbers are arranged. A dress priced at 39.99 may leave a better impression than the same dress priced at 40. Learn some basic consumer psychology so you’d know what sells and what doesn’t.",
  },
  {
    id: 11,
    text: "While we are at it, here’s what Ron Johnson said about pricing: “Pricing is actually a pretty simple and straightforward thing. Customers will not pay literally a penny more than the value of a product.”",
  },
  {
    id: 12,
    text: "Entrepreneur Media, Inc. lists three kinds of price points: prestige, popular, and competitive.",
  },
  { id: 13, subtitle: "Price Line # 1: Prestige" },
  {
    id: 14,
    text: "This price line gives your brand a sort of mighty air. Since it’s positioned at the top of the pyramid, it drives less traffic, but not necessarily less sales. The prestige line will boost your reputation since expensive products are generally deemed as good in quality and dependable in terms of features.",
  },
  { id: 15, subtitle: "Price Line # 2: Popular" },
  {
    id: 16,
    text: "The average price line is where regular businessmen settle because it caters to the largest group of customers. Since it’s neither too expensive nor too cheap, it has the largest following.",
  },
  {
    id: 17,
    text: "This price line is mostly used by stores in the competitive market. Usually, the aim of businesses that compete in this line is to contend with similar stores nearby.",
  },
  {
    id: 18,
    text: "A good pricing strategy can get you through one phase of your business. Try to understand how it works so you can keep your business on track. ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
