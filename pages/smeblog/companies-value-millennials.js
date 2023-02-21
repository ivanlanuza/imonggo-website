import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "Why companies value millennials";
const paragraphs = [
  {
    id: 1,
    text: "The entire work industry is flooded by a whole new generation of workers. With the dawn of the technological era comes a wave of millennials ready to take over and reshape the traditional workplace.",
  },
  {
    id: 2,
    text: "Companies around the world seek younger people to work for them. This is because younger people — the millennials — have different outlooks about work and new technologies. They are the children of this age, so they understand its demands better than the older generations do.",
  },
  {
    id: 3,
    text: "“The workplace and workforce are going to change pretty dramatically as we look forward,” said Deborah Henretta, Group President of Asia & Global Specialty Channel at Procter & Gamble. “The entire concept of work is going to become more flexible. The skills needed in the workforce are going to be less about IQ and a little bit more about EQ because, if you think about it, a lot of IQ knowledge is going to be available to our fingertips through hand-held devices and the computer and technologies that we have at our disposal.”",
  },
  {
    id: 4,
    text: "Millennials matter because they bring a fresh perspective to the table. Their adeptness in digital technologies allows them to be innovative entrepreneurs. They’re always hungry to learn and easy to teach. Companies love millennials because they respond well to different learning styles and can smoothly adapt to workplace culture and behavior.",
  },
  {
    id: 5,
    text: "Millennials make a difference both in the workplace and in the global business scenario. They bring an engaging atmosphere that blends the concept of work and play wherever they go. All these things make millennials ideal. It’s no wonder that companies around the world are considering it a major priority to attract these workplace gems. ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
