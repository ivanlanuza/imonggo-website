import ContentTemplate from "components/aboutus/ContentTemplate";

const title = "Ananda Sacramento Church Boutique";
const subtitle = "Imonggo Customer Feature";
const banner_image = "04.png";
const next_article_url = `aboutus/areainc`;
const next_article_title = "AREA Inc";
const paragraphs = [
  {
    id: 1,
    text: "A U.S. church boutique needs a simple no-frills point-of-sale for its elderly staff. Imonggo delivers.",
  },
  {
    id: 2,
    subtitle: "A spiritual journey",
  },
  {
    id: 3,
    text: "Ananda Sangha Sacramento is an ideal center to practice Ananda, a global movement that encourages individuals to seek peace and a deeper connection with God. Ananda is “based on the teachings of Paramhansa Yogananda, who showed how everyone can realize God in their daily lives as a tangible, loving reality.”",
  },
  {
    id: 4,
    text: "Ananda Sangha Sacramento’s temples, yoga retreats, meditation groups and communities do not discriminate on race, religion, national origin, gender, sexual orientation, age or disability. Anyone who is sincerely interested in seeking to achieve self-realization is welcome to attend its many activities, including retreats and meditation classes.",
  },
  {
    id: 5,
    subtitle: "Simple and elegant",
  },
  {
    id: 6,
    text: "Donald Lord is a volunteer for Ananda Sangha Sacramento’s church boutique, which lets visitors buy resources like books, CDs and helpful gift items. It is a small operation that is open only for two to three hours every week.",
  },
  {
    id: 7,
    text: "Donald shares how Imonggo is beneficial for their 16-year-old boutique. He calls Imonggo a simple and elegant program that “simply is well-thought-out.”",
  },
  {
    id: 8,
    text: "“It is easy to learn and its interface is visually elegant and follows a common-sense line,” he says, adding it is easy for their elderly volunteers to use.",
  },
  {
    id: 9,
    subtitle: "Convenient and easy",
  },
  {
    id: 10,
    text: "They used to record sales by hand using paper and pen, but that method was rife with mistakes and unreadable info. Then they found Imonggo three years ago, and have not looked back since.",
  },
  {
    id: 11,
    text: "He explains, “Imonggo speeds up the transactions and is more elegant than paper invoices. It is great to use existing bar codes on maybe half of our products to shoot the items in. We don’t have time or volunteer energy to put our own bar codes on everything, so we just put reference numbers when barcodes are not already available.”",
  },
  {
    id: 12,
    text: "“It is easier for the church office in doing yearly inventory, having all the products in the program and searchable. It is especially useful in not having to figure tax by hand and enter it into a paper invoice as we complete sales.”",
  },
  {
    id: 13,
    text: "Donald also likes that Imonggo is available for free. He adds, “Other researched solutions were way over our head for costs; we’re a non-profit organization, which makes almost no money on its sales because we give away a fair amount of discounts to persons who could benefit from that.”",
  },
  {
    id: 14,
    text: "Truly, Imonggo is a valuable point-of-sale for small operations that seek to represent self-devotion, like Ananda Sacramento’s church boutique.",
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
