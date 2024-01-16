import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import NavConstant from "../../constant/HeaderConstant/NavConstant";
import Image from "next/image";
import { useIsVisible } from 'react-is-visible';
import { useRouter } from "next/router"; // Import the useRouter

const Header = () => {
  const navToggle = useRef(null);
  const navHambargar = useRef(null);
  const navRef = useRef();
  const isVisible = useIsVisible(navRef);

  const router = useRouter(); // Access the router

  // State to track the active link
  const [activeLink, setActiveLink] = useState("Home");

  // Function to toggle navigation
  function toggleNav() {
    try {
      navHambargar.current.classList.toggle('h-active');
      navToggle.current.classList.toggle('slidenav');
    } catch (err) {}
  }

  // Function to toggle sub-menu
  function toggleSubMenu(e) {
    try {
      if (e.target.nextSibling.style.display === "block") {
        e.target.nextSibling.style.display = "none";
        e.target.innerHTML = "+";
      } else {
        e.target.nextSibling.style.display = "block";
        e.target.innerHTML = "-";
      }
    } catch (err) {}
  }

  // Use useEffect to update the active link based on the current route
  useEffect(() => {
    const currentRoute = router.pathname;

    // Update the active link based on the current route
    if (currentRoute === "/") {
      setActiveLink("Home");
    } else if (currentRoute === "/about") {
      setActiveLink("About");
    } else if (currentRoute === "/services") {
      setActiveLink("Services");
    } else if (currentRoute === "/contact") {
      setActiveLink("Contact");
    }
  }, [router.pathname]);

  return (
    <>
      <nav ref={navRef}>
        <div className={`header-menu-area hrrd-menu ${isVisible ? '' : 'sticky'} `}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-4 col-xl-2 col-lg-2 col-sm-6 col-6">
                <div className="logo text-left">
                  <Link href="/">
                    <h1><span className="logoColor">EliteTech</span> Experts</h1>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 col-lg-7 col-sm-6 col-6">
                <div className="hidden-lg hamburger" ref={navHambargar} onClick={toggleNav}>
                  <span className="h-top"></span>
                  <span className="h-middle"></span>
                  <span className="h-bottom"></span>
                </div>
                <nav className="main-nav" ref={navToggle}>
                  <div className="logo mobile-ham-logo d-lg-none d-block text-left">
                    <Link href="/">
					<h3>EliteCRM Experts</h3>
                    </Link>
                  </div>
                  <ul>
                    <li>
                      <Link href="/">
                        <a className={activeLink === "Home" ? "active" : ""} onClick={() => setActiveLink("Home")}>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <a className={activeLink === "About" ? "active" : ""} onClick={() => setActiveLink("About")}>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a className={activeLink === "Services" ? "active" : ""} onClick={() => setActiveLink("Services")}>Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a className={activeLink === "Contact" ? "active" : ""} onClick={() => setActiveLink("Contact")}>Contact</a>
                      </Link>
                    </li>
                  </ul>
                  <div className="menu-btn-wrap d-block d-lg-none">
                    <Link href="/contact"><a className="common-btn btn-hrrd-2">Book Demo</a></Link>
                  </div>
                </nav>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-3 d-none d-lg-block">
                <div className="menu-btn-wrap">
                  <Link href="/contact"><a className="common-btn btn-hrrd-2">Book Demo</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;