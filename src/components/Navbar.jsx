import logoImage from '/logoGreen.png';
import { Link } from 'react-router-dom';
import logoImageWhite from '/PG-2-white(1).png';
import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileTeeTimesOpen, setMobileTeeTimesOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const [mobileGolfCoursesOpen, setMobileGolfCoursesOpen] = useState(false);
  const [mobileRateSheetOpen, setMobileRateSheetOpen] = useState(false);
  const [isBuyNowDropdownOpen, setIsBuyNowDropdownOpen] = useState(false);

  const [isGolfCoursesOpen, setIsGolfCoursesOpen] = useState(false);
  const [isMembershipsOpen, setIsMembershipsOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleBuyNowDropdown = () => setIsBuyNowDropdownOpen(prev => !prev);

  const toggleDropdown = (menu) => {
    setIsGolfCoursesOpen(menu === 'golf' ? !isGolfCoursesOpen : false);
    setIsMembershipsOpen(menu === 'memberships' ? !isMembershipsOpen : false);
    setIsEventsOpen(menu === 'events' ? !isEventsOpen : false);
    setIsContactOpen(menu === 'contact' ? !isContactOpen : false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buyNowRef = useRef(null);

// Close dropdown on outside click
useEffect(() => {
  const handleClickOutside = (event) => {
    if (buyNowRef.current && !buyNowRef.current.contains(event.target)) {
      setIsBuyNowDropdownOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);


  const textColor = isScrolled ? 'text-[#006838]' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="sm:mt-4 rounded-full max-w-7xl mx-auto px-4 sm:py-4 sm:px-6 lg:px-8 transition-all duration-300">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex flex-col gap-x-2">
            <Link to="/" className='flex gap-x-3'>
              <img src={isScrolled ? logoImage : logoImageWhite} alt="Paradise Golf Logo" className="sm:h-10 mb-5 h-6 mt-4 sm:h-9 w-auto" />
              <div className={`text-xl sm:text-2xl mt-5 font-bold mt-3 ${textColor}`}>
                Paradise<span className={`ml-2 ${isScrolled ? 'text-[#006838]' : 'text-white'}`}>Golf</span>
              </div>
            </Link>
          </div>

          {/* Hamburger */}
          <div className="lg:hidden ml-auto">
            <button onClick={toggleMenu} className={`${textColor} focus:outline-none`} aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 mr-10">
            <a href="#" className={`font-semibold ${textColor} hover:text-green-500 transition`}>Home</a>

            {/* Golf Courses */}
            <div className="relative">
              <button onClick={() => toggleDropdown('golf')} className={`font-semibold flex items-center gap-1 ${textColor} hover:text-green-500 transition`}>
                Golf Courses
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isGolfCoursesOpen && (
                <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md py-2 z-50">
                  <div className="relative">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center">
                      Courses Rate Sheet
                      <svg className="h-3 w-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <div className="absolute left-full top-0 ml-1 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                      <Link to="https://shop.paradisegolfcard.com/pages/summer-2025-participating-clubs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Summer 2025 Member Guide & Rate Sheet</Link>
                      <Link to="https://shop.paradisegolfcard.com/pages/winter-24-25-member-guide-rate-sheet" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Winter 24/25 Member Guide & Rate Sheet</Link>
                      <Link to="https://shop.paradisegolfcard.com/pages/winter-clubs-location" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Winter Clubs & Locations</Link>
                      <Link to="https://shop.paradisegolfcard.com/pages/participating-winter-clubs-24-25" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Participating Winter Clubs</Link>
                      <Link to="https://shop.paradisegolfcard.com/pages/member-rules-regulations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Member Rules & Regulations</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Memberships */}
            <div className="relative">
              <button onClick={() => toggleDropdown('memberships')} className={`font-semibold flex items-center gap-1 ${textColor} hover:text-green-500 transition`}>
                Memberships
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMembershipsOpen && (
                <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md py-2 z-50">
                  <a href="https://shop.paradisegolfcard.com/products/summer-winter-annual-combo-card-valid-apr-1-oct-31-2025" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Annual Combo Membership</a>
                  <a href="https://shop.paradisegolfcard.com/products/summer-2025-paradise-golf-membership-198-total" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Summer Membership</a>
                  <a href="https://shop.paradisegolfcard.com/products/early-renewal-special-winter-25-26-membership-105-total" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Winter Membership</a>
                </div>
              )}
            </div>

            {/* Tee Times */}
            <Link to='https://www.paradiseteetimes.com/' className={`font-semibold flex items-center gap-1 ${textColor} hover:text-green-500 transition`}>
              Tee Times
            </Link>

            {/* Events */}
            <div className="relative">
              <button onClick={() => toggleDropdown('events')} className={`font-semibold flex items-center gap-1 ${textColor} hover:text-green-500 transition`}>
                Events
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isEventsOpen && (
                <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md py-2 z-50">
                  <a href="/events/TournamentSchedulePage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Upcoming Events</a>
                  <a href="/events/results" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Event Pairings & Results</a>
                </div>
              )}
            </div>

            {/* Contact */}
            <div className="relative">
              <button onClick={() => toggleDropdown('contact')} className={`font-semibold flex items-center gap-1 ${textColor} hover:text-green-500 transition`}>
                Contact
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isContactOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50">
                  <a href="/aboutus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</a>
                  <a href="/contactus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact Us</a>
                </div>
              )}
            </div>
          </div>

          {/* Buy Now CTA */}
          {/* <div className="flex flex-col space-y-4">
            <div className="relative group inline-block text-left">
              <div className={`hidden lg:block text-lg font-medium px-5 py-3 rounded-full text-center cursor-pointer transition 
                ${isScrolled ? 'bg-white border border-[#006838] text-[#006838] hover:bg-[#e6f4ec]' : 'bg-[#006838] text-white hover:bg-white hover:text-[#006838]'}`}>
                Buy Now
              </div>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="flex flex-col py-2 ">
                  <a href='#membership-card-component' className="px-4 hover:bg-gray-100 text-gray-700 cursor-pointer">Combo Membership</a>
                  <Link to='/events/TournamentSchedulePage' className="px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer">Tournaments</Link>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="relative hidden lg:block" ref={buyNowRef}>
  <button
    onClick={toggleBuyNowDropdown}
    className={`text-lg font-medium px-5 py-3 rounded-full text-center cursor-pointer transition 
      ${isScrolled ? 'bg-white border border-[#006838] text-[#006838] hover:bg-[#e6f4ec]' : 'bg-[#006838] text-white hover:bg-white hover:text-[#006838]'}`}
  >
    Buy Now
  </button>

  {isBuyNowDropdownOpen && (
    <div className="absolute top-full -left-25 mt-2 w-48 bg-white shadow-xl rounded-md z-50">
      <ul className="flex flex-col py-2">
        <a
          href="#membership-card-component"
          onClick={() => setIsBuyNowDropdownOpen(false)}
          className="px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer"
        >
          Combo Membership
        </a>
        <Link
          to="/events/TournamentSchedulePage"
          onClick={() => setIsBuyNowDropdownOpen(false)}
          className="px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer"
        >
          Tournaments
        </Link>
      </ul>
    </div>
  )}
</div>

        </div>
      </div>

{/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-4/5 bg-white shadow-lg z-50 lg:hidden transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="flex flex-col p-6 space-y-4">
          <a href="#" className="text-black font-semibold text-lg" onClick={() => setIsOpen(false)}>Home</a>

          {/* Mobile Golf Courses Dropdown */}
          <button onClick={() => setMobileGolfCoursesOpen(!mobileGolfCoursesOpen)} className="flex justify-between items-center font-semibold text-black text-lg">
            Golf Courses
            <svg className={`h-5 w-5 transition-transform ${mobileGolfCoursesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileGolfCoursesOpen && (
            <div className="ml-4 flex flex-col space-y-2">
              {/* <Link to="/golfcourses" onClick={() => setIsOpen(false)} className="text-gray-700">All Golf Courses</Link> */}

              <button onClick={() => setMobileRateSheetOpen(!mobileRateSheetOpen)} className="flex justify-between items-center font-semibold text-gray-700">
                Courses Rate Sheet
                <svg className={`h-5 w-5 transition-transform ${mobileRateSheetOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileRateSheetOpen && (
                <div className="ml-4 flex flex-col space-y-1">
                  <a href="https://shop.paradisegolfcard.com/pages/summer-2025-participating-clubs" className="text-gray-600" target="_blank" rel="noopener noreferrer">Summer 2025 Member Guide & Rate Sheet</a>
                  <a href="https://shop.paradisegolfcard.com/pages/winter-24-25-member-guide-rate-sheet" className="text-gray-600" target="_blank" rel="noopener noreferrer">Winter 24/25 Member Guide & Rate Sheet</a>
                  <a href="https://shop.paradisegolfcard.com/pages/winter-clubs-location" className="text-gray-600" target="_blank" rel="noopener noreferrer">Winter Clubs & Locations</a>
                  <a href="https://shop.paradisegolfcard.com/pages/participating-winter-clubs-24-25" className="text-gray-600" target="_blank" rel="noopener noreferrer">Participating Winter Clubs</a>
                  <a href="https://shop.paradisegolfcard.com/pages/member-rules-regulations" className="text-gray-600" target="_blank" rel="noopener noreferrer">Member Rules & Regulations</a>
                </div>
              )}
            </div>
          )}

          {/* Mobile Memberships Dropdown */}
          <button onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)} className="flex justify-between items-center font-semibold text-black text-lg">
            Memberships
            <svg className={`h-5 w-5 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileDropdownOpen && (
            <div className="ml-4 flex flex-col space-y-2">
              <a href="https://shop.paradisegolfcard.com/products/summer-winter-annual-combo-card-valid-apr-1-oct-31-2025" className="text-gray-700" target="_blank" rel="noopener noreferrer">Annual Combo Membership</a>
              <a href="https://shop.paradisegolfcard.com/products/summer-2025-paradise-golf-membership-198-total" className="text-gray-700" target="_blank" rel="noopener noreferrer">Summer Membership</a>
              <a href="https://shop.paradisegolfcard.com/products/early-renewal-special-winter-25-26-membership-105-total" className="text-gray-700" target="_blank" rel="noopener noreferrer">Winter Membership</a>
            </div>
          )}

          {/* Mobile Tee Times */}
          <a href="https://www.paradiseteetimes.com/" className="text-black font-semibold text-lg" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Tee Times</a>

          {/* Mobile Events Dropdown */}
          <button onClick={() => setMobileEventsOpen(!mobileEventsOpen)} className="flex justify-between items-center font-semibold text-black text-lg">
            Events
            <svg className={`h-5 w-5 transition-transform ${mobileEventsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileEventsOpen && (
            <div className="ml-4 flex flex-col space-y-2">
              <Link to="/events/TournamentSchedulePage" className="text-gray-700" onClick={() => setIsOpen(false)}>Upcoming Events</Link>
              <a href="/events/results" className="text-gray-700" onClick={() => setIsOpen(false)}>Event Pairings & Results</a>
            </div>
          )}

          {/* Mobile Contact Dropdown */}
          <button onClick={() => setMobileTeeTimesOpen(!mobileTeeTimesOpen)} className="flex justify-between items-center font-semibold text-black text-lg">
            Contact
            <svg className={`h-5 w-5 transition-transform ${mobileTeeTimesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileTeeTimesOpen && (
            <div className="ml-4 flex flex-col space-y-2">
              <a href="/aboutus" className="text-gray-700" onClick={() => setIsOpen(false)}>About Us</a>
              <a href="/contactus" className="text-gray-700" onClick={() => setIsOpen(false)}>Contact Us</a>
            </div>
          )}

          {/* Mobile CTA Buttons */}
          <div className="pt-6 flex flex-col space-y-4 relative">
            {/* Buy Now Button */}
            <button
              onClick={toggleBuyNowDropdown}
              className="text-lg font-medium p-3 text-white bg-[#006838] rounded-full cursor-pointer text-center hover:bg-green-600 transition"
            >
              Buy Now
            </button>

            {/* Dropdown */}
            {isBuyNowDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-50">
                <ul className="py-2">
                  <li>
                    <a href='#membership-card-component' onClick={toggleMenu} className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer text-gray-700">
                      Combo Membership
                    </a>
                  </li>
                  <Link to='events/TournamentSchedulePage' className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm">
                    Tournaments
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div >
    </nav>
  );
};

export default Navbar;






