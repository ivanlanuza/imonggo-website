import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "How to garner positive online reviews";
const paragraphs = [
  {
    id: 1,
    text: "Online reviews can shape your overall brand image. When people talk about you in a positive way, they draw other potential clients into your business without you asking them. Positive reviews speak on your behalf; they testify to the excellence of your product. That’s why you need more of them for your brand image to stick. Here are six of the ways you can do that.",
  },
  { id: 2, subtitle: "1. Deliver positive experiences." },
  {
    id: 3,
    text: "Because, come on, how else are you going to get positive reviews if you don’t make your customers happy? Unless they get an experience amazing enough to be shared with their friends, you won’t get your amazing review.",
  },
  {
    id: 4,
    text: "Also, remember that there are only two reasons customers leave a review: first, when you disappoint them so much they want to warn the whole world about you; and second, when they’re so in love with your product that they want to share their joy with everyone else. Hope you don’t end up on the first extreme.",
  },
  { id: 5, subtitle: "2. Request for reviews." },
  {
    id: 6,
    text: "You don’t get what you don’t ask for. There are probably a handful of satisfied customers out there who are willing to give you an honest review; they just need a little prompting. Maybe you don’t inspire them enough to voluntarily drop a kind word for you, but they are usually ready to speak up about how your business means to them when asked.",
  },
  {
    id: 7,
    text: "No, this doesn’t mean that you should ask your customers to write you a positive review —that’s just pathetic and uncool. Just tell them that you welcome honest feedback, whether positive, negative, or neutral. Run through this with the right customers (your most loyal ones) at the right time (right after you give them an experience worth remembering) and in the right manner (politely — it is the only way).",
  },
  { id: 8, subtitle: "3. Engage customers through social media." },
  {
    id: 9,
    text: "Your customers are more likely to voice out their thoughts when you give them the right platform. What you can do is create an online circle where they can express themselves and share their experiences with one another. Social media is just perfect for this purpose. Just make sure that your Facebook, Twitter, LinkedIn, YouTube, and other social accounts are friendly enough to invite comments, but still professional enough to be taken seriously.",
  },
  {
    id: 10,
    text: "Post your finest testimonials on your website so potential clients will have an idea about what your loyal customers feel about you. It will not only showcase your best features but also give the face of your business an air of credibility.",
  },
  { id: 11, subtitle: "4. Keep the reviewing process easy." },
  {
    id: 12,
    text: "Don’t make writing a review too hard for your customers. Always keep in mind that you’re not their top priority — they have better things to do than leave a word for you. Simplify your review process so your customers don’t feel like they’d be throwing time away. Besides, you don’t want to come out as intrusive and demanding. Be courteous and straightforward so you don’t put them off.",
  },
  {
    id: 13,
    text: "One minimalistic way to ask for reviews is through a star rating. It’s effective, too — BrightLocal’s 2015 survey found that this type of review tops the list as the factor that shapes the judgement of consumers the most. Those stars will say a lot about your business.",
  },
  { id: 14, subtitle: "5. Be proud of your positive reviews." },
  {
    id: 15,
    text: "If you’ve gained positive reviews in the past, use them effectively to put you in a good position. There’s nothing wrong with being proud of your business assets once in a while. In fact, it shows that you are self-aware and confident about what you have. Post your finest testimonials on your website so potential clients will have an idea about what your loyal customers feel about you. It will not only showcase your best features but also give the face of your business an air of credibility.",
  },
  { id: 16, subtitle: "6. Respond to negative reviews graciously." },
  {
    id: 17,
    text: "Positive reviews are always worth commenting on, but so are some negative reviews. Be quick on responding to accusations and complaints about you online, but do it in a professional way. You don’t want to take the defensive tone, so just stay calm.",
  },
  {
    id: 18,
    text: "When you respond to a negative review, the reviewer feels validated and important because you heard him. If you handle his comment the right way, you will understand the true situation. You’ll get a better look at his intentions and your own shortcomings. Not only will it be a chance for you to turn things around; it will also be a learning experience through which you can improve and grow.",
  },
  {
    id: 19,
    text: "Ultimately, garnering positive reviews boils down to one thing, and that is to establish a brand image that you will be proud of. ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
