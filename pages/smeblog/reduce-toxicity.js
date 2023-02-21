import BlogTemplate from "components/smeblog/BlogTemplate";

const title = "How to reduce toxicity in the workplace";
const paragraphs = [
  {
    id: 1,
    text: "Excellence has a price, but when the well-being of a person is compromised for the sake of perfection, it’s just not worth it.",
  },
  {
    id: 2,
    text: "Ambitious companies sometimes pressure their employees to go beyond their limit and give what they don’t have. In a toxic workplace, caustic remarks and threatening commands replace what should have been positive, motivational words. As a result, employees do not feel happy, and they are powerless to articulate their ideas and do their tasks efficiently.",
  },
  {
    id: 3,
    text: "A study conducted by Appelbaum and Roy-Girard in 2007 reveals that ruthlessness and toxicity in the work environment “create an aversive situation as experienced by the employees of the organization that results in psychological distress (e.g. anxiety, depression, burnout, substance abuse) and corresponding lowered work performance.”",
  },
  {
    id: 5,
    text: "Most often than not, a toxic work culture starts with a person in authority. It may be a manager or a project head or even a CEO — any person who has some sort of control over others can usually create a negative aura in the workplace. By making unrealistic demands and ignoring the importance of internal communication, persons in authority can make their employees experience high levels of stress and anxiety that are detrimental to the company in the higher sense.",
  },
  {
    id: 6,
    text: "“Employees working in a toxic work environment may suffer psychologically through effects such as difficulty sleeping, depression, anxiety, impaired judgment, and impaired memory”, Appelbaum and Roy-Girard explained. “Employees may also experience physiological consequences such as high blood pressure, increased awareness of the environment and muscle tension.”",
  },
  {
    id: 7,
    text: "These negative implications of a toxic environment kill all possibilities for innovation and disruption. Fundamentally, it kills the company spirit itself.",
  },
  {
    id: 8,
    text: "It’s simple: treat your employees like they matter because they do!",
  },
  {
    id: 9,
    text: "No one wants a work culture that gives more negative impacts than positive, so how do you prevent your company from becoming that monster that eats up all the fun? Its simple: treat your employees like they matter because they do! Foster a work environment that boosts employees’ self-esteem and provides space for growth.",
  },
  {
    id: 10,
    text: "If you still think that a ruthless work environment is a necessary evil for success, you’re wide off the mark. Stress is a good thing when used in the right context. But when it’s causing a lot more harm than good, it becomes a grave concern. Besides, who needs deadly pressure when a people-friendly environment can make a business thrive without all the toxins? Look at big companies like Adobe and Slack — they’re known for valuing their people, and they’re also known for being disruptive and innovative. They achieve excellence without compromising their work culture. If they can do it, anyone can do it.",
  },
  {
    id: 11,
    text: "For most people, work is a word that rings thoughts of strain and tension, but if you create an environment where people can speak their mind without being condemned, and where failure is deemed as an opportunity to grow, then you’re transforming the way people view work in general. Work can be fun when you see people and not just profit. ",
  },
];

export default function Home() {
  return <BlogTemplate title={title} paragraphs={paragraphs} />;
}
