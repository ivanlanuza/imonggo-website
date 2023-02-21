import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "Four ways music can help your business";
const paragraphs = [
  {
    id: 1,
    text: "The power of music is recognized everywhere. In psychology, it is used as an instrument to influence how people think without them even noticing. In business, it is more or less brought into play for the same reasons. We have listed here four of the various ways good music can put your business in a better position.",
  },
  { id: 2, subtitle: "1. Music affects brand perception." },
  {
    id: 3,
    text: "Music has the ability to shape how customers perceive your business. A 1997 study conducted by A. North, D. Hargreaves, and J. McKendrick proves this. The study showed that even though customers didn’t think that music played a part in their judgment, a majority of them were still under the impression that the store in question was cool and modern when upbeat music was played, but tired and dull when slow rock music was performed.",
  },
  {
    id: 4,
    text: "Ryan James, chairman of the Glasgow Restaurant Association, knew exactly how music affects brand perception. He said, “Your music choice is a statement and it needs to show who you are as a business, individual, and company. If you get it right, people don’t even realize it’s happening but they’ll get the culture. It’s the psychology of business and retail.”",
  },
  { id: 5, subtitle: "2. Music tunes up the right atmosphere." },
  {
    id: 6,
    text: "The kind of music you play creates an atmosphere that customers are likely to associate with your brand. They may feel relaxed and laid back or tense and restless, all depending on what ambience you create through your music.",
  },
  {
    id: 7,
    text: "Your music choice is a statement and it needs to show who you are as a business, individual, and company. If you get it right, people don’t even realize it’s happening but they’ll get the culture. It’s the psychology of business and retail.",
  },
  {
    id: 8,
    text: "The same 1997 study mentioned before found that the nature of the customers’ perceptions about the store was largely affected by their perception of the music. The different musical styles and even the volume shaped how they viewed the store in terms of atmosphere. This only goes on to say that you can offer a more emotional experience to your customers simply by playing good music overhead.",
  },
  { id: 9, subtitle: "3. Music influences consumer behavior." },
  {
    id: 10,
    text: "Research has shown that you can influence the way your customers behave in your store by harnessing the power of music. For instance, you can control what the customers buy, and how long each customer visit lasts. You can even attract window shoppers to become actual customers. Music can be a magnet if you know how to use it to your advantage.",
  },
  {
    id: 11,
    text: "The same 1997 study provides a good demonstration of this. The study involved watching the sales of French and German wines in a large retail chain. When customers were inside, French and German music was played alternately. The results showed that when French music was played, French wine had three times more sales than German wine. On the other hand, when German music was played, German wine outsold French twice as much. Like in the other segments of this 1997 study, the customers claimed that they were not aware of the role music played in their buying choices.",
  },
  { id: 12, subtitle: "4. Music boosts staff efficiency." },
  {
    id: 13,
    text: "Music proves to be effective in influencing not only your customers but also your employees. The tempo of your music can determine the speed with which they accomplish tasks. The type of music can also influence their level of productivity and enthusiasm. Through music, you can engage your employees and boost their morale.",
  },
  {
    id: 14,
    text: "In another segment of the same 1997 study, the following two conclusions were made: that, first, employees exposed to fast music worked faster and accomplished more tasks than employees who were exposed to slow music or to no music at all; and, second, employees who were exposed to music while working were happier and more confident than employees who sat through work all day without music. ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
