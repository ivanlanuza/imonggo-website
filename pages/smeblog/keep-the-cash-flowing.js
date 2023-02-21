import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "5 Ways to keep the cash flowing into your store";
const paragraphs = [
  {
    id: 1,
    text: "Money is what sustains a business. If you don’t have enough of it at the right time to keep your store running, your business will eventually die. You may be anticipating a large profit in the coming months, but unless you have a proper cash management system, that large sum is useless. What you need is a solid cash flow to keep your business alive.",
  },
  {
    id: 2,
    text: "Here are a few tips on how to improve the flow of money into your business account:",
  },
  { id: 3, subtitle: "1. Initiate a collection process." },
  {
    id: 4,
    text: "Don’t delay receiving cash. If you have receivables, collect them right away. Always collect full payments upon the completion of a project or the delivery of a product. Don’t wait a day or so to do this; otherwise, you’re just letting others spend your money.",
  },
  {
    id: 5,
    text: "Another smart thing to do is to restock your inventory the same time your customers pay you. That way, you have money to spend when you need to.",
  },
  {
    id: 6,
    subtitle:
      "2. Seek assistance from a financial adviser or professional accountant.",
  },
  {
    id: 7,
    text: "If you’re not a financial whiz yourself, it is imperative that you ask for the help of a professional when it comes to your business funds. Don’t look at hiring an accountant as a liability; it is more of a great asset to your company in the long run. An accountant can help you analyze your cash flow and review future projections. This is absolutely important if you want to maximize cash in your business.",
  },
  {
    id: 8,
    text: "Some of these methods may involve putting down some cash, but remember that every investment you make for your business will eventually pay off.",
  },
  { id: 9, subtitle: "3. Increase profits." },
  {
    id: 10,
    text: "If you want money to come, you may consider boosting the source of your income. Evaluate your store and review the market. Do you think raising your selling price will do more good than harm to your business? Check the performance of your employees. Do you think training here and a workshop there will help them improve? What about publicity? Do you need to invest more on marketing?",
  },
  {
    id: 11,
    text: "Some of these may involve putting down some cash, but remember that every investment you make for your business will eventually pay off.",
  },
  { id: 12, subtitle: "4. Reduce operating costs." },
  {
    id: 13,
    text: "Review your monthly cash flow statement (you should have one, by the way) and see how much of your money goes to paying the bills. You’ll be surprised at how big a chunk you devote for this. If you reduce your operating costs and go green every now and then, your bills won’t be that high. You see, being environmentally friendly is not just poetic; it’s also very practical.",
  },
  { id: 14, subtitle: "5. Liquidate obsolete inventory." },
  {
    id: 15,
    text: "Some items tend to sit on the shelves for a long time. Sometimes, you don’t notice it but they sit there until they’re no longer sellable. It may be a case of expiration or obsoleteness —whatever the cause, certain items need to be rid of immediately to make way for new ones. To turn an obsolete item into cash, you can put it on sale. Get creative and sell it hard with price reduction. It’s no good sitting around collecting dust in your store, anyway.",
  },
  {
    id: 16,
    text: "Remember, managing your cash flow is important if you don’t want to be caught off-guard in dealing with financial matters. Make sure that your cash flow can sustain your day-to-day operations and keep your business running. ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
