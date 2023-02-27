import Link from "next/link";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/outline";

const FooterBar = ({ text }) => (
  <div className="h-full bgblue pb-8">
    <div className="grid grid-cols-3 pt-4 lg:pt-8 mx-4 lg:mx-24 gap-2 lg:gap-4">
      <div className="col-span-1">
        <div className="flex-shrink-0 flex items-center pt-1">
          <Link href="/">
            <div>
              <Image
                src="/images/core/imonggo-logo-white.png"
                width="181"
                height="34"
                className="cursor-pointer"
              />
            </div>
          </Link>
        </div>
        <div className="font-base text-xs lg:text-lg text-white w-2/3 pt-2">
          Imonggo celebrates its 12th year of offering a free and easy-to-use
          POS.
        </div>
      </div>
      <div className="col-span-1">
        <div className="pt-10 lg:pt-0 font-bold text-xs lg:text-lg text-white">
          Contact Us
        </div>
        <div className="pt-2 grid grid-cols-10">
          <PhoneIcon className="h-0 lg:h-6 text-white col-span-1 " />
          <div className="text-white font-thin text-xs lg:text-sm col-span-9">
            +1 (833) 466-6446
          </div>
        </div>
        <div className="font-bold text-white text-xs lg:text-lg pt-4 lg:pt-8">
          Follow Us
        </div>
        <div className="text-white pt-2 flex">
          <div className="cursor-pointer">
            <Link href="https://www.facebook.com/Imonggo/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-5 h-5 mr-2 lg:mr-6"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="https://www.instagram.com/imonggo/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 mr-2 lg:mr-6"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="https://twitter.com/imonggo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 mr-2 lg:mr-6"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="pl-4 lg:pl-0 pt-10 lg:pt-0 col-span-1 text-white font-medium tracking-wide text-xs lg:text-lg">
        <div className="pb-2 cursor-pointer">
          <Link href="/aboutus">About Us</Link>
        </div>
        <div className="pb-2 cursor-pointer">
          <Link href="/pricing">Pricing</Link>
        </div>
        <div className="pb-2 cursor-pointer">
          <Link href="/smeblog">SME Blog</Link>
        </div>
        <div className="cursor-pointer">
          <Link href="https://imonggo.gitbook.io/imonggo-help-center/">
            User Manual
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default FooterBar;
