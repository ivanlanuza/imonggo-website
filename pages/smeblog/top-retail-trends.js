import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "Top retail trends of the future";
const paragraphs = [
  {
    id: 1,
    text: "The chief executive of the Institute of Grocery Distribution, Joanne Denney-Finch, gave a talk entitled, “Forward Thinking: Trends that Shape the Future of Retail”, in the 17th Asia-Pacific Retailers Convention and Exhibition held in Manila, Philippines last October 28-30, 2015.",
  },
  {
    id: 2,
    text: "Denney-Finch outlined four trends that will define the course of retail in the future, namely: the reinvention of stores, the merger of online and offline worlds, new ways of marketing, and changing the supply chain.",
  },
  { id: 3, subtitle: "Store Revaluation" },
  {
    id: 4,
    text: "Contrary to what early adopters of e-commerce imagined, the physical store is far from dying. It may have been overshadowed by digital stores lately, but it is still as important as ever, and retailers are beginning to realize this.",
  },
  {
    id: 5,
    text: "Reinventing physical stores is a part of the cycle that governs retailers and consumers alike. Changing the store mechanics is a response to the increasing demand for better customer experience. At the same time, it establishes the presence of a brand.",
  },
  {
    id: 6,
    text: "Piers Fawkes, founder and editor-in-chief of PSFK, explained it better. He said, “Imagine the expectations people have with their online shopping experience. They expect personalization, recommendations, recognition, recollection, access, service. People want that same seamless experience when they are in the real world, often through their personal device.” Reinventing the physical store is a must for retailers today.",
  },
  { id: 7, subtitle: "Online-Offline Mash-up" },
  {
    id: 8,
    text: "In her APRCE speech, Joanne Denney-Finch said, “Online and offline are complementary ways to reach customers and regain loyalty.” What some retailers fail to understand is the importance of merging the two platforms to strengthen brand presence and reach consumers better.",
  },
  {
    id: 9,
    text: "Omnichannel retailers set the example that everyone else must follow. Scott Falzone, industry director of retail specialty at Google, said that omnichannel retailers inclination to the digital world is “increasingly focused on driving customers and shoppers into their store locations, as well as continuing to have a growing e-commerce and mobile commerce presence.”",
  },
  {
    id: 10,
    text: "Retailers need to stop distinguishing themselves as either online or offline; rather, they should try to understand what platform best suits them in delivering the needs of their customers.",
  },
  {
    id: 11,
    text: "Contrary to what early adopters of e-commerce imagined, the physical store is far from dying. It may have been overshadowed by digital stores lately, but it is still as important as ever, and retailers are beginning to realize this.",
  },
  { id: 12, subtitle: "Marketing Innovations" },
  {
    id: 13,
    text: "A notable Czechoslovakian writer, Milan Kundera, said, “Business has only two functions: marketing and innovation.” The core principle of retail is about making the customer happy, so retailers are constantly finding ways to drive those two aspects of business forward.",
  },
  {
    id: 14,
    text: "Marketing, specifically, needs to see more innovative approaches to increase customer engagement. A brilliant promotion like McDonalds McSundae Melt in Germany, for example, is among the most laudable promotions in recent times. Synqera, a mood recognition software company in Russia, is also among the most advanced.",
  },
  {
    id: 15,
    text: "Moreover, Denney-Finch emphasized the importance of trust and transparency in marketing. According to her, some of the strategies that retailers can apply are publishing the cost and profit margin of each product they sell, supporting local community to heighten engagement, and expanding their campaign for nutrition. These small initiatives will ball up in the long run to help establish a solid relationship between retailers and consumers.",
  },
  { id: 16, subtitle: "Supply Chain Remodeling" },
  {
    id: 17,
    text: "The retail supply chain plays an integral role on how consumers receive goods from suppliers. Without a solid framework to govern it, the retail process will fall apart.",
  },
  {
    id: 18,
    text: "Joanne Denney-Finch has an idea to optimize the retail process, and that is to cut out the middlemen. Middlemen take the biggest share in both time and money factors. Erasing them from the picture altogether means faster delivery of goods for lower prices. Since consumers today are more sensitive about time and price, optimizing the supply chain will make them much happier. When the customer is happy, everyone’s happy.",
  },
  {
    id: 19,
    text: "Every day, new retail solutions emerge to address all consumer problems from small nuisances to serious dilemmas. As such, Denney-Finch said that retailers are faced with a major challenge: to do the ordinary extraordinarily well, and consistently. By doing so, retailers cannot just meet the standards of today, but also set the standards of tomorrow. ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
