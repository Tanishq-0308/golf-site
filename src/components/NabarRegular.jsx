import logoImage from '/logoGreen.png';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

const NavbarRegular = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const [mobileGolfCoursesOpen, setMobileGolfCoursesOpen] = useState(false);
  const [mobileRateSheetOpen, setMobileRateSheetOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);
  const [isMobileBuyNowDropdownOpen, setIsMobileBuyNowDropdownOpen] = useState(false);

  // State for desktop dropdowns
  const [isGolfCoursesOpen, setIsGolfCoursesOpen] = useState(false);
  const [isMembershipsOpen, setIsMembershipsOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isDesktopBuyNowDropdownOpen, setIsDesktopBuyNowDropdownOpen] = useState(false);
  // New state for the nested "Courses Rate Sheet" dropdown on desktop
  const [isCoursesRateSheetOpen, setIsCoursesRateSheetOpen] = useState(false);

  // Refs for each desktop dropdown to check clicks outside
  const golfRef = useRef(null);
  const membershipsRef = useRef(null);
  const eventsRef = useRef(null);
  const contactRef = useRef(null);
  const buyNowRef = useRef(null);
  // New ref for the nested "Courses Rate Sheet" dropdown
  const coursesRateSheetRef = useRef(null);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Close all mobile dropdowns when the main menu is toggled
    setMobileDropdownOpen(false);
    setMobileEventsOpen(false);
    setMobileGolfCoursesOpen(false);
    setMobileRateSheetOpen(false);
    setMobileContactOpen(false);
    setIsMobileBuyNowDropdownOpen(false);
  };

  // Function to handle clicking on a sub-item within a mobile dropdown
  const handleMobileSubItemClick = () => {
    setIsOpen(false); // Close the main mobile menu
    setMobileDropdownOpen(false);
    setMobileEventsOpen(false);
    setMobileGolfCoursesOpen(false);
    setMobileRateSheetOpen(false);
    setMobileContactOpen(false);
    setIsMobileBuyNowDropdownOpen(false);
  };

  // This function will close all desktop dropdowns except the one being toggled
  const toggleDesktopDropdown = (menu) => {
    setIsGolfCoursesOpen(menu === 'golf' ? !isGolfCoursesOpen : false);
    setIsMembershipsOpen(menu === 'memberships' ? !isMembershipsOpen : false);
    setIsEventsOpen(menu === 'events' ? !isEventsOpen : false);
    setIsContactOpen(menu === 'contact' ? !isContactOpen : false);
    setIsDesktopBuyNowDropdownOpen(false); // Close Buy Now if another menu is opened
    setIsCoursesRateSheetOpen(false); // Close nested rate sheet if another top-level menu is opened
  };

  // Toggle for the desktop Buy Now dropdown
  const toggleDesktopBuyNowDropdown = () => {
    setIsDesktopBuyNowDropdownOpen(prev => !prev);
    // Close other desktop dropdowns when Buy Now is clicked
    setIsGolfCoursesOpen(false);
    setIsMembershipsOpen(false);
    setIsEventsOpen(false);
    setIsContactOpen(false);
    setIsCoursesRateSheetOpen(false); // Close nested rate sheet
  };

  // Function to navigate to about section and close menus
  const goToAboutSection = () => {
    navigate('/#membership-card-component');
    setIsOpen(false); // Close mobile menu if open
    setIsMobileBuyNowDropdownOpen(false); // Close mobile Buy Now dropdown
    setIsDesktopBuyNowDropdownOpen(false); // Close desktop Buy Now dropdown
    // Also close all desktop navigation dropdowns for consistency
    setIsGolfCoursesOpen(false);
    setIsMembershipsOpen(false);
    setIsEventsOpen(false);
    setIsContactOpen(false);
    setIsCoursesRateSheetOpen(false);
  };

  // Effect to close desktop dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        golfRef.current && !golfRef.current.contains(event.target) &&
        membershipsRef.current && !membershipsRef.current.contains(event.target) &&
        eventsRef.current && !eventsRef.current.contains(event.target) &&
        contactRef.current && !contactRef.current.contains(event.target) &&
        buyNowRef.current && !buyNowRef.current.contains(event.target) &&
        coursesRateSheetRef.current && !coursesRateSheetRef.current.contains(event.target) // Include new ref
      ) {
        setIsGolfCoursesOpen(false);
        setIsMembershipsOpen(false);
        setIsEventsOpen(false);
        setIsContactOpen(false);
        setIsDesktopBuyNowDropdownOpen(false);
        setIsCoursesRateSheetOpen(false); // Close nested rate sheet
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isGolfCoursesOpen, isMembershipsOpen, isEventsOpen, isContactOpen, isDesktopBuyNowDropdownOpen, isCoursesRateSheetOpen]); // Add new state to dependencies

  return (
    <nav className="w-full bg-white shadow-md z-50 sticky top-0">
      <div className="sm:mt-4 rounded-full max-w-7xl mx-auto px-4 sm:py-4 sm:px-6 lg:px-8 transition-all duration-300">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex flex-col gap-x-2">
            <Link to="/" className='flex gap-x-3'>
              <img src={logoImage} alt="Paradise Golf Logo" className="sm:h-10 mb-5 h-6 mt-4 sm:h-9 w-auto" />
              <div className="text-xl sm:text-2xl font-bold mt-5 text-black">
                Paradise<span className="ml-2 text-[#006838]">Golf</span>
              </div>
            </Link>
          </div>

          {/* Hamburger icon */}
          <div className="lg:hidden ml-auto">
            <button onClick={toggleMenu} className="text-black focus:outline-none" aria-label="Toggle menu">
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
            <Link to="/" className="font-semibold text-[#006838] hover:text-green-500 transition">Home</Link>

            {/* Golf Courses Dropdown */}
            <div className="relative" ref={golfRef}>
              <button onClick={() => toggleDesktopDropdown('golf')} className="font-semibold flex items-center gap-1 text-[#006838] hover:text-green-500 transition" aria-haspopup="true" aria-expanded={isGolfCoursesOpen}>
                Golf Courses
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isGolfCoursesOpen && (
                <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md py-2 z-50">
                  <div className="relative" ref={coursesRateSheetRef}> {/* Attach ref here for nested dropdown */}
                    <button onClick={() => setIsCoursesRateSheetOpen(prev => !prev)} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center" aria-haspopup="true" aria-expanded={isCoursesRateSheetOpen}>
                      Courses Rate Sheet
                      <svg className="h-3 w-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {isCoursesRateSheetOpen && ( 
                      <div className="absolute left-full top-0 ml-1 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                        <Link to="https://shop.paradisegolfcard.com/pages/summer-2025-participating-clubs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setIsGolfCoursesOpen(false); setIsCoursesRateSheetOpen(false); }}>Summer 2025 Member Guide & Rate Sheet</Link>
                        <Link to="https://shop.paradisegolfcard.com/pages/winter-24-25-member-guide-rate-sheet" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setIsGolfCoursesOpen(false); setIsCoursesRateSheetOpen(false); }}>Winter 24/25 Member Guide & Rate Sheet</Link>
                        <Link to="https://shop.paradisegolfcard.com/pages/winter-clubs-location" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setIsGolfCoursesOpen(false); setIsCoursesRateSheetOpen(false); }}>Winter Clubs & Locations</Link>
                        <Link to="https://shop.paradisegolfcard.com/pages/participating-winter-clubs-24-25" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setIsGolfCoursesOpen(false); setIsCoursesRateSheetOpen(false); }}>Participating Winter Clubs</Link>
                        <Link to="https://shop.paradisegolfcard.com/pages/member-rules-regulations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setIsGolfCoursesOpen(false); setIsCoursesRateSheetOpen(false); }}>Member Rules & Regulations</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Memberships */}
            <div className="relative" ref={membershipsRef}>
              <button onClick={() => toggleDesktopDropdown('memberships')} className="font-semibold flex items-center gap-1 text-[#006838] hover:text-green-500 transition" aria-haspopup="true" aria-expanded={isMembershipsOpen}>
                Memberships
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMembershipsOpen && (
                <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md py-2 z-50">
                  <a href="https://shop.paradisegolfcard.com/products/summer-winter-annual-combo-card-valid-apr-1-oct-31-2025" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsMembershipsOpen(false)}>Annual Combo Membership</a>
                  <a href="https://shop.paradisegolfcard.com/products/summer-2025-paradise-golf-membership-198-total" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsMembershipsOpen(false)}>Summer Membership</a>
                  <a href="https://shop.paradisegolfcard.com/products/early-renewal-special-winter-25-26-membership-105-total" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsMembershipsOpen(false)}>Winter Membership</a>
                </div>
              )}
            </div>

            {/* Tee Times */}
            <Link to='https://www.paradiseteetimes.com/' className="font-semibold text-[#006838] hover:text-green-500 transition">
              Tee Times
            </Link>

            {/* Events */}
            <div className="relative" ref={eventsRef}>
              <button onClick={() => toggleDesktopDropdown('events')} className="font-semibold flex items-center gap-1 text-[#006838] hover:text-green-500 transition" aria-haspopup="true" aria-expanded={isEventsOpen}>
                Events
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isEventsOpen && (
                <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md py-2 z-50">
                  <a href="/events/TournamentSchedulePage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsEventsOpen(false)}>Upcoming Events</a>
                  <a href="/events/results" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsEventsOpen(false)}>Event Pairings & Results</a>
                </div>
              )}
            </div>

            {/* Contact */}
            <div className="relative" ref={contactRef}>
              <button onClick={() => toggleDesktopDropdown('contact')} className="font-semibold text-[#006838] hover:text-green-500 transition flex items-center gap-1 cursor-pointer" aria-haspopup="true" aria-expanded={isContactOpen}>
                Contact
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isContactOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50">
                  <a href="/aboutus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsContactOpen(false)}>About Us</a>
                  <a href="/contactus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsContactOpen(false)}>Contact Us</a>
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:block pt-6">
            <div className="relative inline-block text-left" ref={buyNowRef}>
              <button
                onClick={toggleDesktopBuyNowDropdown}
                className="hover:border hover:bg-white px-4 hover:text-[#006838] text-lg font-medium p-3 mb-6 text-white bg-[#006838] rounded-full cursor-pointer text-center transition"
                aria-haspopup="true"
                aria-expanded={isDesktopBuyNowDropdownOpen}
              >
                Buy Now
              </button>
              {isDesktopBuyNowDropdownOpen && (
                <div className="absolute top-full -left-25 w-48 bg-white shadow-xl rounded-md z-50">
                  <ul className="flex flex-col py-2 ">
                    <button onClick={goToAboutSection} className="px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer w-full text-left">Combo Membership</button>
                    <Link to='/events/TournamentSchedulePage' className="block px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer" onClick={goToAboutSection}>Tournaments</Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-4/5 bg-white shadow-lg z-50 lg:hidden transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="flex flex-col p-6 space-y-4">
          <Link to="/" className="text-black font-semibold text-lg" onClick={handleMobileSubItemClick}>Home</Link>

          {/* Mobile Golf Courses Dropdown */}
          <button onClick={() => setMobileGolfCoursesOpen(!mobileGolfCoursesOpen)} className="flex justify-between items-center font-semibold text-black text-lg" aria-haspopup="true" aria-expanded={mobileGolfCoursesOpen}>
            Golf Courses
            <svg className={`h-5 w-5 transition-transform ${mobileGolfCoursesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileGolfCoursesOpen && (
            <div className="ml-4 flex flex-col space-y-2">
              <button onClick={() => setMobileRateSheetOpen(!mobileRateSheetOpen)} className="flex justify-between items-center font-semibold text-gray-700" aria-haspopup="true" aria-expanded={mobileRateSheetOpen}>
                Courses Rate Sheet
                <svg className={`h-5 w-5 transition-transform ${mobileRateSheetOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileRateSheetOpen && (
                <div className="ml-4 flex flex-col space-y-1">
                  <a href="https://shop.paradisegolfcard.com/pages/summer-2025-participating-clubs" className="text-gray-600" target="_blank" rel="noopener noreferrer" onClick={handleMobileSubItemClick}>Summer 2025 Member Guide & Rate Sheet</a>
                  <a href="https://shop.paradisegolfcard.com/pages/winter-24-25-member-guide-rate-sheet" className="text-gray-600" target="_blank" rel="noopener noreferrer" onClick={handleMobileSubItemClick}>Winter 24/25 Member Guide & Rate Sheet</a>
                  <a href="https://shop.paradisegolfcard.com/pages/winter-clubs-location" className="text-gray-600" target="_blank" rel="noopener noreferrer" onClick={handleMobileSubItemClick}>Winter Clubs & Locations</a>
                  <a href="https://shop.paradisegolfcard.com/pages/participating-winter-clubs-24-25" className="text-gray-600" target="_blank" rel="noopener noreferrer" onClick={handleMobileSubItemClick}>Participating Winter Clubs</a>
                  <a href="https://shop.paradisegolfcard.com/pages/member-rules-regulations" className="text-gray-600" target="_blank" rel="noopener noreferrer" onClick={handleMobileSubItemClick}>Member Rules & Regulations</a>
                </div>
              )}
            </div>
          )}

          {/* Mobile Memberships Dropdown */}
          <button onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)} className="flex justify-between items-center font-semibold text-black text-lg" aria-haspopup="true" aria-expanded={mobileDropdownOpen}>
            Memberships
            <svg className={`h-5 w-5 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileDropdownOpen && (
            <div className="ml-4 flex flex-col space-y-2">
              <a href="https://shop.paradisegolfcard.com/products/summer-winter-annual-combo-card-valid-apr-1-oct-31-2025" className="text-gray-700" target="_blank" rel="noopener noreferrer" onClick={handleMobileSubItemClick}>Annual Combo Membership</a>
              <a href="https://shop.paradisegolfcard.com/products/summer-2025-paradise-golf-membership-198-total" className="text-gray-700" target="_blank" rel="noopener noreferrer" onClick={handleMobileSubItemClick}>Summer Membership</a>
              <a href="https://shop.paradisegolfcard.com/products/early-renewal-special-winter-25-26-membership-105-total" className="text-gray-700" target="_blank" rel="noopener noreferrer" onClick={handleMobileSubItemClick}>Winter Membership</a>
            </div>
          )}

          {/* Mobile Tee Times */}
          <a href="https://www.paradiseteetimes.com/" className="text-black font-semibold text-lg" target="_blank" rel="noopener noreferrer" onClick={handleMobileSubItemClick}>Tee Times</a>

          {/* Mobile Events Dropdown */}
          <button onClick={() => setMobileEventsOpen(!mobileEventsOpen)} className="flex justify-between items-center font-semibold text-black text-lg" aria-haspopup="true" aria-expanded={mobileEventsOpen}>
            Events
            <svg className={`h-5 w-5 transition-transform ${mobileEventsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileEventsOpen && (
            <div className="ml-4 flex flex-col space-y-2">
              <a href="/events/TournamentSchedulePage" className="text-gray-700" onClick={handleMobileSubItemClick}>Upcoming Events</a>
              <a href="/events/results" className="text-gray-700" onClick={handleMobileSubItemClick}>Event Pairings & Results</a>
            </div>
          )}

          {/* Mobile Contact Dropdown */}
          <button onClick={() => setMobileContactOpen(!mobileContactOpen)} className="flex justify-between items-center font-semibold text-black text-lg" aria-haspopup="true" aria-expanded={mobileContactOpen}>
            Contact
            <svg className={`h-5 w-5 transition-transform ${mobileContactOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileContactOpen && (
            <div className="ml-4 flex flex-col space-y-2">
              <a href="/aboutus" className="text-gray-700" onClick={handleMobileSubItemClick}>About Us</a>
              <a href="/contactus" className="text-gray-700" onClick={handleMobileSubItemClick}>Contact Us</a>
            </div>
          )}

          {/* Mobile CTA Buttons */}
          <div className="pt-6 flex flex-col space-y-4 relative">
            <button
              onClick={() => setIsMobileBuyNowDropdownOpen(prev => !prev)}
              className="text-lg font-medium p-3 text-white bg-[#006838] rounded-full cursor-pointer text-center hover:bg-green-600 transition"
              aria-haspopup="true"
              aria-expanded={isMobileBuyNowDropdownOpen}
            >
              Buy Now
            </button>
            {isMobileBuyNowDropdownOpen && (
              <div className="w-full bg-white shadow-lg rounded-lg z-50">
                <ul className="py-2">
                  <button onClick={goToAboutSection} className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer text-gray-700 w-full text-left">
                    Combo Membership
                  </button>
                  <Link to='/events/TournamentSchedulePage' className="block px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer text-gray-700" onClick={handleMobileSubItemClick}>
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

export default NavbarRegular;
