import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from '/movie.svg';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Popular",
      path: "/popular"
    },
    {
      name: "Trending",
      path: "/trending"
    },
    {
      name: "Series",
      path: "/series"
    },
  ]

  const [navOpen, setNavOpen] = useState(false);
  const handleToggle = () => {
    setNavOpen(!navOpen)
  }

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <nav className={`bg-bg-color z-50 w-full h-20 fixed flex justify-between items-center py-4 px-10 transition-all duration-500 ease-in-out ${isScrolled ? 'navbar-scroll' : ''}`}>
      <img src={logo} width={ 60 } alt="movie logo" />
      <ul className="hidden w-1/2 h-full justify-between items-center font-bold md:flex">
        {navItems.map((items, index) => (
          <li className="hover:underline" key={index}>
            <Link className="lg:text-xl" to={items.path}>{items.name}</Link>
         </li>
       ))}
      </ul>
      <button
        className="flex md:hidden text-text-color"
        onClick={handleToggle}>
        {navOpen ?
        <XMarkIcon className="h-6 w-6" /> :
        <Bars3Icon className="h-6 w-6" />
        }
      </button>
      {navOpen && (
        <ul className="absolute bg-[#171717bb] w-full h-screen flex flex-col justify-center space-y-8 items-center font-bold top-20 left-0">
        {navItems.map((items, index) => (
          <li key={index}>
            <Link to={items.path}
            onClick={() => setNavOpen(false)}>{ items.name }</Link>
         </li>
       ))}
      </ul>
      )}
    </nav>
  )
}

export default Navbar
