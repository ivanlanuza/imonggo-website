import SubFeaturesPage from "components/features/SubFeaturesPage";

const data = [
  {
    id: "1",
    title: "Customer Relationship Management",
    icon: "sellq1",
    text: "Encourage customers to purchase more by giving them automatic discounts or allowing them to earn points per purchase.",
  },
  {
    id: "2",
    title: "Web-based Point of Sale",
    icon: "sellq2",
    text: "Easy to use POS in your web-browser. Sell items using a barcode or name search.  Apply over-all or line discounts, accept different currencies, allow split-bill payments, and print receipts.  Selling has never been easier.",
  },
  {
    id: "3",
    title: "Customer Database",
    icon: "sellq3",
    text: "Keep track of all your customer records so you can market to them or personalize offering to them.",
  },
  {
    id: "4",
    title: "Cash and Credit Card Handling",
    icon: "sellq4",
    text: "Imonggo's integration with Vantiv lets you accept credit card payments in the United States.  Available for web-based POS and Imonggo ipad app.",
  },
];

const hero = {
  title: "Sell even more than before",
  image: "/images/features/herosellevenmore.png",
  text: "Imonggo point-of-sale lets you log your transaction quickly using a regular computer or an iPad - so you have more time to engage with your customers.",
};

export default function Features() {
  return <SubFeaturesPage data={data} hero={hero} />;
}
