import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "Customer conversion is your shot to business growth";
const paragraphs = [
  {
    id: 1,
    text: "Imagine your sales floor swarming with people. A middle-aged man is picking up an item from the shelf, and an older woman is examining one of your posters. You have every reason to be delighted with this scenario, if not for the fact that none of these people — not a single one — is your customer. Everyone is a mere passerby who has decided that your store is good for window shopping.",
  },
  {
    id: 2,
    text: "At this point, of course, you are already frustrated. What are you doing wrong? Why do these people enter your store, linger for a minute or two, and then just leave empty-handed? Why don’t they patronize your brand?",
  },
  {
    id: 3,
    text: "It’s good that you’re asking yourself this because it shows that you’re concerned about the welfare of your business. If you must know, “Your biggest opportunity for growth is converting consumers that pass by you,” as Kelvin Kelley, co-founder and principal of the design strategy firm Shook Kelley, puts it. Customer conversion may not be your strength right now, but it’s never too late to learn.",
  },
  {
    id: 4,
    text: "“Whether it’s a Harley or a baking soda, you need to make your customers feel that your product is something that will change their lives.”",
  },
  {
    id: 5,
    text: "Customer conversion is known around the business circle as the point at which you, the retailer, get a consumer to respond positively to your call to action. When that middle-aged man decides to buy the item he lifted from the shelf, and when that older woman avails one of your services because she was inspired by your poster, then congratulations! You have just converted two random consumers into your own customers.",
  },
  {
    id: 6,
    text: "But how do you do that? What can you do to increase your conversion rates? Whether your store is online or offline, here are some of the concrete ways by which you can convince a passerby that your brand is worth a shot:",
  },
  { id: 7, subtitle: "1. Be genuine. " },
  {
    id: 8,
    text: "Make sure that the legacy you’re communicating with your customers is real. Provide customer testimonials to strengthen your appeal.",
  },
  { id: 9, subtitle: "2. Be credible. " },
  {
    id: 10,
    text: "Remember that if customers do not trust you, they won’t transact with you. Unless you make a plausible and commendable brand identity, no one will patronize you.",
  },
  { id: 11, subtitle: "3. Be attractive. " },
  {
    id: 12,
    text: "Everyone likes beautiful things. If you appeal to your customers on a sensational level, they will be drawn to you.",
  },
  { id: 13, subtitle: "4. Be reachable. " },
  {
    id: 14,
    text: "Let your customers know that you are always happy to serve them. Give them your contact information so they can readily call you when the need arises.",
  },
  { id: 15, text: "Lastly, and most importantly…" },
  { id: 16, subtitle: "5. Be relevant. " },
  {
    id: 17,
    text: "Kevin Kelley said, “Whether it’s a Harley or a baking soda, you need to make your customers feel that your product is something that will change their lives.” You don’t have to be relevant to everyone. You just have to be relevant to your chosen audience.",
  },
  {
    id: 18,
    text: "If you meet or surpass all these principles, you are sure to lead your business to success through customer conversion. Good luck! ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
