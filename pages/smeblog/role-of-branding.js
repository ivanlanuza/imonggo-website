import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "The role of branding in the evolution of retail";
const paragraphs = [
  {
    id: 1,
    text: "Any retailer who has ever tried to sell a legacy knows that building a brand presence is not an easy task. Today, more than ever, branding has become more meaningful to retailers and consumers around the world.",
  },
  {
    id: 2,
    text: "The changing consumer behavior paved the way to a new retail landscape that embraces the brand experience on the whole over the products and services. Today’s consumers are more difficult to attract because they are too engrossed with the new technologies that bombard them every day. To minimize the possibility of information overload, consumers tend to limit their focus to a selected few, instead of digesting every advertising tactic that comes their way.",
  },
  {
    id: 3,
    text: "Despite this selective focus, however, consumers still need brands that are relevant to them. Kevin Kelley, principal and founding partner of the design strategy firm, Shook Kelley, reminded retailers: “The actual products you sell are only one part of the overall purchase and value equation. In addition to the actual product, consumers are also looking for desirable brand experiences, well-edited product selections geared toward solving consumer problems and building authentic relationships with companies that ‘get them.`",
  },
  {
    id: 4,
    text: "What retailers need to do then is to establish a genuine relationship with consumers — one that is grounded on trust and authenticity. By doing this, retailers can connect with consumers in a deeper way.",
  },
  {
    id: 5,
    text: "But how can retailers achieve that level of connection? Kevin Kelley has the answer. He said that brands that make it to the top “should have a strong point of view on what a better world looks like,” and they should understand how to make their consumers feel that taking a part of what they offer can give them a piece of that little heaven.",
  },
  {
    id: 6,
    text: "“Consumers need to believe that if they walk through the entrance of your stores one way, they will eventually come out different or changed in some positive way at the end of the shopping experience.”",
  },
  {
    id: 7,
    text: "Kelley used the phrase “transformation potential” to refer to what retailers can do to make their brands stick to the consumers’ heart. He said, “Consumers need to believe that if they walk through the entrance of your stores one way, they will eventually come out different or changed in some positive way at the end of the shopping experience.” The more your consumers interact with your brand in a level that appeals to their senses, the more they feel that your connection to them is robust and genuine.",
  },
  {
    id: 8,
    text: "Retail has always been a cultural manifestation of a nation, but until recently, we have only looked at it from a physiological point of view. Now that the circumstances for retail have changed, however, we ought to look at it “through the lens of psychology,” as Kelley said, because retail is more than the satisfaction of our immediate needs and wants; it holds a deeper implication about how we look at and interact with the world in general. ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
