import { useState } from "react";

// icons
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

// element

// gsap
import gsap from "gsap";

// data
import { menuItem } from "../assets/data/data";
import { Link } from "react-scroll";
import ButtonBlueLarge from "../elements/ButtonBlueLarge";
import ButtonBlue from "../elements/ButtonBlue";

const NavbarComponents = () => {
  const [openMenu, setOpenMenu] = useState(true);

  if (openMenu === false) {
    gsap.fromTo(
      ".menu",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "Power2.out" }
    );
  }

    const menus = document.querySelectorAll(".menu");

    menus.forEach((item) => {
      item.addEventListener("click", () => {
        setOpenMenu(true);
      });
    });

  const [navScroll, setNavScroll] = useState(false);

  const scrollNav = () => {
    window.scrollY > 10 ? setNavScroll(true) : setNavScroll(false);
  };

  window.addEventListener("scroll", scrollNav);
  return (
    <section
      className={`bg-white fixed w-full ${
        navScroll ? "shadow-lg" : "shadow-none"
      } duration-500 ease-in-out`}
    >
      <div className="container-primary justify-between overflow-hidden">
        <div
          className="relative z-50 w-full"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <a href="#" className="font-bold text-3xl text-gray-900">
            BIZ<span>NOVA</span>
          </a>
        </div>
        <div className="cursor-pointer text-gray-900 text-3xl relative z-50 md:hidden">
          {openMenu ? (
            <CgMenuRight onClick={() => setOpenMenu(!openMenu)} />
          ) : (
            <IoMdClose onClick={() => setOpenMenu(!openMenu)} />
          )}
        </div>
        {/* mobile navbar */}
        <div
          className={`fixed flex flex-col bg-white z-40 top-0 w-full min-h-screen p-5 py-16 ${
            openMenu ? "-right-full" : "right-0"
          } duration-700 ease-out md:hidden`}
        >
          {menuItem.map((item, i) => (
            <Link
              key={i}
              className="py-2 font-medium text-gray-800 text-lg menu"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 menu">
            <ButtonBlueLarge />
          </div>
        </div>

        {/* dekstop Navbar */}
        <div
          className="hidden md:flex items-center justify-center w-full gap-5 "
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          {menuItem.map((item, i) => (
            <Link
              to={item.path}
              key={i}
              className="text-gray-600 font-medium cursor-pointer hover:text-blue-600 duration-300 ease-in-out"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div
          className="hidden md:flex items-center justify-end w-full"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <ButtonBlue text={"Purchase Now"} />
        </div>
      </div>
    </section>
  );
};

export default NavbarComponents;
