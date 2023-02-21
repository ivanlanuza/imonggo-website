import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "How important are online reviews?";
const paragraphs = [
  {
    id: 1,
    text: "In an age where the Internet is increasingly becoming the champion source of information, online reviews are indispensable. Brands are quickly migrating to the digital platform. It won’t be long until the entire business world shifts online.",
  },
  {
    id: 2,
    text: "More important than the businesses still are the consumers. More and more of them are relying on the Internet before making decisions. According to BrightLocal’s 2015 Local Consumer Review Survey, 92% of consumers now read online reviews, compared to only 88% last year. That’s a 4% increase — a significant shift in the span of a year.",
  },
  {
    id: 3,
    text: "Moreover, the same survey found that star rating is the number one factor that shapes consumers’ judgment. Only 13% of consumers are likely to consider a business that has only one or two star ratings. This alone shows how figures can mold a potential customer’s opinion about a business.",
  },
  {
    id: 4,
    text: "Likewise, the survey also revealed that 40% of consumers already form their judgment after reading one to three reviews. This is compared to only 29% in 2014. Now, imagine that you have a store and that it has been reviewed online by past customers. Imagine your potential customers looking you up on Google, and the first three reviews they see about you are negative. Of course, after three negative reviews in a row, they would naturally distrust your business. It doesn’t matter if you’re really THAT bad — those negative reviews aren’t putting you in a good light.",
  },
  {
    id: 5,
    text: "This leads us to the first reason why online reviews are important.",
  },
  { id: 6, subtitle: "1. Online reviews shape your digital image." },
  {
    id: 7,
    text: "By the time customers step into your shop, they already have some background about the quality of your products and services. According to a survey, consumers read an average of six reviews, both positive and negative, before having an actual encounter with you.",
  },
  {
    id: 8,
    text: "Consumers are more empowered now than ever before. They share everything with one another through the Internet. One word from them can either build you or break you, so you better be on your guard.",
  },
  {
    id: 9,
    text: "You’re lucky if what they find satisfies them; otherwise, you’re screwed. Online reviews matter a great deal because they serve as the herald of your business. Make sure that when people talk about you, they have something positive to share.",
  },
  { id: 10, subtitle: "2. Online reviews affect your bottom line." },
  {
    id: 11,
    text: "A bad digital image leads to less traffic, and less traffic means lower conversion rates. Ultimately, lower conversion rates mean fewer purchases, and fewer purchases affect the bottom line negatively.",
  },
  {
    id: 12,
    text: "This is exactly why you need to know what kinds of reviews are made about you online. What are people saying about you? How do these reviews shape your brand and your digital image? Depending on your answers to these questions, online reviews can either be an added plus or a bigger problem.",
  },
  {
    id: 13,
    subtitle: "3. Online reviews impact your ranking in search engines.",
  },
  {
    id: 14,
    text: "When consumers try to look up your store through a search engine, the first thing they see is a bunch of reviews. Search engines love reviews because consumers are drawn to them. Consumers visit review sites frequently so these sites rank high in terms of search engine optimization (SEO). If your store is always featured, your rank will soar. But be careful that the reviews you garner are more positive than negative. You don’t want to be famous for the wrong reasons.",
  },
  {
    id: 15,
    text: "If you never cared about online reviews before, maybe now’s the time to change. Consumers are more empowered now than ever before. They share everything with one another through the Internet. One word from them can either build you or break you, so you better be on your guard. Remember, the success of your business lies at their fingertips.",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
