import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "3 benefits of having a business page on Facebook";
const paragraphs = [
  {
    id: 1,
    text: "Facebook is the most popular social media network, so it’s no surprise that many are using it as a platform for their business. As a world on its own, Facebook can virtually connect everybody around the globe. For this reason and for many others, business owners are reaping the benefits that this social media giant’s influence has over many.",
  },
  {
    id: 2,
    text: "Here are three of the most important reasons why Facebook can be a gain for your business, too.",
  },
  { id: 3, subtitle: "1. Establish your brand." },
  {
    id: 4,
    text: "A business account on Facebook is as good as any marketing strategy since it allows you to advertise your brand to both your old and potential customers. What’s great about this is that it costs a lot less than a regular marketing venture, without sacrificing effectiveness.",
  },
  {
    id: 5,
    text: "Also, Facebook has an analytics application called Facebook Insights, where you can analyze your customers’ behavior based on what they input into their profiles. You can use this information to understand your target audience, and to deliver advertising materials specifically tailored to their interests.",
  },
  {
    id: 6,
    text: "A Facebook page for your business can help establish your identity if you use its multiple pages and tabs to display relevant information, i.e. your business history, your mission, awards, products, and projects. That way, people will understand your brand better.",
  },
  { id: 7, subtitle: "2. Connect with potential customers." },
  {
    id: 8,
    text: "Facebook opens an opportunity for growth in business. Since Facebook is optimized with search engines, your brand can be quickly indexed into Google, Bing, and other search engines, depending on the keywords you use in your business page title. Potential customers can see your business profile, and if you interest them enough, they will surely patronize your brand.",
  },
  {
    id: 9,
    text: "Moreover, you can direct new traffic to your Facebook page through likes and shares. When your fans like or share a post you made, their friends will see it. Your fans’ friends are potential customers, too, so you are basically achieving multi-level marketing. You’re targeting not only your existing customers but also your potential patrons.",
  },
  {
    id: 10,
    text: "“As a world on its own, Facebook can virtually connect everybody around the globe.”",
  },
  {
    id: 11,
    text: "Your Facebook page can also steer traffic into your business website and blog if you include a link to them in your page. And, if your website and blog are good, your new visitors will be exposed to more compelling advertising, and hopefully, they will fall in love with your brand.",
  },
  { id: 12, subtitle: "3. Stay in touch with loyal customers." },
  {
    id: 13,
    text: "Facebook can help build long-lasting relationships with your customers. Since Facebook is an interactive platform, you can stay in touch with your customers all the time. Likewise, they can interact with one another to create a community spurred on by your brand.",
  },
  {
    id: 14,
    text: "To keep your customers posted, you can create Facebook alerts that will notify your fans of events, campaigns, discounts, and special offers. They will know that you’re still active if you make a buzz from time to time.",
  },
  {
    id: 15,
    text: "Perhaps the best thing about Facebook for business is the greater avenue for customer support. Given the fast pace of the social media world, you can (and indeed are expected) to respond to queries and to address problems faster than you would in your website. If you do this, you will increase your customer satisfaction, and develop customer loyalty to your brand. ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
