import { Button, Navbar, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(true);
  };

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Srikar's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" outline>Sign In</Button>
        </Link>
        <Navbar.Toggle onClick={handleToggle} />
      </div>
      <Navbar.Collapse className={isOpen ? "block" : "hidden"}>
        <Navbar.Link
          as={Link}
          to="/"
          active={path === "/"}
          onClick={handleLinkClick}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/about"
          active={path === "/about"}
          onClick={handleLinkClick}
        >
          About
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/projects"
          active={path === "/projects"}
          onClick={handleLinkClick}
        >
          Projects
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
