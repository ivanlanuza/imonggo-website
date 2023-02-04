/* This example requires Tailwind CSS v2.0+ */

import { Disclosure } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const { asPath } = useRouter();

  return (
    <Disclosure as="nav" className="bgblue shadow  font-sans">
      {({ open }) => (
        <>
          {/* Large Menu */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex">
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
                <div className="hidden lg:ml-36 lg:flex lg:space-x-12 text-sm font-regular tracking-wide">
                  <Link href="/features">
                    <span
                      className={`cursor-pointer inline-flex items-center px-1 pt-1 
                     ${
                       asPath === "/features" ? "text-orange-500" : "text-white"
                     }`}
                    >
                      Features
                    </span>
                  </Link>
                  <Link href="/pricing">
                    <span
                      className={`cursor-pointer inline-flex items-center px-1 pt-1 
                     ${
                       asPath === "/pricing" ? "text-orange-500" : "text-white"
                     }`}
                    >
                      Pricing
                    </span>
                  </Link>
                  <Link href="/aboutus">
                    <span
                      className={`cursor-pointer inline-flex items-center px-1 pt-1 
                     ${
                       asPath === "/aboutus" ? "text-orange-500" : "text-white"
                     }`}
                    >
                      About Us
                    </span>
                  </Link>
                  <Link href="/helpcenter">
                    <span
                      className={`cursor-pointer inline-flex items-center px-1 pt-1 
                     ${
                       asPath === "/helpcenter"
                         ? "text-orange-500"
                         : "text-white"
                     }`}
                    >
                      Help Center
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center py-3 ">
                <div className="hidden xl:flex">
                  <Link href="https://secure.imonggo.com/login">
                    <div className="flex-shrink-0">
                      <button
                        type="button"
                        className="relative inline-flex items-center shadow-sm  bgblue text-white rounded-md border-white border-2 px-6 py-1      hover:border-gray-300  text-sm  cursor-pointer"
                      >
                        <span>Log In</span>
                      </button>
                    </div>
                  </Link>
                  <Link href="/signup-now">
                    <div className="flex-shrink-0">
                      <button
                        type="button"
                        className="ml-4 relative inline-flex items-center shadow-sm  bgorange text-white rounded-md border-orange-600 border-2 px-6 py-1      hover:border-white text-sm  cursor-pointer"
                      >
                        <span>Sign Up</span>
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="-ml-2 -mr-2 flex items-center xl:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="ml-8 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-900">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          {/* Small Menu */}
          <Disclosure.Panel className="xl:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="/"
                className={`  block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6
                ${
                  asPath === "/"
                    ? "bg-indigo-50 border-blue-900 text-blue-900"
                    : "border-transparent text-gray-500"
                }`}
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/features"
                className={`  block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6
                ${
                  asPath === "/features"
                    ? "bg-indigo-50 border-blue-900 text-blue-900"
                    : "border-transparent text-gray-500"
                }`}
              >
                Features
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/pricing"
                className={`  block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6
                ${
                  asPath === "/pricing"
                    ? "bg-indigo-50 border-blue-900 text-blue-900"
                    : "border-transparent text-gray-500"
                }`}
              >
                Pricing
              </Disclosure.Button>

              <Disclosure.Button
                as="a"
                href="/aboutus"
                className={`  block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6
                ${
                  asPath === "/aboutus"
                    ? "bg-indigo-50 border-blue-900 text-blue-900"
                    : "border-transparent text-gray-500"
                }`}
              >
                About Us
              </Disclosure.Button>

              <Disclosure.Button
                as="a"
                href="/helpcenter"
                className={`  block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6
                ${
                  asPath === "/helpcenter"
                    ? "bg-indigo-50 border-blue-900 text-blue-900"
                    : "border-transparent text-gray-500"
                }`}
              >
                Help Center
              </Disclosure.Button>

              <Disclosure.Button
                as="a"
                href="https://secure.imonggo.com/login"
                className={`  block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6
                ${
                  asPath === "/login"
                    ? "bg-indigo-50 border-blue-900 text-blue-900"
                    : "border-transparent text-orange-500"
                }`}
              >
                Log In to Imonggo
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
