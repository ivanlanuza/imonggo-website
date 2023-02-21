import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "4 Tell-tale signs that say you need to hire more people";
const paragraphs = [
  {
    id: 1,
    text: "You can’t do much if you’re undermanned. Some daring entrepreneurs may have conquered the odds all by themselves but it is not always likely that a businessman can succeed in his quest without adequate assistance. Help is always good, but when it’s not helpful enough, it’s just useless.",
  },
  {
    id: 2,
    text: "It’s true that money is the lifeblood of business but that doesn’t mean that all the other factors are not as crucial. Manpower, for instance, is important because it is what makes business possible in the first place. Manpower develops the product or service. Without it, a business is just an idea backed up by money and supported by a bunch of people. There’s nothing real and substantial about it.",
  },
  {
    id: 3,
    text: "Your employees are the soldiers that help you overcome the obstacles in the battlefield and help you charge forward one step at a time. If you don’t have enough of them, you may be in trouble. Here are four signs that tell you when you need more people in your team.",
  },
  { id: 4, subtitle: "1. Complaints from the workforce" },
  {
    id: 5,
    text: "This is the most obvious symptom. Sure, you may hear some rumblings here and there from time to time and you may dismiss them as petty, but when most of your employees are already telling you upfront that they feel overused, that has got to be something. When the logs prove that your employees are working on lunch breaks, on weekends, and on holidays, you should probably open your eyes and start embracing the situation: you need to expand your workforce.",
  },
  {
    id: 6,
    text: "Instead of spending all that extra money on things you don’t really need, why not invest it on new people who can potentially turn your business upside down?",
  },
  { id: 7, subtitle: "2. Deteriorating work quality" },
  {
    id: 8,
    text: "When you get late and low-quality turn-ups from your rather competent employees, there is surely something wrong. It may be that they’re too stressed or frustrated to get things done that it compromises the quality of their work. Ask them what’s wrong, and when they complain that they’re too cramped up on their workload, you know what to do.",
  },
  { id: 9, subtitle: "3. Business expansion" },
  {
    id: 10,
    text: "It may be that you have a new product to offer, or it may just be that your client base is growing. However it manifests itself, business expansion is a sure sign that you should make some additions to your workforce and hire more hands to help you out. You owe it to your employees and your customers to always do what is best for them. Whatever makes them happy and content is good for your business.",
  },
  { id: 11, subtitle: "4. High revenue" },
  {
    id: 12,
    text: "This is directly related to business expansion. When the money just keeps on coming and coming until you reach the point when you don’t know how to dispose of it, you should review your business structure and see if involving more people in the workflow will benefit your business in the long run. Instead of spending all that extra money on things you don’t really need, why not invest it on new people who can potentially turn your business upside down?",
  },
  {
    id: 13,
    text: "Given the unpredictable flux of the business industry, knowing when to hire more people can be a bit of a challenge, especially if you’re a small to medium-sized entrepreneur. You don’t want your workforce to be insufficient nor underused. To make a fully functional team, you need the right number of people with the right set of skills. If you can just pinpoint the signs, you’re halfway there.",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
