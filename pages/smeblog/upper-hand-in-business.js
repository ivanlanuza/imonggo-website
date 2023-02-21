import BlogTemplate from "components/smeblog/BlogTemplate";

const title =
  "The innovation game: Are you playing the upper hand in business?";
const paragraphs = [
  {
    id: 1,
    text: "William Pollard once said, “Without change, there is no innovation, creativity, or incentive for improvement. Those who initiate change will have a better opportunity to manage the change that is inevitable.”",
  },
  {
    id: 2,
    text: "Innovation is the creed in the evolving business landscape. Players who define and redefine the market set the rules of the game. Those who play offense are usually on the lead, while those on defense are left with no choice but to play catch-up.",
  },
  { id: 3, text: "What does this mean for you?" },
  {
    id: 4,
    text: "It’s important that you identify which card you’re playing so you know what strategies to apply to improve your odds in business.",
  },
  {
    id: 5,
    text: "If you’re playing offense, then that’s good. It means that you’re the trendsetter — you pursue opportunities that your competitors have missed. As the leader in the industry, you now have a direct course to take.",
  },
  {
    id: 6,
    text: "Geoffrey Moore, an organizational theorist and author of Crossing the Chasm, stressed that an offensive player in the game of innovation must act in the order of differentiation, neutralization, and optimization.",
  },
  {
    id: 7,
    text: "Differentiation, according to Moore, is “what will cause them [the customers] to jump on your bandwagon early, long before your product is fully built out or your ecosystem has matured.” In this stage, you will have to look for people who want your disruptive technology. You want early adopters who are willing to bet on you.",
  },
  {
    id: 8,
    text: "When you’re successful in differentiating, the next step for you is neutralizing the game. Here, you need to prove that you can keep up with your own innovations. People do not expect you to come up with new things now that you have shown them that you can. Instead, they expect you to stay in the game and keep your stance.",
  },
  {
    id: 9,
    text: "When you have differentiated and neutralized, all that’s left for you to do is to optimize your innovation. In the optimization stage, you’re expected to lower your prices down while keeping your products and services exceptional as usual. Your audience will expect the same level of excellence from you but in a more cost-effective way.",
  },
  {
    id: 10,
    text: "But what if I’m not the disruptor, you may ask. What if you’re playing defense instead of offense? What if you’re the one trying to keep up to stay in the game?",
  },
  {
    id: 11,
    text: "If that’s the case, then you have to employ a slightly altered approach to innovation. Instead of differentiating from your competitor, neutralize the game first. Moore said, “What you have to do is blunt the appeal of their offer by co-opting enough of their magic ingredient such that your customer base is not seduced to defect. You don’t have to outperform them in their area of greatest differentiation. You just have to shrink the distance between your two offers.”",
  },
  {
    id: 12,
    text: "Needless to say, you can’t go on in business forever without a breakthrough. That said, the last and indeed the most important thing you need to do is to differentiate. Create your own disruption. Define your own trend.",
  },
  {
    id: 13,
    text: "When you have successfully neutralized the disruption, you’re now ready to optimize your products and services by lowering your costs. If you want to stay in the game, you need to step up to the challenge.",
  },
  {
    id: 14,
    text: "Needless to say, you can’t go on in business forever without a breakthrough. That said, the last and indeed the most important thing you need to do is to differentiate. Create your own disruption. Define your own trend. Be the leader in the business landscape once and for all. You can’t be on the defensive side forever. You need to take over and gain the upper hand once in a while.",
  },
  {
    id: 15,
    text: "Take it from Gary Hamel, one of the most influential business thinkers in this era. He rightfully asserted, “Many of us understand that innovation is enormously important. It’s the only insurance against irrelevance. It’s the only guarantee of long-term customer loyalty. It’s the only strategy for outperforming a dismal economy.” ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
