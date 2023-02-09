import ContentText from "./ContentText";
import ContentQuadrant from "./ContentQuadrant";

const contentselling = {
  title: "Sell even more than before",
  text: "Imonggo point-of-sale lets you log your transaction quickly using a regular computer or an iPad - so you have more time to engage with your customers.",
  url: "/features/sellevenmore",
};

const contentinventory = {
  title: "Generate real-time inventory view",
  text: "Automatically keep track of your inventory so you can properly plan for stock replenishment.",
  url: "/features/generateinventory",
};

const contentreports = {
  title: "Easily access your reports ",
  text: "Your data is stored in the cloud - which means you can access your data anytime, anywhere using a normal computer or via Imonggo's Dashboard mobile apps.",
  url: "/features/accessreports",
};

const contentonline = {
  title: "Sell your products online easily with Imonggo",
  text: "Reach your customers faster with Imonggo's built-in e-commerce site.  Now your in-store transactions are now combined with your online sales.",
  url: "/features/sellonline",
};

const quadrantselling = {
  q1: "Customer Relationship Management",
  q2: "Web-based Point of Sale",
  q3: "Customer Database",
  q4: "Cash and Credit Card Handling",
  iconvalueq1: "sellq1",
  iconvalueq2: "sellq2",
  iconvalueq3: "sellq3",
  iconvalueq4: "sellq4",
};

const quadrantinventory = {
  q1: "Product Management",
  q2: "Inventory Summary and History",
  q3: "Supplier Management",
  q4: "inventory Mobile App",
  iconvalueq1: "invq1",
  iconvalueq2: "invq2",
  iconvalueq3: "invq3",
  iconvalueq4: "invq4",
};

const quadrantreport = {
  q1: "Profile Report",
  q2: "Daily Sales Summary",
  q3: "Customer Basket Report",
  q4: "Mobile Sales Dashboard",
  iconvalueq1: "repq1",
  iconvalueq2: "repq2",
  iconvalueq3: "repq3",
  iconvalueq4: "repq4",
};

const quadrantonline = {
  q1: "Order Management",
  q2: "Sell more online",
  q3: "Inventory and Invoicing",
  q4: "Product Management",
  iconvalueq1: "olq1",
  iconvalueq2: "olq2",
  iconvalueq3: "olq3",
  iconvalueq4: "olq4",
};

const ContentFeatures = ({}) => (
  <div>
    <div className="mb-16 ">
      <div className="md:h-72 h-56 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 mx-2 md:mx-16 lg:mx-32 mt-8 md:mt-16">
        <div className="col-span-1 relative">
          <div className="absolute top-0 right-0">
            <ContentText
              title={contentselling.title}
              text={contentselling.text}
              url={contentselling.url}
            />
          </div>
        </div>
        <div className="col-span-1 relative md:order-last order-first">
          <div className="absolute top-0 left-0">
            <ContentQuadrant content={quadrantselling} />
          </div>
        </div>
      </div>

      <div className="md:h-72 h-56  grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 mx-2 md:mx-16 lg:mx-32 mt-6 md:mt-24">
        <div className="relative col-span-1 pl-2 md:-ml-6 lg:-ml-36 xl:ml-0 lg:pl-32   order-last md:order-first">
          <div className="absolute top-0 right-10">
            <ContentQuadrant content={quadrantinventory} />
          </div>
        </div>
        <div className="relative col-span-1  md:order-last order-first">
          <div className="absolute top-0 left-0">
            <ContentText
              title={contentinventory.title}
              text={contentinventory.text}
              url={contentinventory.url}
            />
          </div>
        </div>
      </div>

      <div className="md:h-72 h-56  grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 mx-2 md:mx-16 lg:mx-32 mt-6 md:mt-24">
        <div className="col-span-1 relative">
          <div className="absolute top-0 right-0">
            <ContentText
              title={contentreports.title}
              text={contentreports.text}
              url={contentreports.url}
            />
          </div>
        </div>
        <div className="col-span-1 relative">
          <div className="absolute top-0 left-0">
            <ContentQuadrant content={quadrantreport} />
          </div>
        </div>
      </div>

      <div className="grid md:h-72 h-56  grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 mx-2 md:mx-16 lg:mx-32 mt-6 md:mt-24">
        <div className="relative col-span-1 pl-2 md:-ml-6 lg:-ml-36 xl:ml-0 lg:pl-32  order-last md:order-first">
          <div className="absolute top-0 right-10">
            <ContentQuadrant content={quadrantonline} />
          </div>
        </div>
        <div className="relative col-span-1  md:order-last order-first ">
          <div className="absolute top-0 left-0">
            <ContentText
              title={contentonline.title}
              text={contentonline.text}
              url={contentonline.url}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContentFeatures;
