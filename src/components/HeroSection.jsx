import React from 'react';
import heroVideo from '/HeroVideo.webm';
import { Link } from 'react-router-dom'; // Correct import for React Router Link

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute bg-black/50 top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
      />

      {/* Overlay to darken video for better text visibility */}
      <div className="absolute bg-black/50 inset-0 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex justify-end">
            <div className="max-w-xl space-y-6">
              <h1 className="text-3xl md:text-6xl font-bold text-white drop-shadow-lg">
                Your Gateway to the Ultimate Golf Experience
              </h1>
              <p className="text-l md:text-xl text-white/90">
                Join a growing community of golf enthusiasts with access to 50+ premium courses
              </p>

              {/* Buttons Layout */}
              <div className="space-y-4">
                {/* Top row: View Plans + Tee Time Booking */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#006838] hover:bg-white transition-all ease-in-out duration-300 text-white hover:text-[#006838] font-semibold px-12 sm:px-6 py-2 sm:py-3 rounded-full w-fit">
                    <a href='#membership-card-component'>View Plans</a>
                  </button>

                  {/* Tee Time Booking as Link */}
                  <Link to="https://www.paradiseteetimes.com/" className="bg-[#006838] transition-all hover:bg-white ease-in-out duration-300 hover:text-[#006838] text-white font-semibold px-6 sm:px-6 py-2 sm:py-3 rounded-full w-fit text-center inline-flex justify-center items-center">
                    Tee Time Booking
                  </Link>
                </div>

                {/* Bottom row: Watch Experience */}
                <button className="flex items-center border-white border-2 text-white ease-in-out duration-300 hover:bg-gray-200 hover:text-[#006838] font-semibold px-3 sm:px-6 py-1.5 sm:py-2 rounded-full w-fit">
                  <span className="mr-2">
                    {/* <FaPlay /> */}
                  </span>
                  <Link to='/events/TournamentSchedulePage'>
                    Upcoming Tournaments
                  </Link>

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
