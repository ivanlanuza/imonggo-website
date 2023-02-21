import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "4 ways to drive traffic to your store this holiday season";
const paragraphs = [
  {
    id: 1,
    text: "If there ever was a great time to start puffing up your business marketing strategy, it is now. Your customers are getting into the holiday spirit, and they are looking for ways to get the best shopping experience ever. This is where you can hop in and give them just what they want while driving more traffic to your store at the same time.",
  },
  {
    id: 2,
    text: "Here are a few of the things you can do to make your customers remember you this holiday season:",
  },
  { id: 3, subtitle: "1. Reinforce your social media presence." },
  {
    id: 4,
    text: "This is the perfect time of the year when you can ring your bells loudly to attract both existing and potential customers. Make sure that your social media accounts like Facebook, Twitter, Instagram, etc. are as fanciful as they can get. You can do this by posting interesting things about your business, or by setting up contests that will captivate your customers.",
  },
  { id: 5, subtitle: "2. Send holiday cards through email." },
  {
    id: 6,
    text: "Everybody wants to be remembered during the holidays. Sending a simple note to a customer goes a long way especially when it’s sincere. Tell your loyal customers how much you appreciate their support over the years. Tell them that their satisfaction is your top priority, and that their gratification is what inspires you to serve them better. By showing your customers that you appreciate their continued patronage, you can improve your relationship with them.",
  },
  {
    id: 7,
    text: "Everybody wants to be remembered during the holidays. Sending a simple note to a customer goes a long way especially when it’s sincere.",
  },
  { id: 8, subtitle: "3. Make special offers." },
  {
    id: 9,
    text: "It’s nice to ring up promotions every once in a while. Everybody loves the idea of getting a bonus or anything extra. If you offer your customers some incentives, they will surely be enticed. Can you give discounts? Then do it! Your customers will love you more for it.",
  },
  { id: 10, subtitle: "4. Improve your customer service." },
  {
    id: 11,
    text: "The holiday season is all about caring and sharing. What better way to embody the holiday spirit than giving your customers the warmest treatment they deserve? How about giving them a wide smile as they enter your store? Why not assist them from the moment they step through your door to the moment they walk out? If you have an online presence, why not give them extraordinary support when they need it? Be sure that you are up and ready to serve them any time of the day. Remember, it is the holidays. Time goes by much faster than on any other day, so you better be alert all the time.",
  },
  {
    id: 12,
    text: "The merriest and busiest time of the year is just around the corner. Are you ready to make the most of it? If not, you better get started!",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
