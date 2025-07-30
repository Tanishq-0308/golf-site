import { CreditCard, Grid3X3, MapPin } from 'lucide-react';
import React, { useState } from 'react';

export default function DownloadAppComponent() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  return (
    <div className="bg-[#27AE60] flex flex-col lg:flex-row justify-between items-start lg:items-center w-full min-h-[700px] px-6 sm:px-12 lg:px-[60px] py-10 lg:py-[40px] relative overflow-hidden">
      {/* Left section: Text and Buttons */}
      <div className="flex flex-col justify-center w-full lg:w-[500px] relative z-10">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-[48px] font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
          Download the App
        </h2>
        <p className="text-lg sm:text-xl text-green-100 mb-8 sm:mb-12 leading-relaxed max-w-lg">
          Get the most out of your Paradise Golf membership with our mobile app.
          Find courses, redeem coupons, and track your savings on the go.
        </p>
        <div className="flex flex-col items-start space-y-6 sm:space-y-8 mb-8 sm:mb-12">
          {/* Digital Membership Card */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-400 bg-opacity-20 rounded-lg flex items-center justify-center mt-1">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg text-white sm:text-xl font-semibold mb-1 sm:mb-2">Digital Membership Card</h3>
              <p className="text-green-100 leading-relaxed max-w-xs sm:max-w-sm">
                Always have your membership card with you. No more forgetting your physical card at home.
              </p>
            </div>
          </div>

          {/* Easy Coupon Redemption */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-400 bg-opacity-20 rounded-lg flex items-center justify-center mt-1">
              <Grid3X3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Easy Coupon Redemption</h3>
              <p className="text-green-100 leading-relaxed max-w-xs sm:max-w-sm">
                Simply scan QR codes at participating courses to instantly redeem your discounts.
              </p>
            </div>
          </div>

          {/* Course Finder */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-400 bg-opacity-20 rounded-lg flex items-center justify-center mt-1">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Course Finder</h3>
              <p className="text-green-100 leading-relaxed max-w-xs sm:max-w-sm">
                Discover new courses near you or at your travel destination with our interactive map.
              </p>
            </div>
          </div>
        </div>
        <div
          className=" flex flex-col sm:flex-row gap-4 sm:gap-[20px] w-full max-w-md">
          {/* App Store Button */}
          <button
            onClick={handlePopupToggle}
            className="bg-black rounded-[8px] py-3 px-5 flex items-center gap-3 hover:bg-gray-900 transition-all duration-200 w-full sm:w-auto">
            {/* Apple Icon */}
            <div className="w-[28px] h-[28px] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-[24px] h-[24px] fill-white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
            </div>
            <span className="text-white leading-tight font-medium text-left">
              <span className="block text-xs sm:text-[11px] font-normal opacity-90">Download on the</span>
              <span className="block text-lg sm:text-[18px] mt-[-1px] font-semibold">App Store</span>
            </span>
          </button>

          {/* Google Play Button */}
          <button
            onClick={handlePopupToggle}
            className="bg-black rounded-[8px] py-3 px-5 flex items-center gap-3 hover:bg-gray-900 transition-all duration-200 w-full sm:w-auto">
            {/* Google Play Icon */}
            <div className="w-[28px] h-[28px] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-[24px] h-[24px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path fill="#4285F4" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5Z" />
                <path fill="#34A853" d="M16.81,15.12L6.05,21.34C5.77,21.5 5.44,21.51 5.12,21.38L3.84,21.85L13.69,12L16.81,15.12Z" />
                <path fill="#FBBC04" d="M20.16,10.85C20.5,11.05 20.75,11.39 20.75,11.79V12.21C20.75,12.61 20.5,12.95 20.16,13.15L16.81,15.12L13.69,12L16.81,8.88L20.16,10.85Z" />
                <path fill="#EA4335" d="M16.81,8.88L13.69,12L3.84,2.15C4.16,2.02 4.49,2.03 4.77,2.19L16.81,8.88Z" />
              </svg>
            </div>
            <span className="text-white leading-tight font-medium text-left">
              <span className="block text-xs sm:text-[11px] font-normal opacity-90">GET IT ON</span>
              <span className="block text-lg sm:text-[18px] mt-[-1px] font-semibold">Google Play</span>
            </span>
          </button>
        </div>
      </div>

      {/* Right section: Phone Mockup */}
      <div className="hidden lg:flex relative justify-center items-center min-w-[320px] mt-10 lg:mt-0">
        {/* Yellow background frame */}
        <div className="absolute rounded-[32px] w-[280px] h-[480px] bg-[#f4d03f] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 shadow-2xl"></div>

        {/* Phone mockup */}
        <div className="relative z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Phone frame */}
          <div className="w-[240px] h-[480px] bg-black rounded-[28px] p-[8px] shadow-2xl">
            {/* Screen */}
            <div className="w-full h-full bg-white rounded-[20px] overflow-hidden relative">
              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 h-[44px] bg-[#7cb342] flex items-center justify-between px-6 z-20">
                <div className="text-white text-xs font-semibold">9:41</div>
                <div className="flex items-center gap-1">
                  <div className="w-[18px] h-[10px] border border-white rounded-sm"></div>
                  <div className="w-[15px] h-[10px] bg-white rounded-sm"></div>
                  <div className="w-[24px] h-[12px] border-2 border-white rounded-sm relative">
                    <div className="absolute right-[-2px] top-[2px] w-[2px] h-[4px] bg-white rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* App content */}
              <div className="pt-[44px] h-full bg-gradient-to-b from-[#7cb342] to-[#689f38] relative">
                {/* Header */}
                <div className="px-4 py-3 flex items-center justify-between">
                  <h1 className="text-white text-lg font-bold">COURSE</h1>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Booking section */}
                <div className="px-4 mb-4">
                  <div className="bg-[#8bc34a] rounded-lg p-3 flex items-center justify-between">
                    <span className="text-white font-semibold">Booking</span>
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 border-2 border-[#8bc34a] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Course info */}
                <div className="px-4 mb-4">
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-sm font-semibold text-gray-800 mb-1">Bardmoor GC</div>
                    <div className="text-xs text-gray-600">Monday Apr...</div>
                  </div>
                </div>

                {/* Menu items */}
                <div className="px-4 space-y-3">
                  <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-800">Tee Times </span>
                    </div>
                    <div className="text-gray-400">›</div>
                  </div>

                  <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#8bc34a] rounded-full"></div>
                      <span className="text-sm font-medium text-gray-800">Events</span>
                    </div>
                    <div className="text-gray-400">›</div>
                  </div>

                  <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-800">Tournaments</span>
                    </div>
                    <div className="text-gray-400">›</div>
                  </div>

                  <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-800">Leaderboard</span>
                    </div>
                    <div className="text-gray-400">›</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] backdrop-blur-sm"> {/* Changed z-index to a higher value */}
          {/* Popup content */}
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 md:w-96 text-center">
            <h2 className="text-xl font-semibold text-gray-800">Coming Soon!</h2>
            {/* <p className="mt-4 text-gray-600">
              We are working hard on getting the app ready for Google Play. Stay tuned!
            </p> */}

            {/* Close Button */}
            <button
              onClick={handlePopupToggle}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}