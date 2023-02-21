import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "Why engaging your employees should be THE top priority";
const paragraphs = [
  {
    id: 1,
    text: "They say that the number one rule in business is to keep the customers happy. Though the title of this article may disagree, customer engagement really should be every businessman’s ultimate goal.",
  },
  { id: 2, text: "Here’s the catch, though." },
  {
    id: 3,
    text: "There are basically two types of customers: those who come to your store and buy stuff from you, and those whom you mingle with everyday to make your store functional. You can call them your external and internal customers.",
  },
  {
    id: 4,
    text: "Sure, your external customers are your source of fuel — there’s no denying that. They give you the money to keep your business running. However, it is your internal customers, your employees, who are actually the true gems crucial to your survival and success. Your employees are the face of your brand, so if you’re not engaging them, you’re not engaging your customers either.",
  },
  {
    id: 5,
    text: "The magic (or disillusionment) starts the minute your customers come in contact with your brand.",
  },
  {
    id: 6,
    text: "Knowing this, it’s just sad to find that only 32% of employees in the United States last year (2015) are engaged in their job. That rate is even more depressing at 13% on a worldwide scale. But those are the recent findings of Gallup, an American research-based consulting company, so those numbers must have some truth in them.",
  },
  {
    id: 7,
    text: "On top of that, almost the same numbers were reflected in previous surveys. The US seems to be in a stagnant state since records show that 31.5% of employees were engaged in their jobs in 2014. That’s only a 0.5% increase after a year of innovations and disruptions that the retail sector constantly bragged about.",
  },
  {
    id: 8,
    text: "This scenario can’t go on in the workplace anymore. If you really want your customers to have a seamless retail experience, it’s imperative that you solve the problem from the roots and start looking for ways to improve your brand from the inside. Remember that the magic (or disillusionment) starts the minute your customers come in contact with your brand. And who’s the face of your brand again? That’s right, it’s your employees.",
  },
  {
    id: 9,
    text: "Now that you understand the gravity of the situation, move on to the real stuff: Engage your internal customers.",
  },
  { id: 10, text: "How? We’ll outline the details for you in our next post. " },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
