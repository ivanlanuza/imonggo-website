import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "Use pricing as a positioning strategy";
const paragraphs = [
  {
    id: 1,
    text: "Pricing can leverage your market positioning if you know how to use it as a branding tool. Those important numbers you associate with your products do more than just give you a lead on profits; they also proclaim the value of your brand.",
  },
  {
    id: 2,
    text: "You can create a reputation based on how you project your product’s value. If you’re the type of entrepreneur who stays in the competitive price zone where businesses usually contend with one another by offering low prices, the reputation you project may be a little less grand compared to those who dwell in the higher zones. You may be seen as easy, simple, and minimalistic since you offer cheap prices. The customers you’re likely to attract are those who want painless solutions for an easy price.",
  },
  {
    id: 3,
    text: "At the other extreme, there are the expensive brands. If you belong to this higher elite, you’re most likely to have a good reputation. Most people associate expensiveness with high quality, and high quality with expensiveness. This is because they’re conditioned to think that they get what they pay for. However, there are exceptions. Some expensive brands offer lousy products and services so they don’t succeed in business. Now, this puts pressure on all the high brands out there. Just offering expensive prices doesn’t seal the deal for a good reputation. Quality must still justify and warrant the high price.",
  },
  {
    id: 4,
    text: "Pricing is important, but it can’t stand on its own. It has to be considered side by side with marketing and other elements of business so that it can work as an effective branding tool. To paint this whole picture better, this is what Lawrence Steinmetz wrote in his book How to Sell at Margins Higher than Your Competitors: “The first thing you have to understand is the selling price is a function of your ability to sell and nothing else. What’s the difference between an $8,000 Rolex and a $40 Seiko watch? The Seiko is a better timepiece. It’s far more accurate. The difference is your ability to sell.”",
  },
  {
    id: 5,
    text: "With pricing and all the right elements in the right places, you can position your business better in the market.",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
