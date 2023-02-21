import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "Increase traffic to your e-commerce site";
const paragraphs = [
  {
    id: 1,
    text: "The retail world is aggressively moving into the online platform. Traditional marketing that makes use of print ads and similar materials do not do the trick anymore. Today, your e-commerce site is essentially your gate to brand awareness and engagement.",
  },
  {
    id: 2,
    text: "These three tips may help transform your e-commerce site into a sales magnet.",
  },
  { id: 3, subtitle: "1. Showcase your products through pictures and videos." },
  {
    id: 4,
    text: "Consumers appreciate it more if products are shown to them rather than just promised. There is a big difference between telling prospects that you have an awesome product and letting them see for themselves. Of course, the best way to showcase your products is still through personal encounters, but in the case of e-commerce, pictures and videos go a long way. When you let consumers get a peek of what they could have, you’re getting hold of their trust.",
  },
  {
    id: 5,
    text: "Your blog won’t matter if you don’t know how to effectively use content to reel readers in.",
  },
  { id: 6, subtitle: "2. Post valuable content in your blog." },
  {
    id: 7,
    text: "Don’t waste people’s time by feeding them useless content. Learn what they find relevant so you can write something worth their while. It’s true that content marketing is difficult to master with all the SEO considerations. But your blog won’t matter if you don’t know how to effectively use content to reel readers in.",
  },
  { id: 8, subtitle: "3. Encourage user reviews." },
  {
    id: 9,
    text: "BrightLocals 2014 Local Consumer Review Survey shows that 88% of consumers trust online reviews as much as personal recommendations. If you have positive reviews under your name, you’re more likely to attract interested consumers. To achieve this positive online image, encourage users to leave you a review. You’ll know through them if your products and services are really as helpful as you take them to be.",
  },
  {
    id: 10,
    text: "Another thing you can do to increase traffic to your e-commerce site is to use promotional tools and apps. You can also engage in social media campaigns. Explore what works best for you.",
  },
  {
    id: 11,
    text: "Never stop looking for innovative ways to boost your e-commerce site. It has more potential than you can imagine to provide answers to your business concerns. ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
