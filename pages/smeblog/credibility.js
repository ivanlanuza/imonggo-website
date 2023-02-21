import BlogTemplate from "components/smeblog/BlogTemplate";

const title =
  "Credibility is what you need to spur the growth of your business";
const paragraphs = [
  {
    id: 1,
    text: "Small entrepreneurs are faced with the challenge of establishing credibility. It’s never easy to build a solid support group composed of loyal customers who believe in your brand. It takes more than a brilliant idea and a day of hard work to get people to climb aboard. Remember, you don’t have the advantage of reputation.",
  },
  {
    id: 2,
    text: "Under the circumstances, how do you play this game? How can you move forward as a small entrepreneur in a world jammed full with business giants and corporate goliaths? Credibility — that’s the answer.",
  },
  { id: 3, subtitle: "1. Build a good digital image." },
  {
    id: 4,
    text: "Almost everything is done in the internet these days. As a business, especially, having an online presence can sometimes mean a matter of life and death. With a digital presence, you can reach potential customers wherever they are.",
  },
  {
    id: 5,
    text: "Get people to notice you by creating relevant content that reflects your vision and gives your brand a human face. Your digital image largely contributes to the general reputation you get in the future. A good website and a few positive mentions here and there will help a lot in building your credibility.",
  },
  { id: 6, subtitle: "2. Celebrate your achievements." },
  {
    id: 7,
    text: "Every small but important milestone in your career is a cause for celebration. There is no place for a timid entrepreneur in an aggressive market like this. Share your victories and declare your achievements. Every little highlight is something to be proud of; every achievement is a step closer to earning people’s respect.",
  },
  {
    id: 8,
    text: "Nothing kills credibility faster and harsher than dishonesty. Try to be as genuine and sincere as possible.",
  },
  { id: 9, subtitle: "3. Ask for testimonials and endorsements." },
  {
    id: 10,
    text: "Good things always come from keeping a network of connections. If you have a strong communication base with customers, you can expect some kind words from time to time. Ask your loyal customers if they would like to testify to the integrity of your brand. Ten to one you can count on them to do this.",
  },
  {
    id: 11,
    text: "If you have connections with other reputable companies, you can ask them to endorse you. If your brand is genuine and compelling enough, they might just accept your invitation.",
  },
  { id: 12, subtitle: "4. Be honest and transparent." },
  {
    id: 13,
    text: "Nothing kills credibility faster and harsher than dishonesty. Lying is a foul game, especially when it’s done to manipulate others. Try to be as genuine and sincere as possible. Besides, your customers will know the difference between an honest brand and a sellout.",
  },
  { id: 14, subtitle: "5. Be confident without overpromising." },
  {
    id: 15,
    text: "Your brand is larger than you — take that in mind. It doesn’t matter if you only have 7 employees or a house room for an office. If you think big and act big, you can compete in the market. It all boils down to the kind of attitude you have in pitching your business. If you belittle yourself or see your efforts as small and irrelevant, you’re screwed. But if you project yourself as a strong brand that can conquer anything, you’re ready for the big leagues.",
  },
  {
    id: 16,
    text: "Remember that building credibility is a long and unpredictable road. It can take years of hard work to achieve anything substantial, but destroying everything could be a matter of minutes. There’s no telling what will happen, so you should just be prepared for every possible outcome. Always put a brave face and do what is best for your business. ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
