/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { CartIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {

  const router = useRouter()
  console.log(router.asPath);
  const currentPath = router.asPath;


  function checkPath(pathToCheck) {
    if (currentPath == pathToCheck) {
      return "border-orange-600 ";
    }
    else {
      return "border-transparent";
    }
  }



  return (
    <Disclosure as="nav" className="md:ml-12 md:mr-8">
      {({ open }) => (
        <div>
          <div className="relative flex justify-between h-10 bg-sky-600 border-sky-600 border-4">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              {/* THIS IS THE MAIN NAV ITEMS */}
              <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                <Link href="/">
                  <a

                    className={checkPath('/') + " text-white  hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}
                  >
                    Products
                  </a>
                </Link>
                <Link href="/how-to-videos">
                  <a
                    className={checkPath('/how-to-videos') + " text-white  hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}
                  >
                    How-to-Videos
                  </a>
                </Link>
                <Link
                  href="http://www.google.com">
                  <a target="_blank"
                    rel="noreferrer"
                    className={checkPath('/make-a-payment') + " text-white  hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}
                  >
                    Make a Payment
                  </a>
                </Link>
                <Link href="/about">
                  <a
                    className={checkPath('/about') + " text-white  hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}
                  >
                    About Us
                  </a>
                </Link>
                <Link href="/contact-us">
                  <a
                    className={checkPath('/contact-us') + " text-white hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}
                  >
                    Contact Us
                  </a>
                </Link>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              

              {/* Profile dropdown */}
              <Menu as="div" className="ml-3 relative mr-3 z-10">
                <div className="text-sky-600">
                  <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500">
                    <span className="sr-only">Open user menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                            <p>test 1</p>
                    </Menu.Item>
                    <Menu.Item>                          
                            <p>test 2</p>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/home"
                className="bg-sky-50 border-sky-500 text-sky-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/products"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Products
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/how-to-videos"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                How-to-Videos
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="https://paylink.paytrace.com/?m=eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMTI4R0NNIn0.hODmRu_2tWhUR9Qto90uoC_zyGSEwtJS.ZXxXricLCiJPE3ED.cpTjxpEWpuG7BDNKkehVEKuL6HmOugWGSCUrJAoCH2s0pUIBu2FLJRkIJd9xHAs4Oxu6d-WZHMlt9dJDVeXuxIYf7Vv7Vhu8RuAzdtqZCBRrFty5nyCijWOoagYAxQl4Ypct8QIf2Y4xQjXHOJKiRSF0c3e3flKmRepQwB0aZdSWaklsheTupB5fRPMs1HqcxbHqLfvyQW5mwKqD9cc-PGIoVnOgh9VSskd2VcgnHaJ9-uqGVwfNTOdtBcd-d8zQd_GVN5ECyrWy-4LVydf81zTd8R5k8nVHbFEAFw.hGYUZ-Fs15zzDzcaT_7yXg&amount=0%2E00&amountReadOnly=false&invoiceReadOnly=false"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Make a Payment
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                About Us
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact-us"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Contact Us
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </div>

      )}
    </Disclosure>
  );
};

export default Navbar;
