const SinglePost = ({ title, paragraphs }) => (
  <div className="pt-0 mybg pb-24  px-4 md:px-0  ">
    <div className="flex justify-center">
      <div className="w-full md:w-4/5 xl:w-3/5 flex justify-start"></div>
    </div>

    <div className="flex justify-center">
      <div className="bg-white rounded-b-xl mt-0 w-full md:w-4/5 lg:w-3/5">
        <div className="relative"></div>
        <div className="p-8 pt-24 text-3xl textorange font-bold tracking-tighter capitalize ">
          {title}
        </div>
        <div className="p-4 md:p-8 md:pt-0  ">
          {paragraphs.map((paragraph) => (
            <div key={paragraph.id}>
              <div className="text-md text-gray-500 font-light mb-2  tracking-wide pt-2">
                {paragraph.text}
              </div>
              <div className="pt-2 font-medium tracking-wide text-lg text-gray-900">
                {paragraph.subtitle}
              </div>
              {paragraph.bullet ? (
                <div className="text-md text-gray-500 font-light mb-2  tracking-wide pt-0 -mt-6 pl-4 list-disc">
                  <li>{paragraph.bullet}</li>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SinglePost;
