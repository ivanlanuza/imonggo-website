import Image from "next/image";
import Link from "next/link";
import BlueButton from "components/core/BlueButton";

import { BookOpenIcon } from "@heroicons/react/solid";

const articlelist = [
  {
    id: 1,
    title: "4 simple accounting mistakes that SMEs should watch out for",
    blurb:
      "Accounting is a language that scares most people. There just seems to be no way of perfecting the trade. Even the most experienced accountants make small mistakes every so often, and we all know that small mistakes in accounting can lead to grave consequences.",
    href: "smeblog/accounting-mistakes",
    date: "February 12, 2022",
  },
  {
    id: 2,
    title: "9 mindsets that cultivate strong customer relationships",
    image: "02.jpeg",
    blurb:
      "The small business from Zimbabwe had to quickly pivot from B2B into B2C. From B2B to B2C, Imonggo was there to help! Now, Fresh Grocer delivers fresh produce from organic farms straight to the table of consumers.",
    href: "smeblog/9-mindsets",
    date: "February 12, 2022",
  },
  {
    id: 3,
    title: "How to reduce toxicity in the workplace",
    image: "03.jpeg",
    blurb:
      "Jeff Secrease uses Imonggo to monitor the sales and payments of his photography business that operates in four locations. Jeff trusts Imonggo to help Photo Nursery stay on track, he finds Imonggo to be easy to use for his business.",
    href: "smeblog/reduce-toxicity",
    date: "February 12, 2022",
  },
  {
    id: 4,
    title: "Five low-cost tips to protect your store from shoplifters",
    image: "04.png",
    blurb:
      "A U.S. church boutique needs a simple no-frills point-of-sale for its elderly staff. Imonggo delivers.",
    href: "smeblog/low-cost-tips-shoplift",
    date: "February 12, 2022",
  },
  {
    id: 5,
    title: "Choosing the right loyalty program for your store",
    image: "05.jpeg",
    blurb:
      "The backbone of the retail industry is the customer. A business is sure to thrive when it has a ready list of loyal patrons, and a prospect to acquire new ones. This is why businesses have to come up with different strategies and techniques to keep the customers...",
    href: "smeblog/loyalty-program",
    date: "February 12, 2022",
  },
  {
    id: 6,
    title: "4 simple accounting mistakes that SMEs should watch out for",
    blurb:
      "Accounting is a language that scares most people. There just seems to be no way of perfecting the trade. Even the most experienced accountants make small mistakes every so often, and we all know that small mistakes in accounting can lead to grave consequences.",
    href: "smeblog/accounting-mistakes",
    date: "February 12, 2022",
  },
];
{
  /*
      <Link href={item.href} key={item.id}>
        <div className="bg-white border shadow-lg  cursor-pointer border-white rounded-md mt-8 h-full">
          <div className="pt-4 px-2">
            <div className="text-blue-900 tracking-wide text-lg md:text-sm xl:text-md font-medium">
              {item.title}
            </div>
            <div className="text-gray-500 tracking-wide text-xs font-base pt-4 pr-6 block ">
              {item.blurb}
            </div>
          </div>
        </div>
      </Link>
    */
}

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
