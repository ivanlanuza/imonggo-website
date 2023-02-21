import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "How to engage your employees";
const paragraphs = [
  {
    id: 1,
    text: "When you engage your employees, you’re doing your company a favor. An engaged employee is an asset because he directly communicates his thoughts and feelings to the customers. An employee in high spirits influences a customer to be positive. In the same way, when an employee is uninterested and mundane, the customer will feel the difference.",
  },
  {
    id: 2,
    text: "So what can you do to make that singular connection with your employees?",
  },
  { id: 3, subtitle: "1. Take them on board your vision." },
  {
    id: 4,
    text: "Your employees are better positioned to represent your brand if they know what you want. They’re not just the hands that help you carry out your business goals; they’re part of the heart. Your employees are your core group — they work for you and, at the same time, you work for them. They’re the internal customers that you get to interact with every day. It’s wise to make sure that they’re always on the same page as you.",
  },
  {
    id: 5,
    text: "Create the kind of work environment that reflects all the positive attributes of your brand.",
  },
  { id: 6, subtitle: "2. Give them a voice." },
  {
    id: 7,
    text: "There are things that your employees know and you don’t — that’s a solid fact. They’re in the front line of customer interaction so they know what customers appreciate and detest. If you want to be successful, make sure that you listen to what they have to say. Their thoughts and ideas are always worth a dime.",
  },
  { id: 8, subtitle: "3. Communicate with them on a regular basis." },
  {
    id: 9,
    text: "Feedback is a must. Get their feedback and give them yours and on a regular basis, if possible. Don’t wait six months before you exchange thoughts with the people you work with. Shorten your feedback loop to a week. If an employee is doing great, you don’t want to wait a long time before acknowledging a job done well. Likewise, if an employee needs to improve, extend your guidance right away. Offer learning opportunities for your employees to grow. Do this often because every minute you waste has an impact to your business.",
  },
  { id: 10, subtitle: "4. Create a work environment that empowers them." },
  {
    id: 11,
    text: "A toxic workplace is a no-go. Create the kind of work environment that reflects all the positive attributes of your brand. Employees that work for a company that treasures them are likely to extend the same experience to customers. You want a mission-driven culture that engages people and causes a ripple effect.",
  },
  {
    id: 12,
    text: "In this business-driven world, you are expected to perfect your inner circle first before going out and extending your brand to outsiders. It’s only when you have an internal brand harmony that you can achieve a seamless relationship with customers.",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
