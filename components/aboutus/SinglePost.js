import Link from "next/link";
import BottomTiltWhite from "components/core/BottomTiltWhite";
const SinglePost = ({
  title,
  subtitle,
  banner_image,
  paragraphs,
  next_article_url,
  next_article_title,
}) => (
  <div className="pt-16 mybg pb-24  px-4 md:px-0  ">
    <div className="flex justify-center">
      <div className="w-full md:w-4/5 xl:w-3/5 flex justify-start">
        <div>
          <div className="text-2xl lg:text-4xl font-black text-blue-900 text-left pb-1 ">
            {title}
          </div>
          <div className="text-md lg:text-lg font-base textorange text-left pb-0 ">
            {subtitle}
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center">
      <div className="bg-white rounded-md mt-8 w-full md:w-4/5 lg:w-3/5">
        <div className="relative">
          <div
            className="h-[240px] md:h-[420px] rounded-t-md bg-cover"
            style={{
              backgroundImage: `url(/images/aboutus/${banner_image})`,
            }}
          ></div>
          <BottomTiltWhite />
        </div>
        <div className="p-4 md:p-8  ">
          {paragraphs.map((paragraph) => (
            <div key={paragraph.id}>
              <div className="pt-4 font-base tracking-wide text-md text-blue-900">
                {paragraph.text}
              </div>
              <div className="pt-4 font-bold tracking-wide text-xl text-blue-900">
                {paragraph.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="flex justify-center">
      <div className="w-full md:w-4/5 xl:w-3/5 relative float-right mt-8">
        <div className="text-blue-900 float-right text-sm font-base cursor-pointer">
          Next Featured Customer:
          <Link href={`/${next_article_url}`}>
            <span className="font-bold text-md"> {next_article_title}</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default SinglePost;
