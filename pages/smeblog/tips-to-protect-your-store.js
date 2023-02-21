import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "Five low-cost tips to protect your store from shoplifters";
const paragraphs = [
  {
    id: 1,
    text: "Believe it or not, there are business owners that think shoplifting is not a huge problem for their small stores. Some even think that shoplifters only target large stores.",
  },
  {
    id: 2,
    text: "You might be one of these business owners. You might assume that shoplifters only amount to a very small percentage of your business monthly loss, so you can just let it go. After all, paying for expensive solutions, like CCTV installation and electronic barcodes, may be more expensive than the total loss accrued from theft.",
  },
  {
    id: 3,
    text: "Ignoring shoplifting, however, is a large mistake. In fact, the 2013-2014 Global Retail Theft Barometer stated that businesses worldwide lost a total of $128 billion in 2013 due to theft. Another study pointed out that 30% of new stores close due to theft.",
  },
  {
    id: 4,
    text: "There is no need to think of pricey solutions to shoplifting. Small stores can survive by following these low-cost tips:",
  },
  {
    id: 5,
    text: "1. Train your staff to be warm to all customers. Teach them to greet the customer as they enter the store, and to give thanks for their patronage as they exit. Security expert Chris McGoey told Entrepreneur that greeting shoplifters may deter their intention to steal. “Not only is it good customer service, a simple greeting can make potential shoplifters change their mind about stealing from your store because they know you can identify them,” he said.",
  },
  {
    id: 6,
    text: "2. Make sure that your store has adequate lighting at all times, even in the most problematic areas. You may consider using shelves made of transparent plastic, instead of wood or metal, to minimize shadows.",
  },
  {
    id: 7,
    text: "3. The clear plastic shelves will also reduce the hidden areas in your store. It is important for your staff to see what customers are doing, even when they are standing from the counter. If this is not possible, you might consider using lower shelves.",
  },
  {
    id: 8,
    text: "4. Create anti-shoplifting posters and post them around your store. It should contain the punishments that your store will dole out to offenders. The mere knowledge that your store is serious about theft prevention may drive shoplifters away.",
  },
  {
    id: 9,
    text: "5. Lastly, make sure that your store is clean and organized. It is easier to notice when something goes missing if items are neatly arranged on the shelves. Besides, a dirty and unorganized store will make thieves think that you do not take good care of your merchandise, justifying their intention to steal.",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
