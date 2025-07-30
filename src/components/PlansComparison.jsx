import { useState } from 'react';
import { Check, X } from 'lucide-react';

export default function GolfCoursePricingTable() {
  const [selectedTier, setSelectedTier] = useState('premium');
  const [selectedSeason, setSelectedSeason] = useState('all-year');

  const seasonalOptions = [
    { id: 'all-year', name: 'All Year Round', duration: '12 months' },
    { id: 'winter', name: 'Seasonal Winter Only', duration: '6 months - Nov to Apr' },
    { id: 'summer', name: 'Seasonal Summer Only', duration: '6 months - May to Oct' }
  ];

  const tiers = [
    { id: 'free', name: 'Free', popular: false },
    { id: 'basic', name: 'Basic', popular: false },
    { id: 'premium', name: 'Premium', popular: true },
    { id: 'platinum', name: 'Platinum', popular: false }
  ];

  const pricingData = {
    'all-year': {
      free: { monthly: 0, total: 0, paid: 0 },
      basic: { monthly: 0, total: 0, paid: 240 },
      premium: { monthly: 0, total: 0, paid: 290 },
      platinum: { monthly: 0, total: 0, paid: 390 }
    },
    'winter': {
      free: { monthly: 0, total: 0, paid: 0 },
      basic: { monthly: 24, total: 144, paid: 120 },
      premium: { monthly: 29, total: 174, paid: 145 },
      platinum: { monthly: 39, total: 234, paid: 195 }
    },
    'summer': {
      free: { monthly: 0, total: 0, paid: 0 },
      basic: { monthly: 29, total: 174, paid: 145 },
      premium: { monthly: 39, total: 234, paid: 195 },
      platinum: { monthly: 49, total: 294, paid: 245 }
    }
  };

  const features = [
    {
      name: 'Free Round(s) for Annual/Seasonal Paid Customers only',
      free: { 'all-year': false, winter: false, summer: false },
      basic: { 'all-year': 'Yes (1**)', winter: false, summer: false },
      premium: { 'all-year': 'Yes (2**)', winter: 'Yes (1**)', summer: 'Yes (1**)' },
      platinum: { 'all-year': 'Yes (2**)', winter: 'Yes (1**)', summer: 'Yes (1**)' }
    },
    {
      name: 'Discounts',
      free: { 'all-year': false, winter: false, summer: false },
      basic: { 'all-year': false, winter: true, summer: true },
      premium: { 'all-year': true, winter: true, summer: true },
      platinum: { 'all-year': true, winter: true, summer: true }
    },
    {
      name: 'Coupons',
      free: { 'all-year': false, winter: false, summer: false },
      basic: { 'all-year': false, winter: false, summer: false },
      premium: { 'all-year': true, winter: true, summer: true },
      platinum: { 'all-year': true, winter: true, summer: true }
    },
    {
      name: 'Member for a Day',
      free: { 'all-year': false, winter: false, summer: false },
      basic: { 'all-year': false, winter: false, summer: false },
      premium: { 'all-year': true, winter: true, summer: true },
      platinum: { 'all-year': true, winter: true, summer: true }
    },
    {
      name: 'Tournaments',
      free: { 'all-year': false, winter: false, summer: false },
      basic: { 'all-year': true, winter: true, summer: true },
      premium: { 'all-year': true, winter: true, summer: true },
      platinum: { 'all-year': 'Yes (2 Free**)', winter: 'Yes (1 Free**)', summer: 'Yes (1 Free**)' }
    },
    {
      name: 'Tee Time Offers',
      free: { 'all-year': true, winter: true, summer: true },
      basic: { 'all-year': true, winter: true, summer: true },
      premium: { 'all-year': true, winter: true, summer: true },
      platinum: { 'all-year': true, winter: true, summer: true }
    },
    {
      name: 'Loyalty Credits',
      free: { 'all-year': true, winter: true, summer: true },
      basic: { 'all-year': true, winter: true, summer: true },
      premium: { 'all-year': true, winter: true, summer: true },
      platinum: { 'all-year': true, winter: true, summer: true }
    }
  ];

  const renderFeatureValue = (feature, tierKey, season) => {
    const value = feature[tierKey][season];

    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-red-400 mx-auto" />
      );
    }

    return <span className="text-xs font-medium text-gray-900 text-center block">{value}</span>;
  };

  const formatPrice = (price) => {
    return price === 0 ? '-' : price.toFixed(2);
  };

  const currentPricing = pricingData[selectedSeason];
  const currentSeasonInfo = seasonalOptions.find(s => s.id === selectedSeason);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Golf Course Membership Plans</h1>
          <p className="text-xl text-gray-600">Compare our membership options and features</p>
        </div>

        {/* Season Selector */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 overflow-x-auto pb-2">
            {seasonalOptions.map((season) => (
              <button
                key={season.id}
                onClick={() => setSelectedSeason(season.id)}
                className={`px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap flex-shrink-0 ${selectedSeason === season.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
              >
                <div className="text-center">
                  <div className="font-semibold text-sm sm:text-base">{season.name}</div>
                  <div className="text-xs sm:text-sm opacity-75">{season.duration}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto min-w-full">
            <div className="min-w-[800px]">
              {/* Current Season Header */}
              <div className="bg-blue-50 p-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-center text-gray-900">
                  {currentSeasonInfo.name.toUpperCase()}
                  {selectedSeason !== 'all-year' && (
                    <span className="text-sm font-normal text-gray-600 block">
                      ({currentSeasonInfo.duration})
                    </span>
                  )}
                </h2>
                {selectedSeason !== 'all-year' && (
                  <p className="text-sm text-center text-gray-600 mt-1">
                    ** For {selectedSeason === 'winter' ? '6' : '6'} mth Paid Customers Only (based on availability)
                  </p>
                )}
                {selectedSeason === 'all-year' && (
                  <p className="text-sm text-center text-gray-600 mt-1">
                    ** For Annual Paid Customers Only (based on availability)
                  </p>
                )}
              </div>

              {/* Pricing Header */}
              <div className="grid grid-cols-8 border-b border-gray-200 bg-yellow-100">
                <div className="p-3 font-semibold text-gray-900 text-sm border-r border-gray-300">Plan</div>
                <div className="p-3 text-center font-semibold text-gray-900 text-sm border-r border-gray-300">Monthly</div>
                <div className="p-3 text-center font-semibold text-gray-900 text-sm border-r border-gray-300">
                  Total<br />{selectedSeason === 'all-year' ? '(for Year)' : '(for season)'}
                </div>
                <div className="p-3 text-center font-semibold text-gray-900 text-sm border-r border-gray-300">
                  Paid<br />{selectedSeason === 'all-year' ? 'Annually' : 'Seasonally'}
                </div>
                <div className="col-span-4 p-3 text-center font-semibold text-gray-900 text-sm bg-yellow-200">
                  <div className="grid grid-cols-7 gap-1 text-xs">
                    <div className="text-center">Free Round(s) for Annual Paid Customers only</div>
                    <div className="text-center">Discounts</div>
                    <div className="text-center">Coupons</div>
                    <div className="text-center">Member for a Day</div>
                    <div className="text-center">Tournaments</div>
                    <div className="text-center">Tee Time Offers</div>
                    <div className="text-center">Loyalty Credits</div>
                  </div>
                </div>
              </div>

              {/* Pricing Rows */}
              {tiers.map((tier, index) => (
                <div
                  key={tier.id}
                  className={`grid grid-cols-8 border-b border-gray-100 hover:bg-gray-50 ${tier.popular ? 'bg-blue-25' : index % 2 === 0 ? 'bg-white' : 'bg-gray-25'
                    }`}
                >
                  <div className="p-3 font-semibold text-gray-900 capitalize">
                    {tier.name}
                    {/* {tier.popular && ( */}
                    {/*   <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-1 rounded-full"> */}
                    {/*     Popular */}
                    {/*   </span> */}
                    {/* )} */}
                  </div>
                  <div className="p-3 text-center text-sm">
                    ${formatPrice(currentPricing[tier.id].monthly)}
                  </div>
                  <div className="p-3 text-center text-sm">
                    ${formatPrice(currentPricing[tier.id].total)}
                  </div>
                  <div className="p-3 text-center text-sm font-semibold">
                    ${formatPrice(currentPricing[tier.id].paid)}
                  </div>
                  <div className="col-span-4 p-1">
                    <div className="grid grid-cols-7 gap-1 h-full">
                      {features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center p-1">
                          {renderFeatureValue(feature, tier.id, selectedSeason)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Feature Labels Row */}
              {/* <div className="grid grid-cols-8 bg-yellow-50 border-t-2 border-yellow-200"> */}
              {/*   <div className="col-span-4"></div> */}
              {/*   <div className="col-span-4 p-2"> */}
              {/*     <div className="grid grid-cols-7 gap-1 text-xs text-gray-700"> */}
              {/*       <div className="text-center p-1 border-r border-gray-200">Free Round(s) for Annual Paid Customers only</div> */}
              {/*       <div className="text-center p-1 border-r border-gray-200">Discounts</div> */}
              {/*       <div className="text-center p-1 border-r border-gray-200">Coupons</div> */}
              {/*       <div className="text-center p-1 border-r border-gray-200">Member for a Day</div> */}
              {/*       <div className="text-center p-1 border-r border-gray-200">Tournaments</div> */}
              {/*       <div className="text-center p-1 border-r border-gray-200">Tee Time Offers</div> */}
              {/*       <div className="text-center p-1">Loyalty Credits</div> */}
              {/*     </div> */}
              {/*   </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        {/* <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 overflow-x-auto pb-2"> */}
        {/*   {tiers.map((tier) => ( */}
        {/*     <button */}
        {/*       key={tier.id} */}
        {/*       onClick={() => setSelectedTier(tier.id)} */}
        {/*       className={`px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap flex-shrink-0 ${tier.popular */}
        {/*           ? 'bg-blue-600 hover:bg-blue-700 text-white' */}
        {/*           : selectedTier === tier.id */}
        {/*             ? 'bg-blue-100 hover:bg-blue-200 text-blue-800' */}
        {/*             : 'bg-gray-200 hover:bg-gray-300 text-gray-800' */}
        {/*         }`} */}
        {/*     > */}
        {/*       Select {tier.name} */}
        {/*       {currentPricing[tier.id].paid > 0 && ( */}
        {/*         <span className="block text-sm"> */}
        {/*           ${formatPrice(currentPricing[tier.id].paid)} */}
        {/*         </span> */}
        {/*       )} */}
        {/*     </button> */}
        {/*   ))} */}
        {/* </div> */}

        <div className="text-center mt-6">
          {selectedSeason == 'All Year Round' &&
            <p className="text-xs text-gray-500">
              ** Free rounds and tournament entries based on availability<br />
              All prices subject to change • Contact pro shop for more details
            </p>
          }
          {selectedSeason == 'Seasonal Winter Only' &&
            <p className="text-xs text-gray-500">
              ** Free rounds and tournament entries based on availability<br />
              All prices subject to change • Contact pro shop for more details
            </p>
          }
          {selectedSeason == 'Seasonal Summer Only' &&
            <p className="text-xs text-gray-500">
              ** Free rounds and tournament entries based on availability<br />
              All prices subject to change • Contact pro shop for more details
            </p>
          }
        </div>
      </div>
    </div>
  );
}
