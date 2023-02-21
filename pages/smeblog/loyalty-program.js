import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "Choosing the right loyalty program for your store";
const paragraphs = [
  {
    id: 1,
    text: "The backbone of the retail industry is the customer. A business is sure to thrive when it has a ready list of loyal patrons, and a prospect to acquire new ones. This is why businesses have to come up with different strategies and techniques to keep the customers coming back, and one such strategy is the loyalty program.",
  },
  {
    id: 2,
    text: "The agenda behind loyalty programs should be about nurturing customer relationships. For the most part, a loyalty program must be about thanking the customers for their patronage.",
  },
  {
    id: 3,
    text: "Now, how do you know what the best loyalty program is for you? Paytronix Systems, Inc. acknowledges five types of loyalty programs.",
  },
  {
    id: 4,
    text: "The first two are already available for Imonggo, while the last three will be added in the future.",
  },
  {
    id: 5,
    subtitle: "Bankable Points Program",
  },
  {
    id: 6,
    text: "In a bankable points program, the customers have the freedom to redeem their accumulated points for the reward of their choice. This type of program works well for stores that offer a wide range of products or services that the customers can choose from.",
  },
  {
    id: 7,
    text: "The catering business is usually the avenue where the bankable points program is used. Since customers buy in huge orders, restaurant owners can encourage foot traffic without giving the customers a discount every time. This is also popular among customers since they get to choose their own rewards.",
  },
  {
    id: 8,
    subtitle: "Automatic Discount Program",
  },
  {
    id: 9,
    text: "Price reduction is the pitch of this program. This usually attracts the more price-conscious customers in the market. A discount program is usually effective in motivating customers to visit the store and to build excitement in their shopping experience.",
  },
  {
    id: 10,
    subtitle: "Automatic Rewards Program",
  },
  {
    id: 11,
    text: "In an automatic rewards program, customers earn points based on how much they spend in the store. When the customers reach a certain level, their earned points are converted into rewards.",
  },
  {
    id: 12,
    text: "There are two types of automatic rewards: the product-based reward and the cash-based reward. In a product-based reward, the customers are entitled to a certain product the next time they visit the store. An example of this is Starbucks’ My Starbucks Rewards, where customers can redeem their stars for drinks, food items, and more.",
  },
  {
    id: 13,
    text: "On the other hand, a cash-based reward is more like a discount program where the customers get a certain amount deducted from their next purchase.",
  },
  {
    id: 14,
    subtitle: "Product Frequency Program",
  },
  {
    id: 15,
    text: "In a product frequency program, customers obtain points every time they purchase a specific product. When they meet the preset conditions, they automatically receive a reward. An example of this is a Buy 3, Get 1 Free promo. This type of loyalty program is generally appealing to customers since it gives them instant rewards.",
  },
  {
    id: 16,
    subtitle: "Visit Frequency Program",
  },
  {
    id: 17,
    text: "A visit frequency program entitles the customers to certain points when they frequent the store. Every visit counts in this kind of loyalty program. Customers may claim a product reward, cash reward, or discount, depending on the store's policies.",
  },
  {
    id: 18,
    text: "The five programs mentioned above are only core loyalty programs. There are other programs like affinity programs and membership programs, which are categorized under layered loyalty programs.",
  },
  {
    id: 19,
    text: "At the end of the day, what is important is that you show your customers that you appreciate their unrelenting patronage. When your customers feel that you value them, they continue to nurture your relationship. Besides, what more can be sweeter than having a line of loyal customers to have your back all the way?",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
