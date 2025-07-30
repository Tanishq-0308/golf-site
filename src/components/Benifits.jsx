import React from 'react';
import { Flag, Trophy, DollarSign, Check } from 'lucide-react';

export default function Benefits() {
  return (
    <div className="bg-gray-100 px-4 pt-16 pb-2 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#006838] mb-3">
          Why Join ParadiseGolf?
        </h1>
        <p className="text-gray-400 text-center text-lg max-w-3xl mx-auto mb-6">
          A Private Club without Walls
        </p>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 shoadow-md md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Access Elite Courses Card */}
          <div className="bg-white text-black  p-6 sm:p-8 rounded-xl">
            <div className="flex justify-center mb-6">
              <Flag className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-center mb-4">
              Access to Premium Courses
            </h2>
            {/* <p className="text-sm font-semibold sm:text-base text-yellow-400 text-center mb-6"> */}
            {/*   Play like a member—without the monthly dues */}
            {/* </p> */}

            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>
                  Enjoy <span className='font-bold'>Tee Time access</span> to private and semi-private clubs
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>
                  Discover new courses across the region with <span className='font-bold'>no long-term commitment</span>
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>
                  Play at 50+ top-tier golf courses as a Paradise Golf Member
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>
                  Year round access to top golf courses
                </span>
              </div>
            </div>
          </div>

          {/* Tournaments, Leagues & Perks Card */}
          <div className="bg-white text-black  p-6 sm:p-8 rounded-xl">
            <div className="flex justify-center mb-6">
              <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-center mb-4">
              Participate in Leagues and Tournaments
            </h2>
            {/* <p className="text-sm sm:text-base font-semibold text-yellow-400 text-center mb-6"> */}
            {/*   It's not just golf—it's a lifestyle */}
            {/* </p> */}

            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>
                  Join <span className='font-bold'>member-only leagues </span> for all skill levels, with flexible formats and weekly play.

                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>
                  Compete in <span className='font-bold' >fun and competitive tournaments</span>  with real-time scoring and great prizes.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>
                  Connect with a community of golfers through <span className='font-bold'>regular social events</span> and team play opportunities.

                </span>
              </div>
            </div>
          </div>

          {/* Extra Value for Members Card */}
          <div className="bg-white text-black p-6 sm:p-8 rounded-xl">
            <div className="flex justify-center mb-6">
              <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-center mb-4">
              Extra Value for Members
            </h2>
            {/* <p className="text-sm font-semibold sm:text-base text-yellow-400 text-center mb-6"> */}
            {/*   More than tee times—real savings & benefits */}
            {/* </p> */}

            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>
                  Receive <span className='font-bold' >special member pricing</span> on tee times, lessons, and pro shop merchandise.

                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>
                  Get access to <span className='font-bold'>partner perks </span> such as discounts on golf apparel, travel, and equipment.

                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>
                  Enjoy <span className='font-bold'>seasonal promotions and giveaways</span>, including free rounds and VIP experiences.

                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        {/* <div className="flex justify-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold px-8 mb-10 py-3 rounded-full sm:text-lg text-xs transition-colors duration-200">
            Explore Membership Benefits
          </button>
        </div> */}
      </div>
    </div>
  );
}
