import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "Top 5 traits of a successful entrepreneur";
const paragraphs = [
  {
    id: 1,
    text: "Entrepreneurship is not for the faint of heart. Only the strongest of characters can survive in the harsh jungle that we all typically call business. Those who dream of becoming successful entrepreneurs often wonder if they have what it takes. Well, besides the set of skills that we listed here before, the following traits can probably help, too.",
  },
  { id: 2, subtitle: "1. Focus" },
  {
    id: 3,
    text: "Distractions are everywhere. It’s easy for an entrepreneur to lose touch with his goals if he doesn’t keep his eyes on the prize all the time. Many entrepreneurs have made the mistake of taking their attention away from the essential points of business. They either let themselves be overswept by little successes or be dragged down by small failures. A responsible entrepreneur knows that whatever happens, he needs to stay the course and focus on his goals.",
  },
  { id: 4, subtitle: "2. Curiosity" },
  {
    id: 5,
    text: "The most brilliant of all entrepreneurs have one similarity: they all tried to explore depths that no one else dared touch. Once curiosity is polished and used in the right way, it can lead to new possibilities. This applies not only in entrepreneurship but in every field of work. The most curious people are the innovators of this world.",
  },
  { id: 6, subtitle: "3. Confidence" },
  {
    id: 7,
    text: "An entrepreneur’s level of confidence is sometimes enough to tell his success story. If he knows how to project himself and his brand, it doesn’t matter how far he is in the road. By showing confidence, he encourages people to trust him and believe in his product. Just the right level of confidence is enough for him to leave a good impression in people’s minds. Again, this is where psychology merges with business.",
  },
  {
    id: 8,
    text: "Once curiosity is polished and used in the right way, it can lead to new possibilities. This applies not only in entrepreneurship but in every field of work. The most curious people are the innovators of this world.",
  },
  { id: 9, subtitle: "4. Leadership" },
  {
    id: 10,
    text: "Leadership is more of a mindset than a skill. It involves the willingness to act without being told and to guide others without being asked. A good entrepreneur is expected to be a good leader. Since he has a lot of crucial decisions to make in the long run, he needs to have the strength of mind and character to set an example for his employees to follow. Apart from this, an entrepreneur must understand the big picture and know the little things concerning his business so he can always be in the best position to lead his team.",
  },
  { id: 11, subtitle: "5. Humility" },
  {
    id: 12,
    text: "Entrepreneurs who think they can do everything without any help are deluded. Independence is an admirable trait, but it’s almost always impossible to achieve anything with only one brain and two hands. Successful entrepreneurs know that they can’t conquer the world by themselves. They don’t have the answer to every question, or the solution to every problem. Sometimes, the only way for them to move forward is to ask for help.",
  },
  {
    id: 13,
    text: "Now for the inevitable question: Is an entrepreneur born or made?",
  },
  {
    id: 14,
    text: "If we look at it closely, we’ll see that this question is not really valid. An entrepreneur is neither born nor made because the will to innovate and succeed comes not from without but from within. No one can create an innately strong-willed person, the same way that no one can alter a person to be intractable in his goals. Entrepreneurship is not a mere decision — it’s a whole lot more than that. ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
