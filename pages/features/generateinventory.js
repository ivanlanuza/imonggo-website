import SubFeaturesPage from "components/features/SubFeaturesPage";

const data = [
  {
    id: "1",
    title: "Product Management",
    icon: "invq1",
    text: "Create products easily or edit them quickly.  Add the product name, item price, cost, description, and more.  You can sort them by categories thru tags.",
  },
  {
    id: "2",
    title: "Inventory Summary and History",
    icon: "invq2",
    text: "See your total inventory cost, total on-hand quantity, and the out-of-stock count.  Figure out which items are over-stocked and under stocked.  Make better decisions on your replenishment cycles.",
  },
  {
    id: "3",
    title: "Supplier Management",
    icon: "invq3",
    text: "Use easy-to-remember transaction types to adjust your inventory.  Receive your products from your supplier or do internal adjustments.  Regularly carry-out Physical count to ensure proper system inventory.",
  },
  {
    id: "4",
    title: "Inventory Mobile App",
    icon: "invq4",
    text: "Conveniently adjust your inventory using our inventory control app for your phone.  Coming very soon.",
  },
];

const hero = {
  title: "Generate real-time inventory view",
  image: "/images/features/heroinventory.png",
  text: "Automatically keep track of your inventory so you can properly plan for stock replenishment.",
};

export default function Features() {
  return <SubFeaturesPage data={data} hero={hero} />;
}
