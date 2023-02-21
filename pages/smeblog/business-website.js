import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "Why you need to have a business website";
const paragraphs = [
  {
    id: 1,
    text: "Almost 80% of the developed world has an online presence, so companies are deliberately building their empires in the digital platform. If you want to succeed in the market, you have to establish your brand in both physical and virtual channels. What better way to achieve digital presence than setting up your own business website?",
  },
  {
    id: 2,
    text: "The Internet is a powerful marketing tool if you know how to use it to your advantage. When you create your own business website, you are in for a couple of benefits. One of them is establishing your own credibility. A good website will give your company a professional image that will make your customers trust you more.",
  },
  {
    id: 3,
    text: "Another benefit you can get is the opportunity to showcase your brand without physically interacting with customers. They can access information about your products and services anytime, anywhere. It’s convenient for them and favorable for you.",
  },
  {
    id: 4,
    text: "Lastly, with a website, you are sure to target a wider market. The scope of your reach will go beyond your loyal patrons and extend to other potential customers. People may stumble upon your website by accident, and when they find it compelling enough, they will switch to your brand. This scenario shows how building a website is a cost-efficient and fast way for you to acquire new customers.",
  },
  {
    id: 5,
    text: "So far, what you know are the advantages of having a website for your business, but how exactly do you gain those advantages? There are two important aspects that you have to consider: content creation and search engine optimization (SEO).",
  },
  {
    id: 6,
    text: "Studies have shown that visitors assess a website’s worth in the span of four seconds. After that short time, they decide whether they want to stay or leave. That puts a lot of pressure for you to create relevant and attractive website content. You have to make visitors believe that it will be worth their time if they stick around for a bit.",
  },
  {
    id: 7,
    text: "It doesn’t end there. It doesn’t matter if you have good content if no one will see it. You need to optimize your search engine visibility so you can gain exposure. This is crucial in order for you to gain an audience in the digital world. If you can do this, you can reap the benefits of having a website for your business.",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
