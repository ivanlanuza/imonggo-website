import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "How color affects shopping behavior";
const paragraphs = [
  {
    id: 1,
    text: "We humans are predominantly visual creatures, so it’s no surprise that 93% of the time, we tend to buy a product after being influenced by visual cues. Subconsciously, we care more about how a product looks than how it feels or tastes. Color, most importantly, plays a major role in evoking emotions within us.",
  },
  {
    id: 2,
    text: "Marketing experts reveal that they use color as a strategic instrument to lure customers. Research shows that color amplifies brand recognition by 80%. Retailers use color to project their desired brand image.",
  },
  {
    id: 3,
    text: "Every color sends a different signal to the brain. As Jill Klores, founder and owner of Essential Light Design Studio LLC in Dallas, said, “It can totally change someone’s outlook to step into a space that’s bathed in a certain color. It will change their emotion, and whether that’s for better or worse depends on the individual.”",
  },
  {
    id: 4,
    text: "Yellow, for example, is the color of warmth and optimism. It is usually used in store displays to grab the attention of window shoppers. Red signifies passion and intensity. It is known as the color of power. Red is most effective in clearance sales since it evokes a sense of urgency. Blue is regarded as a calm and serene color. It suggests peace, trust, and security. Blue is mostly an office color since it is non-invasive, and thus increases productivity.",
  },
  {
    id: 5,
    text: "Subconsciously, we care more about how a product looks than how it feels or tastes. Color plays a major role in evoking emotions within us.",
  },
  {
    id: 6,
    text: "Green is a secondary color that denotes wealth and growth. It is widely recognized as the color of nature and fertility. Purple is known as the color of royalty. It brings about an air of elegance and prestige so brands use it to project a creative and wise image. Orange is the color of a friendly and cheerful brand that brings excitement and rush. It is mostly used by companies that offer good value.",
  },
  {
    id: 7,
    text: "Black is a sleek color that is used mainly for luxury products. It is powerful and elegant in presentation. White signifies purity and youth. This is why about 75% of skin care brands use white for packaging. Pink is mostly regarded as a feminine color. Generally, it poses a calming effect to the senses so that shoppers feel less regretful about buying pink stuff.",
  },
  {
    id: 8,
    text: "Color is influential not only in terms of products and brand logos. Color also plays a role in store lighting and temperature setting. According to research, blue light during night time suppresses the body’s production of melatonin, the hormone that causes us to feel tired and sleepy. That is why blue light and other cool color temperatures are used in bars and other nocturnal shops.",
  },
  {
    id: 9,
    text: "On the other hand, warmer color temperatures are typically used in shops that demand a more relaxed and comfortable atmosphere. This is what Levia Lew, principal at Reveal Design Group in New York, had to say about color temperatures: “Restaurants typically [prefer] an amber, fire-lit ambiance because it tends to put people at ease; it psychologically reminds them of a fire or being warm and cozy. Now, [imagine] a blue light. Blue is not usually associated with a feeling of warmth, so [when customers] walk through a space illuminated with light sources containing more of the blue-green spectrum such as fluorescents, [they might] think it high-tech or a little more modern, maybe a little colder. It’s another subtle way to affect your environment, without being too overt.”",
  },
  {
    id: 10,
    text: "All of this confirms that color possesses a magic that makes us loosen our purse strings. It’s undeniably an elemental part of the business trade. I wonder, what would become of retail in a black and white world? ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
