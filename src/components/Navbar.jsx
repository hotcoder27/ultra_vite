
import { useState } from "react"
import { Menu } from "@headlessui/react"
import { logo } from "../utils"
import close from "/assets/svg/close.svg"
import menu from "/assets/svg/menu.svg"

const navLinks = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Services",
    url: "#services",
    isDropdown: true,
  },
  {
    label: "Products",
    url: "/products",
  },
  {
    label: "Contact",
    url: "#contact",
  },
]

const serviceLinks = [
  { label: "Study Abroad", href: "/study-abroad" },
  { label: "Travel Abroad", href: "/travel-abroad" },
  { label: "Online Tutoring & Test Prep", href: "/etutor" },
  { label: "Business & Career", href: "/business-career" },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="fixed top-0 z-50 w-full shadow-md">
      <nav className="flex items-center justify-between w-full px-4 py-4 bg-white">
        <div>
          <a href="/">
            <img src={logo || "/placeholder.svg"} alt="Ultra Ade Tech Logo" width={80} height={18} />
          </a>
        </div>
        <div className="flex items-center space-x-4 max-md:hidden">
          {navLinks.map((link) =>
            link.isDropdown ? (
              <Menu as="div" key={link.label} className="relative inline-block text-left">
                <div>
                  <Menu.Button className="flex items-center text-gray-600 hover:text-green-500 transition-all cursor-pointer">
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Menu.Button>
                </div>
                <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="py-1">
                    {serviceLinks.map((serviceLink) => (
                      <Menu.Item key={serviceLink.label}>
                        {({ active }) => (
                          <a
                            href={serviceLink.href}
                            className={`${
                              active ? "bg-gray-100 text-green-500" : "text-gray-700"
                            } block px-4 py-2 text-sm`}
                          >
                            {serviceLink.label}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Menu>
            ) : (
              <a
                key={link.label}
                href={link.url}
                className="text-gray-600 hover:text-green-500 transition-all cursor-pointer"
              >
                {link.label}
              </a>
            ),
          )}
        </div>
        <div className="max-md:hidden">
          <a href="#contact">
            <button
              className="inline-flex h-11 items-center justify-center cursor-pointer
                bg-green-500 px-10 py-6 rounded-full text-sm font-medium text-white hover:bg-green-600
                transition-all"
            >
              Get Started
            </button>
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <img
              src={isMenuOpen ? close : menu}
              alt={isMenuOpen ? "Close" : "Menu"}
              className="w-6 h-6 text-green-500"
            />
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-green-500">
          {navLinks.map((link) =>
            link.isDropdown ? (
              <div key={link.label} className="flex flex-col items-center w-full">
                <span className="text-white font-medium mb-2">{link.label}</span>
                <div className="bg-green-600 w-full py-2">
                  {serviceLinks.map((serviceLink) => (
                    <a
                      key={serviceLink.label}
                      href={serviceLink.href}
                      className="block text-white text-sm py-2 px-4 text-center hover:bg-green-700"
                    >
                      {serviceLink.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={link.label} href={link.url} className="text-white transition-all cursor-pointer">
                {link.label}
              </a>
            ),
          )}
          <a href="#contact">
            <button className="bg-white text-green-500 border-4 border-green-500 px-4 py-2 rounded-md">
              Get Started
            </button>
          </a>
        </div>
      )}
    </div>
  )
}

export default Navbar

