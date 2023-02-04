import ContentTemplate from "components/aboutus/ContentTemplate";

const title = "Terrariet";
const subtitle = "Imonggo Customer Feature";
const banner_image = "01.jpeg";
const next_article_url = `aboutus/freshgrocer`;
const next_article_title = "Fresh Grocer";
const paragraphs = [
  {
    id: 1,
    subtitle: "Sally forth and make a difference",
  },
  {
    id: 2,
    text: "Let’s go back in time to forty years ago when a man named Carl Aage Gram opened to the public the first Scandinavian terrarium. He called it Terrariet Vissenbjerg, and it housed the largest collection of reptiles and amphibians in Denmark at that time. It was in every way the completion of Carl's lifelong dream.",
  },
  {
    id: 3,
    text: "Terrariet was meant to give the least appreciated creatures in the animal kingdom a home. The number of species of reptiles and amphibians all over the world had drastically declined in the last few decades owing to some of mankind’s destructive activities.Terrariet addressed this problem by telling the untold story of each animal and relaying to the public the important ecological role each one plays.",
  },
  {
    id: 4,
    subtitle: "Be strong in the face of defeat",
  },
  {
    id: 5,
    text: "A dark cloud was cast over Terrariet when Carl Aage Gram died in 1992. That year truly marked the end of a great era, but Terrariet got through it. Carl’s vision was carried on by his brother, Axel Gram, who turned the terrarium into a non-profit foundation to save it from bankruptcy.",
  },
  {
    id: 6,
    text: "Before Carl died, he appointed Klaus Draeby as zoo director. Klaus completed a handful of international projects for Terrariet during his term. He helped the zoo gradually get back on its feet after the death of its founder. However, in 2008, Terrariettook another blow when financial crisis hit Denmark.",
  },
  {
    id: 7,
    subtitle: "Carry on the mission",
  },
  {
    id: 8,
    text: "In 2012, Morten Jorgensen was appointed as new director. He acknowledged that Terrariet needed to shift perspectives. He looked at the situation in a more practical view and determined that Terrariet needed to attract more visitors and raise more income in order to sustain its noble legacy.",
  },
  {
    id: 9,
    text: "To achieve this, two things were done. First, animals already familiar to the public like the anaconda and the komodo dragon were added to the collection. Second, the most beautiful, dangerous, and even the ugliest animals were exhibited for the public to behold. In between these exhibitions, the more normal but still rare species of animals were put on display.",
  },
  {
    id: 10,
    text: "The strategy worked. Terrariet saw more visitors.",
  },
  {
    id: 11,
    subtitle: "Good things abound",
  },
  {
    id: 12,
    text: "With better income and the generous help of sponsors, Terrariet found opportunities to get involved in conservation work. They have provided support for a project in Indonesia that endeavored to save komodo dragons from extinction. The other projects they engaged in were the Local Danish Amphibians Project, and the Indonesian Box Turtle Breeding Program of 2012.",
  },
  {
    id: 13,
    text: "Terrariet was in such high ground that Morten and his small team thought that things couldn’t get any better – and yet they did. They found Imonggo.",
  },
  {
    id: 14,
    subtitle: "You can count on a friend",
  },
  {
    id: 15,
    text: "'As we are a small organization and don’t have a lot of manpower, it is very important that we have good technology to help us,' said Morten.",
  },
  {
    id: 16,
    text: "Morten initially did not see the need for a cloud POS since things were going well in Terrariet. But after discovering Imonggo, his opinion changed. He said, 'Before Imonggo we had an old-fashioned register. It was very hard to detect when or why mistakes were made. But this is all so very easy with Imonggo.'",
  },
  {
    id: 17,
    text: "Since then, Morten and his team have relied on Imonggo to help them in their daily executions. Imonggo automatically starts up in Terrariet’s sales office at 9:30 in the morning. 'Imonggo has made our tickets, souvenir, and café sales very effective and still very professional,' said Morten.",
  },
  {
    id: 18,
    text: "Morten likes many of Imonggo’s features – from personalizing receipts, controlling inventory, checking customer database, to following bestsellers, and monitoring the daily sales. 'It has especially been good for me as the director because I travel a lot and still am able to follow the sales and budget activities.'",
  },
  {
    id: 19,
    text: "He added:",
  },
  {
    id: 20,
    text: "'But the best thing is – it’s so easy. Everyone can do it. We have employees from 15 years of age that use Imonggo without any problems.'",
  },
  {
    id: 21,
    text: "'Imonggo has been a contributor to making everyday life in Terrariet very easy and in making the zoo a success. We are more than pleased with our choice of POS.'",
  },
];

export default function Home() {
  return (
    <ContentTemplate
      title={title}
      subtitle={subtitle}
      banner_image={banner_image}
      paragraphs={paragraphs}
      next_article_url={next_article_url}
      next_article_title={next_article_title}
    />
  );
}
