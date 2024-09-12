import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // Track the active link
  const [activeLink, setActiveLink] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Links data
  const links = [
    { id: 1, name: "Task 1", href: "/" },
    { id: 2, name: "Logical Task", href: "/logicalTask" },
    { id: 3, name: "Task 3", href: "/task3" },
    { id: 4, name: "Task 4", href: "https://virt-login-task.netlify.app" },
  ];

  // Handle link click to set active link
  const handleLinkClick = (id) => {
    setActiveLink(id);
    setIsMenuOpen(false); // Close menu when a link is clicked (on mobile)
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between py-4 mx-[12%] gap-5 md:gap-8">
      <a href="/" className="cursor-pointer flex items-center gap-1">
        <h1 className="text-26 font-semibold text-blue-700">Assesment</h1>
      </a>

      {/* Links for larger screens */}
      <ul className="flex gap-4 max-md:hidden">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.href}
              onClick={() => handleLinkClick(link.id)}
              className={`  ${
                activeLink === link.id
                  ? "font-semibold text-blue-600"
                  : "text-neutral-800 hover:text-neutral-900"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger icon for smaller screens */}
      <a href="#" className="hidden max-md:flex" onClick={handleMenuToggle}>
        <img src="hamburger.png" className="w-4 " alt="hamburger menu" />
      </a>

      {/* Dropdown menu for smaller screens */}
      {isMenuOpen && (
        <ul className="absolute right-12 top-16 bg-white shadow-md p-4 flex flex-col gap-2 max-md:flex md:hidden">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`text-black-1 hover:underline ${
                  activeLink === link.id ? "font-bold underline" : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
