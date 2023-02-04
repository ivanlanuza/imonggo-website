import SubFeaturesPage from "components/features/SubFeaturesPage";

const data = [
  {
    id: "1",
    title: "Order Management",
    icon: "olq1",
    text: "Streamline your online transactions - manage all online orders: pending and for delivery - with Imonggo E-commerce.",
  },
  {
    id: "2",
    title: "Sell More Online",
    icon: "olq2",
    text: "Widen your reach to your customers online and increase your sales even without having them visit on-site.",
  },
  {
    id: "3",
    title: "Inventory & Invoicing",
    icon: "olq3",
    text: "Imonggo E-commerce is integrated with Imonggo POS and automatically updates your inventory and generates invoices for online sales.",
  },
  {
    id: "4",
    title: "Product Management",
    icon: "olq4",
    text: "Use an intuitive screen to manage which of your products you want to sell online.",
  },
];

const hero = {
  title: "Sell your products online easily",
  image: "/images/features/heroonline.png",
  text: "Reach your customers faster with Imonggo's built-in e-commerce site.  Now your in-store transactions are now combined with your online sales.",
};

export default function Features() {
  return <SubFeaturesPage data={data} hero={hero} />;
}
