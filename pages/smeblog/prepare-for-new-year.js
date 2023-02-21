import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "5 ways to prepare your business for the new year";
const paragraphs = [
  {
    id: 1,
    text: "The new year is dawning and with it comes a whole new opportunity for you to start your business afresh. Are you ready to face new challenges and brave a new era? If not, here are a few of the things you can do to start prepping up for the coming year.",
  },
  { id: 2, subtitle: "1. Resolve this year’s issues." },
  {
    id: 3,
    text: "You don’t want to deal with the same old problems once the new year comes. Make sure that you clean up all this year’s mess before transitioning to a new business year. Is there an irate client that you need to pacify? A damaged section in your store that you need to repair? An unfinished project that you need to complete? Well, now is the right time to do all of these. Patch everything up before January 1st hits.",
  },
  { id: 4, subtitle: "2. Review your store’s performance for this year." },
  {
    id: 5,
    text: "It’s crucial that you analyze how you performed this year so you can plan your moves for the coming year more smoothly. Did your business foundation remain solid all year long? Did your employees do great? Was your growth rate significant? You should take note of all these things because you’ll find them useful as you plan out your next moves. You should list not only your strengths but also your weaknesses. What obstacles were the most difficult for you to overcome? What losses have you incurred? Where did you come short? All of these are absolutely important.",
  },
  {
    id: 6,
    text: "You shouldn’t let money limit your prospects for business expansion. Dream first. Let reality bridle your imagination when you’re sick of paradise.",
  },
  {
    id: 7,
    subtitle: "3. Set a definitive plan of action for the coming year.",
  },
  {
    id: 8,
    text: "Once you have identified your store’s performance, you are now ready to outline your plan of action for the coming year. List down all your specific goals. Remember to keep them SMART: specific, measurable, attainable, relevant, and time-based. If you have mentors that can give you a fresher outlook on your business, ask them to pitch in some ideas. Make sure that the goals you set for the next year are ambitious enough to take you one step closer to the top, but realistic enough to actually get you to move in the first place.",
  },
  { id: 9, subtitle: "4. Build a strategic calendar." },
  {
    id: 10,
    text: "Now that you have laid out your plans for the next year, build a timeline for each milestone. Plan your calendar in such a way that there is a specific time allotted for the commencement and the completion of every goal in your list. Strategize and innovate and, of course, make sure that you actually stick to your calendar. To avoid disappointments and missed deadlines, set up a time allowance for unforeseen events. This part of the plan requires a wise and forward-thinking brain, so if you’re not too confident, you better bring in someone who is. It’s crucial for your business.",
  },
  { id: 11, subtitle: "5. Create a cash plan." },
  {
    id: 12,
    text: "Needless to say, you can’t do everything you want all at the same time. You are held back not only by time but also by money. Make sure to check your financial resources to see how much you can finance your expected ventures for the next year. Maybe reviewing your finances should be the first thing you do, but we put it here last because we think you shouldn’t let money limit your prospects for business expansion. Dream first. Let reality bridle your imagination when you’re sick of paradise.",
  },
  {
    id: 13,
    text: "We hope you find our guidelines helpful for your business. Have a prosperous year ahead! ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
