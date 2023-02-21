import Image from "next/image";
import Link from "next/link";
import BlueButton from "components/core/BlueButton";

import { BookOpenIcon } from "@heroicons/react/solid";

const articlelist = [
  {
    id: 1,
    title: "Choosing the right loyalty program for your store",
    blurb:
      "The backbone of the retail industry is the customer. A business is sure to thrive when it has a ready list of loyal patrons, and a prospect to acquire new ones. This is why businesses have to come up with different strategies and techniques to keep the customers coming back",
    href: "smeblog/loyalty-program",
    date: "Feb 21, 2023",
  },
  {
    id: 2,
    title: "4 simple accounting mistakes that SMEs should watch out for",
    blurb:
      "Accounting is a language that scares most people. There just seems to be no way of perfecting the trade. Even the most experienced accountants make small mistakes every so often, and we all know that small mistakes in accounting can lead to grave consequences.",
    href: "smeblog/accounting-mistakes",
    date: "Feb 14, 2023",
  },
  {
    id: 3,
    title: "How seller optimism affects customer satisfaction",
    blurb:
      "A wise business principle is to always find a way to reach customer satisfaction. The retail industry is not just about selling a product; it’s about making the customers feel that their purchase makes an impact on their lives. Nurturing the customer is a crucial step in…",
    href: "smeblog/seller-optimism",
    date: "Feb 7, 2023",
  },
  {
    id: 4,
    title: "The innovation game: Are you playing the upper hand in business?",
    blurb:
      "William Pollard once said, “Without change, there is no innovation, creativity, or incentive for improvement. Those who initiate change will have a better opportunity to manage the change that is inevitable.”",
    href: "smeblog/upper-hand-in-business",
    date: "Jan 31, 2023",
  },
  {
    id: 5,
    title: "9 mindsets that cultivate strong customer relationships",
    blurb:
      "Contrary to common view, business isn’t all about money. What’s important in business is building a name, an identity that embodies a legacy — and that’s not possible without the participation of customers. If you represent a brand, then you know how important it is to acquire… ",
    href: "smeblog/strong-customer-relationships",
    date: "Jan 24, 2023",
  },
  {
    id: 6,
    title: "How to reduce toxicity in the workplace",
    blurb:
      "Excellence has a price, but when the well-being of a person is compromised for the sake of perfection, it’s just not worth it. Ambitious companies sometimes pressure their employees to go beyond their limit give what they don’t have. In a toxic workplace, caustic remarks …",
    href: "smeblog/reduce-toxicity",
    date: "Jan 17, 2023",
  },
  {
    id: 18,
    title: "5 Ways to jumpstart your business this New Year",
    blurb:
      "A big challenge is imposed by the new year: step up your game or go down and lose your shot. Your customers are looking for something fresh and innovative to start this year with, and unless you give them exactly what they want, you’re a goner.",
    href: "smeblog/jumpstart-this-new-year",
    date: "Jan 10, 2023",
  },
  {
    id: 20,
    title: "How to clean up your store after a busy holiday",
    blurb:
      "The holiday season was a lot of fun for everyone. Now that it’s almost over, we still have a little bit of a hangover. For some of us, getting over the merriment may not be ideal but absolutely necessary. The time of celebration is bound to end at some point, and when the lights",
    href: "smeblog/clean-after-holiday",
    date: "Jan 3, 2023",
  },
  {
    id: 19,
    title: "5 ways to prepare your business for the new year",
    blurb:
      "The new year is dawning and with it comes a whole new opportunity for you to start your business afresh. Are you ready to face new challenges and brave a new era? If not, here are a few of the things you can do to start prepping up for the coming year.",
    href: "smeblog/prepare-for-new-year",
    date: "Dec 27, 2022",
  },
  {
    id: 7,
    title: "Five low-cost tips to protect your store from shoplifters",
    blurb:
      "Believe it or not, there are business owners that think shoplifting is not a huge problem for their small stores. Some even think that shoplifters only target large stores.You might be one of these business owners. You might assume that shoplifters only amount to a very small …",
    href: "smeblog/tips-to-protect-your-store",
    date: "Dec 20, 2022",
  },
  {
    id: 8,
    title: "Why e-commerce is the key to customer engagement",
    blurb:
      "The global market has provided consumers worldwide with a range of different touchpoints through which they could review brands. Retail is no longer about merchants reaching out to their patrons; it’s now an interactive …",
    href: "smeblog/key-to-customer-engagement",
    date: "Dec 13, 2022",
  },
  {
    id: 9,
    title: "How to make millennials work for you",
    blurb:
      "Millennials are the new gems in the workplace. Whatever industry they go to, they are sought for by many employers for their natural understanding of the digital age. Nonetheless, employers are challenged to attract and keep them because they seemto be elusive …",
    href: "smeblog/make-millennials-work",
    date: "Dec 6, 2022",
  },
  {
    id: 10,
    title: "Why you need to have a business website",
    blurb:
      "Almost 80% of the developed world has an online presence, so companies are deliberately building their empires in the digital platform. If you want to succeed in the market, you have to establish your brand in  both physical and virtual channels. What better way to achieve …",
    href: "smeblog/business-website",
    date: "Nov 29, 2022",
  },
  {
    id: 13,
    title: "4 ways to drive traffic to your store this holiday season",
    blurb:
      "If there ever was a great time to start puffing up your business marketing strategy, it is now. Your customers are getting into the holiday spirit, and they are looking for ways to get the best shopping experience ever. This is where you can hop in …",
    href: "smeblog/drive-traffic-this-holiday-season",
    date: "Nov 22, 2022",
  },
  {
    id: 11,
    title: "Why companies value millennials",
    blurb:
      "The entire work industry is flooded by a whole new generation of workers. With the dawn of the technological era comes a wave of millennials ready to take over and reshape the traditional workplace. Companies around the world seek …",
    href: "smeblog/companies-value-millennials",
    date: "Nov 15, 2022",
  },
  {
    id: 12,
    title: "Customer conversion is your shot to business growth",
    blurb:
      "Imagine your sales floor swarming with people. A middle-aged man is picking up an item from the shelf, and an older woman is examining one of your posters. You have every reason to be delighted with this scenario …",
    href: "smeblog/customer-conversion",
    date: "Nov 8, 2022",
  },
  {
    id: 14,
    title: "Compete or Differentiate: What works best for your business?",
    blurb:
      "What makes a customer come to your store? Is it the excellence of your product that drives traffic, or the attractiveness of your pricing scheme? Do you differentiate? Do you compete? It is important to know how to respond to these questions because the answers might just pinpoint …",
    href: "smeblog/compete-or-differentiate",
    date: "Nov 1, 2022",
  },
  {
    id: 15,
    title: "Top retail trends of the future",
    blurb:
      "The chief executive of the Institute of Grocery Distribution, Joanne Denney-Finch, gave a talk entitled, “Forward Thinking: Trends that Shape the Future of Retail”, in the 17th Asia-Pacific Retailers Convention and Exhibition held in Manila, Philippines last October 28-30, 2015.",
    href: "smeblog/top-retail-trends",
    date: "Oct 25, 2022",
  },
  {
    id: 16,
    title: "The importance of travel retailing",
    blurb:
      "An interesting study conducted just recently manifested that 96% of those who travel relish shopping while visiting a foreign place, and 83% of them deem shopping as an important part of their trip.",
    href: "smeblog/travel-retailing",
    date: "Oct 18, 2022",
  },
  {
    id: 17,
    title: "3 ways to convince your family and friends to fund your business",
    blurb:
      "The biggest challenge that you as a budding entrepreneur may face is how to finance your business. You may have the best idea for a start-up, but unless you have the money, your idea will just be another brilliant what-if in the bin. You live in an era where almost everyone …",
    href: "smeblog/fund-your-business",
    date: "Oct 11, 2022",
  },
  {
    id: 21,
    title: "The role of branding in the evolution of retail",
    blurb:
      "Any retailer who has ever tried to sell a legacy knows that building a brand presence is not an easy task. Today, more than ever, branding has become more meaningful to retailers and consumers around the world. The changing consumer behavior paved the way to a new retail …",
    href: "smeblog/role-of-branding",
    date: "Dec 27, 2022",
  },
  {
    id: 22,
    title: "4 Ways to attract new customers to your store",
    blurb:
      "You can always change the game if you have the willingness and determination to give it your best shot. Especially now that the game is reset, you can experiment and try new ways to grow your business and drive more traffic to your store. You can’t afford to play it safe anymore.",
    href: "smeblog/ways-to-attract-customers",
    date: "Dec 20, 2022",
  },
  {
    id: 23,
    title: "4 Tell-tale signs that say you need to hire more people",
    blurb:
      "You can’t do much if you’re undermanned. Some daring entrepreneurs may have conquered the odds all by themselves but it is not always likely that a businessman can succeed in his quest without adequate assistance. Help is always …",
    href: "smeblog/signs-to-hire-more-people",
    date: "Dec 13, 2022",
  },
  {
    id: 24,
    title: "5 Ways to keep the cash flowing into your store",
    blurb:
      "Money is what sustains a business. If you don’t have enough of it at the right time to keep your store running, your business will eventually die. You may be anticipating a large profit in the coming months, but unless you have a proper cash management system, that large … ",
    href: "smeblog/keep-the-cash-flowing",
    date: "Dec 6, 2022",
  },
  {
    id: 25,
    title: "How color affects shopping behavior",
    blurb:
      "We humans are predominantly visual creatures, so it’s no surprise that 93% of the time, we tend to buy a product after being influenced by visual cues. Subconsciously, we care more about how a product looks than …",
    href: "smeblog/color-affects-behavior",
    date: "Nov 29, 2022",
  },
  {
    id: 26,
    title: "Why engaging your employees should be THE top priority",
    blurb:
      "They say that the number one rule in business is to keep the customers happy. Though the title of this article may disagree, customer engagement really should be every businessman’s …",
    href: "smeblog/engaging-employees",
    date: "Nov 22, 2022",
  },
  {
    id: 27,
    title: "How to engage your employees",
    blurb:
      "When you engage your employees, you’re doing your company a favor. An engaged employee is an asset because he directly communicates his thoughts and feelings to the customers. An employee in high spirits influences a customer to be positive. In the same way, when an employee is …",
    href: "smeblog/engage-your-employees",
    date: "Nov 15, 2022",
  },
  {
    id: 28,
    title: "Credibility is what you need to spur the growth of your business",
    blurb:
      "Small entrepreneurs are faced with the challenge of establishing credibility. It’s never easy to build a solid support group composed of loyal customers who believe in your brand. It takes more than a brilliant …",
    href: "smeblog/credibility",
    date: "Nov 8, 2022",
  },
  {
    id: 29,
    title: "9 skills every entrepreneur should learn",
    blurb:
      "The road taken by entrepreneurs is a tough one. There are too many risks with too little guarantees — but maybe that’s what makes it exciting in the first place. Going boldly as an entrepreneur is like going blindly into a dark mesh; you have both feet buried underground.",
    href: "smeblog/skills-to-learn",
    date: "Nov 1, 2022",
  },
  {
    id: 30,
    title: "Top 5 traits of a successful entrepreneur",
    blurb:
      "Entrepreneurship is not for the faint of heart. Only the strongest of characters can survive in the harsh jungle that we all typically call business. Those who dream of becoming successful entrepreneurs often wonder if they have what it takes. Well, besides the set …",
    href: "smeblog/traits-of-an-entrepreneur",
    date: "Oct 25, 2022",
  },
  {
    id: 31,
    title: "Four ways music can help your business",
    blurb:
      "The power of music is recognized everywhere. In psychology, it is used as an instrument to influence how people think without them even noticing. In business, it is more or less brought into play for the same reasons. We have listed here four of the various ways good music can …",
    href: "smeblog/music-on-business",
    date: "Oct 18, 2022",
  },
  {
    id: 32,
    title: "Use pricing as a positioning strategy",
    blurb:
      "Pricing can leverage your market positioning if you know how to use it as a branding tool. Those important numbers you associate with your products do more than just give you a lead on profits; they also …",
    href: "smeblog/pricing-as-strategy",
    date: "Oct 11, 2022",
  },
  {
    id: 33,
    title: "What pricing method is best for your business?",
    blurb:
      "What most people don’t know about pricing is that it requires a lot of considerations. Every smart businessman would agree that pricing is more than just assigning a number to an object. Those numbers you see in …",
    href: "smeblog/pricing-method",
    date: "Oct 4, 2022",
  },
  {
    id: 34,
    title: "Is it important to have a pricing strategy?",
    blurb:
      "Yes. The answer is always yes. However you look at it, pricing is an important part of business. Not only does it directly impact your profitability; it also says a lot about your brand. You can use it as a competitive edge in the …",
    href: "smeblog/pricing-strategy",
    date: "Sep 27, 2022",
  },
  {
    id: 35,
    title: "Increase traffic to your e-commerce site",
    blurb:
      "The retail world is aggressively moving into the online platform. Traditional marketing that makes use of print ads and similar materials do not do the trick anymore. Today, your e-commerce site is essentially your …",
    href: "smeblog/increase-traffic",
    date: "Sep 20, 2022",
  },
  {
    id: 36,
    title: "Perks of turning your store into a Wi-Fi hotspot",
    blurb:
      "Public Wi-Fi is not a new concept. It has been around for a long time, and yet, it can hardly be called a commonplace technology. In many parts of the world, public Wi-Fi is still a novelty — a treat offered only by progressive businesses. This reality naturally upsets the …",
    href: "smeblog/wifi-hotspot",
    date: "Sep 13, 2022",
  },
  {
    id: 37,
    title: "How to respond to negative online reviews",
    blurb:
      "You’ll get your own share of negative reviews as your business grows — it’s inevitable. And these negative reviews can take a toll on your business if you let them spin out of control. What you need to do is handle them delicately so they …",
    href: "smeblog/negative-reviews",
    date: "Sep 6, 2022",
  },
  {
    id: 38,
    title: "How to garner positive online reviews",
    blurb:
      "Online reviews can shape your overall brand image. When people talk about you in a positive way, they draw other potential clients into your business without you asking them. Positive reviews speak on your behalf; they testify to the excellence of your product. That’s why you need …",
    href: "smeblog/positive-reviews",
    date: "Aug 30, 2022",
  },
  {
    id: 39,
    title: "How important are online reviews?",
    blurb:
      "In an age where the Internet is increasingly becoming the champion source of information, online reviews are indispensable. Brands are quickly migrating to the digital platform. It won’t be long until the entire …",
    href: "smeblog/online-reviews",
    date: "Aug 23, 2022",
  },
  {
    id: 40,
    title: "3 benefits of having a business page on Facebook",
    blurb:
      "Facebook is the most popular social media network, so it’s no surprise that many are using it as a platform for their business. As a world on its own, Facebook can virtually connect everybody around the globe. For this reason and for many others, business owners are reaping …",
    href: "smeblog/benefits-of-Facebook-page",
    date: "Aug 16, 2022",
  },
];

const BlogList = ({}) => (
  <div className=" grid grid-cols-1 lg:grid-cols-2  px-4 lg:px-0 lg:ml-32 lg:gap-x-24 lg:gap-y-8 overflow-hidden mb-8 w-full lg:w-[980px]">
    {articlelist.map((item) => (
      <div key={item.id} className="mt-2 border-t border-gray-100 pt-8">
        <div className="text-xs text-gray-400 font-base tracking-tight mb-4">
          {item.date}
        </div>
        <div className="text-xl textblue font-base tracking-tighter mb-2">
          {item.title}
        </div>
        <div className="text-sm text-gray-500 font-light mb-4  tracking-wide">
          {item.blurb}
        </div>
        <div className="mb-4">
          <Link href={item.href}>
            <div className="text-xs textorange font-medium tracking-tight mt-2 mb-1 cursor-pointer">
              <BookOpenIcon className="h-4 float-left mr-2" />
              <span className="float-left">Read Article</span>
            </div>
          </Link>
        </div>
      </div>
    ))}
  </div>
);

export default BlogList;
