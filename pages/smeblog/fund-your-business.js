import BlogTemplate from "components/smeblog/BlogTemplate";

const title =
  "3 ways to convince your family and friends to fund your business";
const paragraphs = [
  {
    id: 1,
    text: "The biggest challenge that you as a budding entrepreneur may face is how to finance your business. You may have the best idea for a start-up, but unless you have the money, your idea will just be another brilliant what-if in the bin. You live in an era where almost everyone is trying to take a shot at success, so it takes more than one brilliant idea to make you stand out from the crowd.",
  },
  {
    id: 2,
    text: "Entrepreneurs like you are getting creative as to where they get the money to fund their business. A few tend to borrow money from banks; others try venture funding or angel investments. Some afford to get their business running with their own savings, while others turn to the Small Business Administration (SBA) for loans. If you have exhausted all these means, you still have one shot: ask for the help of family and friends.",
  },
  {
    id: 3,
    text: "Before you go on spending your loved ones’ money, however, you should keep in mind that doing so puts you at risk of losing personal relationships. You better think this one through. When you’re 100% sure that you want to do this, take the following tips:",
  },
  { id: 4, subtitle: "1. Present them with a solid business plan." },
  {
    id: 5,
    text: "To get your family and friends to hop in with you in your business venture, you need to show them how serious you are to make things happen. Present them with a solid business plan that outlines how much funding you need, where the funds will go, and when you expect to earn the money back and repay them. Remember to allot funds for your seed money to start your business, your working capital to sustain your business until you hit the breakeven point, and home capital to sustain you personally. Also, include in your business plan the what-ifs that may hit you in the road. And in case something unexpected comes up, a contingency plan would be helpful, too.",
  },
  {
    id: 6,
    text: "You may have the best idea for a start-up, but unless you have the money, your idea will just be another brilliant what-if in the bin.",
  },
  { id: 7, subtitle: "2. Convince them that you are worth investing in." },
  {
    id: 8,
    text: "If you have strong bonds with your family and friends, it’s most likely that you won’t need a lot of convincing to do because it’s most probable that they already believe in your capability to turn a vision into reality. Still, you have to treat them like you would a real investor. You have to clear out any fog in their minds and make them confident in your ability to handle things on your own. After all, it’s their money you’re putting out there. You have to do this not only for the welfare of your business but for the good of your personal relationships as well.",
  },
  { id: 9, subtitle: "3. Make a payment plan." },
  {
    id: 10,
    text: "Communicate clearly to your family and friends how you would pay them back. Consider every possibility so you can solve a problem before it comes. Work out every possible issue ahead of time. Be clear about your intentions and your goals so that when payback time comes, there will be no trouble. A payment plan will help you secure their trust and will make them latch on more willingly.",
  },
  {
    id: 11,
    text: "Again, take in mind that asking help from close companions should not be number 1 in your list in terms of business funding. Acknowledge the fact that your business venture may fail, and when it does, you don’t want nobody answering the door when you ask for support. ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
