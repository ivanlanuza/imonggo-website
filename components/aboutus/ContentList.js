import Image from "next/image";
import Link from "next/link";
import BlueButton from "components/core/BlueButton";

const articlelist = [
  {
    id: 1,
    title: "Terrariet",
    image: "01.jpeg",
    blurb:
      "A noble vision lives on to become a legacy when generous people work hard to make it happen. Morten Jorgensen, director of Terrariet, tells the story of how their little reptile zoo in Denmark brings people closer to nature every day.",
    href: "aboutus/terrariet",
  },
  {
    id: 2,
    title: "Fresh Grocer",
    image: "02.jpeg",
    blurb:
      "The small business from Zimbabwe had to quickly pivot from B2B into B2C. From B2B to B2C, Imonggo was there to help! Now, Fresh Grocer delivers fresh produce from organic farms straight to the table of consumers.",
    href: "aboutus/freshgrocer",
  },
  {
    id: 3,
    title: "Photo Nursery",
    image: "03.jpeg",
    blurb:
      "Jeff Secrease uses Imonggo to monitor the sales and payments of his photography business that operates in four locations. Jeff trusts Imonggo to help Photo Nursery stay on track, he finds Imonggo to be easy to use for his business.",
    href: "aboutus/photonursery",
  },
  {
    id: 4,
    title: "Ananda",
    image: "04.png",
    blurb:
      "A U.S. church boutique needs a simple no-frills point-of-sale for its elderly staff. Imonggo delivers.",
    href: "aboutus/ananda",
  },
  {
    id: 5,
    title: "AREA Inc",
    image: "05.jpeg",
    blurb:
      "AREA is a small wholesale/retail modern bedding company selling bedding, furniture, home-wares, and clothing. The New York-based store has been using Imonggo in 2010.",
    href: "aboutus/areainc",
  },
  {
    id: 6,
    title: "Cayotic Motorsports",
    image: "06.png",
    blurb:
      "Mark Cummings has chosen Imonggo’s iPad app to help run Cayotic, a cool motorsports store in the Cayman Islands, and he stands by how effective it is.",
    href: "aboutus/cayoticmotorsports",
  },
];

const ContentList = ({}) => (
  <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-32 overflow-hidden mb-16">
    {articlelist.map((item) => (
      <Link href={item.href} key={item.id}>
        <div className="bg-white border-2 shadow-lg  cursor-pointer borderblue rounded-md mt-8 h-[420px]">
          <div
            className="h-3/5 bg-cover rounded-t-sm "
            style={{ backgroundImage: `url(/images/aboutus/${item.image})` }}
          ></div>
          <div className="pt-4 px-2">
            <div className="text-blue-900 tracking-wide text-lg md:text-sm xl:text-xl font-black">
              {item.title}
            </div>
            <div className="text-gray-500 tracking-wide text-xs font-base pt-4 pr-6 block md:hidden lg:block">
              {item.blurb}
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default ContentList;
