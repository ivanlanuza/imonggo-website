import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "How to clean up your store after a busy holiday";
const paragraphs = [
  {
    id: 1,
    text: "The holiday season was a lot of fun for everyone. Now that it’s almost over, we still have a little bit of a hangover. For some of us, getting over the merriment may not be ideal but absolutely necessary. The time of celebration is bound to end at some point, and when the lights are no longer twinkling, the resulting mess becomes more and more apparent.",
  },
  { id: 2, text: "Hence, cleaning." },
  {
    id: 3,
    text: "Nobody likes to clean up after the holidays, but everybody has to, eventually. Here are some pointers to help you clean up in your brick-and-mortar store after a fun celebration.",
  },
  { id: 4, subtitle: "1. Put the decorations away." },
  {
    id: 5,
    text: "That small Christmas tree on one corner of your store will soon look out of place if you don’t put it away now. Christmas is immediately followed by the New Year so if that tree is still standing there when the fireworks are dancing in the sky, you will look like you were too lazy to put things where they’re supposed to be — and in the case of the Christmas tree, it’s supposed to be hidden in a box by then.",
  },
  {
    id: 6,
    text: "Other decorations must be packed away somewhere else, too. You can replace these old Christmas ornaments with ones that go with the New Year.",
  },
  { id: 7, subtitle: "2. Scrub the walls and mop the floors." },
  {
    id: 8,
    text: "Maybe you werent raucous enough to actually make your walls so dirty it would need a scrubbing. But in preparation for the New Year, you should really scrub them. Also, you should give your floor a mopping so it’s clean and shiny come the 1st of January. Make sure that when your customers see you in the New Year, you give them a fresh feel.",
  },
  {
    id: 9,
    text: "If you want your customers to feel a little excited, innovate on your store design a little bit. A simple reshuffling here and there will usually do the trick.",
  },
  { id: 10, subtitle: "3. Fashion a new store layout." },
  {
    id: 11,
    text: "When your walls and floor are all clean and shiny, you can start organizing the shelves and rearranging other furniture. Give your store a new look this coming New Year. If you want your customers to feel a little excited, innovate on your store design a little bit. A simple reshuffling here and there will usually do the trick.",
  },
  { id: 12, subtitle: "4. Introduce new experiences." },
  {
    id: 13,
    text: "There are other ways to make your customers feel good when they enter your store in the new year. What if you repaint the walls to perk the interest of repeat customers? You can also try adding a new scent to stimulate their senses.",
  },
  {
    id: 14,
    text: "Cleaning up after the holidays does not have to be as tedious as it sounds. Just look at it this way: you’re cleaning up in anticipation of another celebration. You don’t want to celebrate amidst a pile of mess, do you? So grab that funky broom and start sweeping around! It’s fun. ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
