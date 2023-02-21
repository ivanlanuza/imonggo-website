import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "How to make millennials work for you";
const paragraphs = [
  {
    id: 1,
    text: "Millennials are the new gems in the workplace. Whatever industry they go to, they are sought for by many employers for their natural understanding of the digital age. Nonetheless, employers are challenged to attract and keep them because they seem to be elusive and hard to pin down.",
  },
  {
    id: 2,
    text: "A likely reason for this is the millennials’ emphasis on personal gratification. They tend to put their needs first before the employers’. Millennials are more idealistic than the older generations. They are willing to compromise, but they only do that to get one step closer to their individual goals.",
  },
  {
    id: 3,
    text: "Employers are struggling to make the workplace as pleasant as possible because rigid structures are not ideal for millennials. Millennials want a flexible system that allows them to grow professionally and personally — one that meets their needs while giving them theopportunity to learn and evolve.",
  },
  {
    id: 4,
    text: "Millennials are not satisfied with just having a job. They want something more transcendental — something that they feel is worthwhile and meaningful. Often, they are not motivated by money. They understand that money is just a bonus; it’s the experience and the sense of fulfillment that counts. Employers, therefore, need to try harder to understand the needs of millennials so that they can give them the satisfaction they need.",
  },
  {
    id: 5,
    text: "“Millennials are not satisfied with just having a job. They want something more transcendental — something that they feel is worthwhile and meaningful.”",
  },
  {
    id: 6,
    text: "What millennials have in plenty is optimism. They are always in for every challenge. They’re willing to take risks, to travel far, to mingle with all kinds of personalities and generations, to actively participate in every event, and to learn from their superiors. They’re dynamic and versatile, and they are very persistent. They’re every employer’s dream. The only problem is how to win them over.",
  },
  {
    id: 7,
    text: "“Our capacity to attract, retain and manage executive talent does not depend on the compensation package, but rather on our ability to create a sense of belonging to an organization that offers a long-term relationship and a professional development opportunity, and that has a clear conception of itself, of what it wants to be, and of how to achieve it,” Armando Garza Sada, Chairman of the Board of Directors at Alfa SAB de CV Mexico, reasoned out.",
  },
  {
    id: 8,
    text: "When employers succeed in attracting millennials, the next step is developing them. Personal development is the first priority of millennials, and it is commonly the reason why they stay with their employers. Millennials need to be engaged all the time.",
  },
  {
    id: 9,
    text: "Attracting and developing millennials is not an easy task, but it’s always worth it. Millennials represent what the future workforce will look like. They are the faces that will reshape the work industry. It’s better for employers to draw them in now to get the best out of them.",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
