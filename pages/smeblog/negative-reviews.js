import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "How to respond to negative online reviews";
const paragraphs = [
  {
    id: 1,
    text: "You’ll get your own share of negative reviews as your business grows — it’s inevitable. And these negative reviews can take a toll on your business if you let them spin out of control. What you need to do is handle them delicately so they won’t leave a stain under your name. We’ve outlined here five of the things you can do when faced with negative feedback.",
  },
  { id: 2, subtitle: "1. Don’t take it personally." },
  {
    id: 3,
    text: "Don’t go on thinking that people are out to get you. It’s all purely business. When a customer says that he doesn’t like your product, well, maybe your product just isn’t right for him. It doesn’t mean that your business is lousy. Don’t expect to please everyone because when you identified your niche market, you didn’t have everyone in mind. As long as the right customers get you and appreciate you, you’re fine.",
  },
  { id: 4, subtitle: "2. Stay calm and don’t take the defensive side." },
  {
    id: 5,
    text: "When you read a negative review, take a deep breath and think. How can you handle the situation without looking unprofessional and incompetent? The answer is easier said than done: Apologize but don’t defend yourself. Offering an apology doesn’t necessarily mean that you admit you’re wrong. You may or may not be wrong, but your apology should extend to the feelings of your customers. Remember, the customer is the most valuable part of your business, and anything that upsets him should be of concern to you.",
  },
  {
    id: 6,
    text: "Unless you turn every critical comment and mistake to a learning experience, you will never grow.",
  },
  {
    id: 7,
    subtitle: "3. Empathize with the customer and ask how you can help.",
  },
  {
    id: 8,
    text: "A customer will never deliberately try to tarnish your name — always remember that. There’s always a reason for those negative reviews, and it’s your job to find out what it is. Try to see beyond the bitter words and reach out to the aggravated customer. How can you make him feel better? What can you do to make things right? You need to be committed to solving the problem and fixing the relationship. You can always turn a bad thing around if you’re committed enough.",
  },
  { id: 9, subtitle: "4. Look at it as an opportunity to grow and improve." },
  {
    id: 10,
    text: "Cut yourself some slack. So what if you get negative comments every now and then? You have the right to mess up once in a while. But what makes you a winner is what you do with your mistakes. You can whine and complain all you want, but that won’t get you anywhere. Find the root cause of the complaint or rant and act accordingly. If it’s a slow service, look for ways to optimize your work system. If the concern is rude staff, talk to your staff and inspire them to deliver quality and professional service. Unless you turn every critical comment and mistake to a learning experience, you will never grow.",
  },
  { id: 11, subtitle: "5. Drown the negative with the positive." },
  {
    id: 12,
    text: "What’s one negative review out of twenty positive reviews? Sure, your audience will still take that one negative review into consideration but, at least, you have 19 others to testify to your business’s integrity. Aim for 5 stars, but if you only get 4, that’s good enough, too. You can still earn your customers trust and confidence. ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
