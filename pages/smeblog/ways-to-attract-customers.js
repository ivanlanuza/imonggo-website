import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "4 Ways to attract new customers to your store";
const paragraphs = [
  {
    id: 1,
    text: "Merely retaining old customers will not take you anywhere this year. You have to be more innovative and outright in your business decisions. You need to expand your reach and attract new customers.",
  },
  {
    id: 2,
    text: "Here are a few tips that will hopefully take you to where you need to be to grow your store:",
  },
  { id: 3, subtitle: "1. Know your product inside out." },
  {
    id: 4,
    text: "This, of all things, is what customers expect of you. Unless you know the anatomy of your product, you cannot convince your customers to get to know and love it, too. Your customers will naturally doubt you and your business at first, and it is your job to take away that doubt and replace it with trust and confidence. Obviously, you can’t do this if you yourself are not fully aware of what you offer.",
  },
  {
    id: 5,
    subtitle:
      "2. Treat your employees the way you want them to treat your customers.",
  },
  {
    id: 6,
    text: "Next to a product that sells itself, you need to have a team of passionate people who love your product and who want to relay its excellence to others. Remember that it is your employees who face your customers day by day. It is them who are literally the stewards of your product. You have to make sure that they are on your side; otherwise, you’re just the captain of a sinking ship.",
  },
  {
    id: 7,
    text: "Unless you know the anatomy of your product, you can’t convince your customers to get to know and love it, too.",
  },
  { id: 8, subtitle: "3. Touch your customers on a personal level." },
  {
    id: 9,
    text: "Simply addressing your customers by their first name makes a difference. Customers love it when you make efforts to connect with them in a deeper way. It makes them feel special when you remember their preferences. It’s part of your commitment to them to keep a record of their purchase history or to simply take a mental note of what they like and don’t like. What matters is that you make them feel that they matter because they do.",
  },
  { id: 10, subtitle: "4. Make your business more relatable and relevant." },
  {
    id: 11,
    text: "Put up a blog to start a conversation with your customers. Tell them something useful — something relevant that will change their lives. Improve your support desk to better entertain your customers. Your support desk is not merely a platform for solving problems and addressing issues; it’s an opportunity for you to meet your customers and have an actual encounter with them. It’s a chance for you to give them a positive experience to remember you by.",
  },
  {
    id: 12,
    text: "If you nail all four of these guidelines, you will surely see a rise in your customer base. Be passionate and determined, so the odds will turn to your favor. ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
