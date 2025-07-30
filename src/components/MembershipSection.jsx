import React from 'react';
import {
  Star,
  Trophy,
  Mail,
  Calendar,
  Users,
  Sun,
  GraduationCap,
  UserCheck,
  TrendingUp,
} from 'lucide-react';

export default function MembershipPlans() {
  return (
    <section id="membership-section" >
      <div className="bg-white text-black pt-4 pr-8 pl-8 pb-4" >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Membership Plans</h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Choose the perfect membership to enhance your golfing experience and start
              saving at over 200 elite courses nationwide.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 text-white gap-8 max-w-6xl mx-auto">
            {/* Early Renewal Special */}
            <div className="relative transition transform hover:scale-110">
              <div className="bg-yellow-500 text-black text-center py-2 px-4 rounded-t-3xl font-semibold text-sm">
                BEST VALUE
              </div>
              <div className="bg-slate-800 rounded-b-3xl p-8">
                <h3 className="text-2xl font-bold mb-2">Early Renewal Special</h3>
                <p className="text-gray-400 mb-6">For early birds & winter regulars</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">$105</span>
                  <span className="text-gray-400 ml-2">total</span>
                </div>

                <div className="bg-yellow-500 text-black px-3 py-1 rounded text-sm font-medium mb-6 inline-block">
                  Winter 2025-2026
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Access Nov 1, 2025 – Mar 31, 2026</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Member-only rates at top clubs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Trophy className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Tournament & league eligibility</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Weekly member email updates</span>
                  </div>
                </div>

                <button className="w-full mt-8 bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-full font-semibold transition-colors">
                  Join Now
                </button>
              </div>
            </div>

            {/* Summer & Winter Annual Combo */}
            <div className="relative hover:scale-110 transform transition">
              <div className="bg-yellow-500 text-black text-center py-2 px-4 rounded-t-3xl font-semibold text-sm">
                MOST POPULAR
              </div>
              <div className="bg-slate-800 rounded-b-3xl p-8">
                <h3 className="text-2xl font-bold mb-2">Summer & Winter Annual Combo</h3>
                <p className="text-gray-400 mb-6">Best for full-year savings!</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">$229</span>
                  <span className="text-gray-400 ml-2">total (prorated)</span>
                </div>

                <div className="scale-110 bg-yellow-500 text-black px-3 py-1 rounded text-sm font-medium mb-6 inline-block">
                  Covers Summer & Winter 2025-2026
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">All benefits from both periods</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Priority tee time booking</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Special events & junior pricing</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Huge savings over individual plans</span>
                  </div>
                </div>

                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-full font-semibold transition-colors">
                  Join Now
                </button>
              </div>
            </div>

            {/* Summer Membership */}
            <div className="hover:scale-110 transition transform bg-slate-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-2">Summer Membership</h3>
              <p className="text-gray-400 mb-6">Perfect for seasonal players</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">$169</span>
                <span className="text-gray-400 ml-2">total (prorated)</span>
              </div>

              <div className="bg-yellow-500 text-black px-3 py-1 rounded text-sm font-medium mb-6 inline-block">
                Summer 2025
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Sun className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Access Apr 1 – Oct 31, 2025</span>
                </div>
                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Discounts on practice, lessons</span>
                </div>
                <div className="flex items-start space-x-3">
                  <UserCheck className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">"Member for a Day" access</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Trophy className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Optional USGA handicap</span>
                </div>
              </div>

              <button className="w-full mt-8 bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-full font-semibold transition-colors">
                Join Now
              </button>
            </div>
          </div>

          {/* Centered Explore Button */}
          <div className="flex justify-center mt-12">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold px-8 py-3 rounded-full text-xs sm:text-lg transition-colors duration-200">
              Explore Membership Options
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
