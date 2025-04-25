import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Logos from "../assets/logos.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"



const navigation = [
  { name: "Dashboard", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <Disclosure as="nav" className="bg-black w-full top-0 fixed z-40" data-aos="fade-down" data-aos-duration="500">
      <div className="mx-auto max-w-7xl px-8 lg:px-8">
        <div className="flex h-20 items-center justify-between border-b border-gray-800">
          <div className="flex items-center">
            <img
              src={Logos || "/placeholder.svg"}
              alt="Acep Handika Permana"
              className="h-8 md:h-11 w-auto"
            />
          </div>

          <div className="hidden sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current ? "text-white" : "text-white hover:bg-gray-900 hover:text-white",
                    "rounded-md px-3 py-2 text-md font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6 ui-open:hidden" />
              <XMarkIcon className="hidden h-6 w-6 ui-open:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-900 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
