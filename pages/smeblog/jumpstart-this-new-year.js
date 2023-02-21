import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "5 Ways to jumpstart your business this New Year";
const paragraphs = [
  {
    id: 1,
    text: "A big challenge is imposed by the new year: step up your game or go down and lose your shot. Your customers are looking for something fresh and innovative to start this year with, and unless you give them exactly what they want, you’re a goner.",
  },
  {
    id: 2,
    text: "Here are a few tips to help you jumpstart your business this new year:",
  },
  { id: 3, subtitle: "1. Make your presence known." },
  {
    id: 4,
    text: "The first thing you need to do after all the firecrackers have exploded is to remind your customers that you’re still alive and kicking. Send them a personal e-mail or reach them through your blog. What’s important is you give them something substantial that engages them and makes them understand your business better.",
  },
  { id: 5, subtitle: "2. Boost your marketing efforts." },
  {
    id: 6,
    text: "If you have been in the retail industry for quite a while, then you should know by now that it doesn’t matter how great your products or services are if no one knows about them. You need to come up with some creative advertising to promote your business. You can do this by ringing up a promotion or using social media as a marketing tool. And, of course, don’t forget that word-of-mouth advertising is still the best marketing device. Let your happy customers speak for you. Always keep them on the loop so they can spread the word and help you grow your business.",
  },
  {
    id: 7,
    text: "You should stay true to your core year after year while also making sure that you never stop innovating.",
  },
  { id: 8, subtitle: "3. Ask your staff for ideas and opinions." },
  {
    id: 9,
    text: "Your true gems are already inside your store. Your loyal employees surely have valuable insights that are just waiting to be heard. Make sure that you provide a platform for these precious mind gems to shine. It is important that you always connect with your employees, especially now that another year with them is at hand. You need to solidify the foundation of your work ethic so that you can start surging forward with the least difficulty.",
  },
  { id: 10, subtitle: "4. Plan your year ahead." },
  {
    id: 11,
    text: "Never take your eyes off the prize. You should stay true to your core year after year while also making sure that you never stop innovating. Set up your goals and plan your year ahead. Make a timeline and set a target date for each important milestone that your business anticipates to take on this year. Break down your goals from months to weeks to days. Learn how to strategize.",
  },
  { id: 12, subtitle: "5. Stay positive." },
  {
    id: 13,
    text: "Of course, most important of all is that you keep your optimism no matter what happens. Attract good vibes so that your employees will feel the same way and relay to the customers the same positive energy. Be ready to face every challenge with a smile in your face.",
  },
  {
    id: 14,
    text: "Your goal for this year should not be to do well but to do better. Always give it your best shot. It doesn’t matter if you get your big break right away or not; its always worth the try. ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
