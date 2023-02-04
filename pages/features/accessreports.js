import SubFeaturesPage from "components/features/SubFeaturesPage";

const data = [
  {
    id: "1",
    title: "Profit Report",
    icon: "repq1",
    text: "Are you making or losing money? Check the Profit Report charts and graphs to get an answer.",
  },
  {
    id: "2",
    title: "Daily Sales Summary",
    icon: "repq2",
    text: "Easily check how your business is doing by looking at the Daily Sales Summary.  Monthly and Yearly views are also available.",
  },
  {
    id: "3",
    title: "Customer Basket Reports",
    icon: "repq3",
    text: "Who are your most loyal customers?  What are their average basket sizes?  And what products do they buy?  Get answers to these questions and more.",
  },
  {
    id: "4",
    title: "Mobile Sales Dashboard",
    icon: "repq4",
    text: "Know how your business is going while on the go by using our complimentary sales monitoring app on Iphone or Android.",
  },
];

const hero = {
  title: "Easily access reports anytime",
  image: "/images/features/heroreports.png",
  text: "Your data is stored in the cloud - which means you can access your data anytime, anywhere using a normal computer or via Imonggo's Dashboard mobile apps.",
};

export default function Features() {
  return <SubFeaturesPage data={data} hero={hero} />;
}
