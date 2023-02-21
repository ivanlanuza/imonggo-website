import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "9 mindsets that cultivate strong customer relationships";
const paragraphs = [
  {
    id: 1,
    text: "Contrary to common view, business isn’t all about money. What’s important in business is building a name, an identity that embodies a legacy — and that’s not possible without the participation of customers.",
  },
  {
    id: 2,
    text: "If you represent a brand, then you know how important it is to acquire customers and to keep them wired to you. We outlined for you a few things to help you forge lasting bonds with them. It all boils down to these nine mindsets:",
  },
  {
    id: 3,
    subtitle: "1. Customers are people, not numbers. Treat them as such.",
  },
  {
    id: 4,
    text: "The no. 1 mistake you can make is to look at a customer and see random statistics rather than an individual with personal needs. Every customer is unique. If you apply the same action to every complaint without looking at the small details and understanding the bigger picture, you’re at risk of losing your brand personality. When that happens, your customers will find it difficult to relate with you. Consequently, they’ll leave you for another brand that touches them on a personal level.",
  },
  {
    id: 5,
    subtitle: "2. Nothing will happen if you sit around. Exert effort.",
  },
  {
    id: 6,
    text: "The market is expanding. You can’t rely on organic growth anymore. You have to get out there. Strive for more publicity so that consumers will know that you exist and that you are a choice. Retail has approached the age of omnichannel marketing. Take advantage of that and uncover your full business potential.",
  },
  { id: 7, subtitle: "3. You don’t want your customers bored. Engage them." },
  {
    id: 8,
    text: "Consumers nowadays are easily distracted. If you’re the distractor, you’re safe since you’re opening a new opportunity for yourself. On the other hand, if your competitor is the distractor, you’re on shaky grounds. You have to find ways to engage your customers so they won’t look anywhere else. You can do this by generating innovative ideas. In a competitive landscape like retail, you can’t afford to lie low even just for a minute.",
  },
  {
    id: 9,
    subtitle:
      "4. Brand experience is what makes you memorable. Keep it pleasant.",
  },
  {
    id: 10,
    text: "A Chinese proverb says, A man without a smiling face must not open a shop. Charisma is a crucial part of business. You can’t reach the customer on an emotional level if you’re all work. Your customers are people, too. They will appreciate one thoughtful question, or even a simple smile. Try to give your brand a soul so that your customers will feel you, and they’ll be glad to be on a journey with you.",
  },
  {
    id: 11,
    subtitle:
      "5. Loyal customers are your best sales force. Build a network with them.",
  },
  {
    id: 12,
    text: "Customers who come back are your most important gems. They are the sales people you don’t need to give paychecks to. Your loyal customers acquire new patrons for you and convert skeptical consumers into your disciples, without you even asking. How do you get them? Walt Disney said, “Do what you do so well that they will want to see it again and bring their friends.” Treasure your customers in such a way that they’ll believe in your product, and they’ll want the whole world to believe in it, too.",
  },
  { id: 13, subtitle: "6. Your customers have something to say. Listen." },
  {
    id: 14,
    text: "Sometimes, businesses come out phony because they dictate instead of listen. You don’t want to be one of those businesses that talk smart and impose solutions. If you acknowledge that each customer is unique, then you’ll respect him and you’ll listen to him. Nothing makes a customer feel more valued than a willing ear that genuinely listens. Make sure you give him that.",
  },
  { id: 15, subtitle: "7. Don’t oversell. Over-deliver instead." },
  {
    id: 16,
    text: "When you give your customers a big impression, they expect a lot of nearly impossible things from you — and if you don’t meet those expectations, they’ll be disappointed. The wise thing to do is to make a good name for your brand without compromising credibility. That way, your customers will expect good but scalable things that you can always surmount. Nelson Boswell, author of Inner Peace, Inner Power, said, “Always give people more than what they expect to get.” You can only raise the bar if you don’t set it too high in the first place.",
  },
  { id: 17, subtitle: "8. You’re at risk of being forgotten. Keep in touch." },
  {
    id: 18,
    text: "It’s never your customer’s obligation to track your progress; it’s your responsibility to keep them hooked. To maintain your thread of communication with customers, elicit feedback from them and give them feedback in return. Healthy, frequent communication will help you build a lasting relationship.",
  },
  { id: 19, subtitle: "9. Be consistent with your brand. Build an identity." },
  {
    id: 20,
    text: "Remember that identity is more important than money. You can be the most financially thriving business in your field, but without an identity — a defining factor — your success will be short-lived. In order to brave the challenges imposed by both the present and future, you need a name that endures and a legacy that carries on. Without that, you’re just another faded sign on the block.",
  },
  {
    id: 21,
    text: "Let Sam Walton’s words echo in your head. The founder of Wal-Mart said, “There’s only one boss — the customer. And he can fire everybody in the company from the chairman on down simply by spending his money somewhere else.”",
  },
  { id: 22, text: "Keep the boss happy. Forge strong bonds." },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
