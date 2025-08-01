import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logoImg from '/PG-2-white(1).png';

export default function FootterSection() {

    const navigate = useNavigate();
    const goToAboutSection = () => {
      navigate('/#membership-card-component');
    };
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* ParadiseGolf Section */}
          <div className="space-y-6">
            {/* <h3 className="text-[#f4d03f] text-xl font-bold">ParadiseGolf</h3> */}
            <img src={logoImg} className='h-12' />
            <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
              The ultimate golf membership for passionate golfers seeking premium experiences at elite courses nationwide.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="https://www.facebook.com/paradisegolf/" target='_blank' className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <a onClick={()=>navigate('/#membership-card-component')} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Membership
                </a>
              </li>
              <li>
                <a href="https://www.paradiseteetimes.com/" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Tee Times
                </a>
              </li>
              <li>
                <a href="/events/TournamentSchedulePage" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Upcoming Events
                </a>
              </li>
                            <li>
                <a href="https://shop.paradisegolfcard.com/pages/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Privacy policy
                </a>
              </li>
              <li>
                <Link to="/aboutus" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#f4d03f] flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <div>13941 Clubhouse Drive #215</div>
                  <div>Tampa FL 33618</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#f4d03f] flex-shrink-0" />
                <a href="tel:8001234567" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  (813) 265-3338
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#f4d03f] flex-shrink-0" />
                <a href="mailto:info@paradisegolf.com" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  info@paradise-golf.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © 2025 ParadiseGolf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
