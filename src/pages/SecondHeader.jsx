import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { SlNote } from "react-icons/sl";
import { UserAuth } from "../context/AuthContext";

function SecondHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { user, logOut } = UserAuth();

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <SlNote className="w-8 h-8 fill-current text-[#ff4d30]" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>Welcome, {user?.displayName}</li>
              <li className="ml-8">
                <Link>
                  <button
                    className="btn-sm text-white bg-[#ff4d30] hover:bg-[#ff644c] px-4 my-2 font-medium w-full inline-flex items-center justify-center border border-transparent"
                    onClick={handleSignOut}
                  >
                    Logout
                  </button>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-[#ff4d30] hover:text-[#ff3a30] transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav
              id="mobile-nav"
              ref={mobileNav}
              className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
              style={
                mobileNavOpen
                  ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 }
                  : { maxHeight: 0, opacity: 0.8 }
              }
            >
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <Link>
                    <button
                      className="btn-sm text-white bg-[#ff4d30] hover:bg-[#ff644c] px-4 my-2 ont-medium w-full inline-flex items-center justify-center border border-transparent"
                      onClick={handleSignOut}
                    >
                      Logout
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default SecondHeader;
