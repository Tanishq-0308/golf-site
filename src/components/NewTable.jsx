import React, { useState } from 'react';
import {
  Calendar,
  DollarSign,
  Gift,
  Tag,
  Scissors,
  Handshake,
  Trophy,
  Clock,
  Star,
  Check,
  Minus,
  X
} from 'lucide-react';

const tiers = ['Free', 'Basic', 'Premium', 'Platinum'];

const plans = {
  allYear: {
    title: 'All Year Round',
    prices: ['$0', '$240.00', '$290.00', '$390.00'],
    data: [
      ['$', '$', '$', '$'],
      ['$', '$', '$', '$'],
      ['$', '$240.00', '$290.00', '$390.00'],
      ['-', '✅ 1 Round**', '✅ 2 Rounds**', '✅ 2 Rounds**'],
      ['-', '-', '✅', '✅'],
      ['-', '-', '✅', '✅'],
      ['-', '-', '✅', '✅'],
      ['-', '-', '✅', '✅ 2 Free Entries**'],
      ['✅', '✅', '✅', '✅'],
      ['✅', '✅', '✅', '✅']
    ]
  },
  winter: {
    title: 'Seasonal Winter Only',
    prices: ['$0', '$120.00', '$145.00', '$195.00'],
    data: [
      ['$', '$24.00', '$29.00', '$39.00'],
      ['$', '$144.00', '$174.00', '$234.00'],
      ['$', '$120.00', '$145.00', '$195.00'],
      ['-', '-', '✅ 1 Round**', '✅ 1 Round**'],
      ['❌', '✅', '✅', '✅'],
      ['❌', '❌', '✅', '✅'],
      ['❌', '✅', '✅', '✅'],
      ['❌', '✅', '✅', '✅ 1 Free**'],
      ['✅', '✅', '✅', '✅'],
      ['✅', '✅', '✅', '✅']
    ]
  },
  summer: {
    title: 'Seasonal Summer Only',
    prices: ['$0', '$145.00', '$195.00', '$245.00'],
    data: [
      ['$', '$29.00', '$39.00', '$49.00'],
      ['$', '$174.00', '$234.00', '$294.00'],
      ['$', '$145.00', '$195.00', '$245.00'],
      ['❌', '❌', '✅ 1 Round**', '✅ 1 Round**'],
      ['❌', '✅', '✅', '✅'],
      ['❌', '❌', '✅', '✅'],
      ['❌', '✅', '✅', '✅'],
      ['❌', '✅', '✅', '✅ 1 Free**'],
      ['✅', '✅', '✅', '✅'],
      ['✅', '✅', '✅', '✅']
    ]
  }
};

const featureLabels = [
  { icon: <Calendar size={18} />, label: 'Monthly' },
  { icon: <DollarSign size={18} />, label: 'Total (for season)' },
  { icon: <DollarSign size={18} />, label: 'Paid Seasonally' },
  { icon: <Gift size={18} />, label: 'Free Golf Rounds' },
  { icon: <Tag size={18} />, label: 'Discounts' },
  { icon: <Scissors size={18} />, label: 'Coupons' },
  { icon: <Handshake size={18} />, label: 'Member for a Day' },
  { icon: <Trophy size={18} />, label: 'Tournaments' },
  { icon: <Clock size={18} />, label: 'Tee Time Offers' },
  { icon: <Star size={18} />, label: 'Loyalty Credits' }
];

const TogglePlans = () => {
  const [selectedPlan, setSelectedPlan] = useState('allYear');
  const plan = plans[selectedPlan];

  return (
    <div className="pt-6 px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Choose Your Perfect Golf Experience
        </h2>
        <p className="text-gray-500 mb-6 text-base">
          Explore our flexible membership options tailored to your golfing lifestyle.
        </p>
      </div>

      <div className="flex justify-center mb-8 space-x-4">
        {[
          { id: 'allYear', label: 'All Year Round', sub: '12 Months' },
          { id: 'winter', label: 'Seasonal Winter Only', sub: 'Nov - Apr' },
          { id: 'summer', label: 'Seasonal Summer Only', sub: 'May - Oct' }
        ].map(({ id, label, sub }) => (
          <button
            key={id}
            onClick={() => setSelectedPlan(id)}
            className={`px-6 py-3 rounded-xl text-center text-sm sm:text-base font-semibold transition ${selectedPlan === id
              ? 'bg-yellow-500 text-black'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {label}
            <div className="text-xs font-medium">{sub}</div>
          </button>
        ))}
      </div>

      <div className="overflow-x-auto sm:mx-90">
        <table className="min-w-full table-fixed border-separate border-spacing-0 text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-100 text-gray-700 border-b border-gray-200">
              <th className="w-1/3 px-4 py-3 text-left font-semibold">Membership Features</th>
              {tiers.map((tier, idx) => (
                <th key={idx} className="px-4 py-3 text-center font-semibold">
                  <div className="uppercase font-bold">{tier}</div>
                  <div className="font-semibold">{plan.prices[idx]}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {plan.data.map((row, i) => (
              <tr
                key={i}
                className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } border-b border-gray-200`}
              >
                <td className="px-4 py-3 text-gray-800 flex items-center gap-2">
                  {featureLabels[i].icon}
                  {featureLabels[i].label}
                </td>
                {row.map((val, j) => (
                  <td key={j} className="px-4 py-3 text-center">
                    {val === '✅' ? (
                      <Check className="text-green-600 mx-auto" size={18} />
                    ) : val === '❌' ? (
                      <X className="text-red-500 mx-auto" size={18} />
                    ) : val === '-' || val === '$' ? (
                      <Minus className="text-gray-400 mx-auto" size={18} />
                    ) : val.includes('✅') ? (
                      <div className="flex items-center justify-center gap-1 text-green-700 font-medium">
                        <Check size={16} />
                        <span>{val.replace('✅', '').trim()}</span>
                      </div>
                    ) : val.includes('❌') ? (
                      <div className="flex items-center justify-center gap-1 text-red-500 font-medium">
                        <X size={16} />
                        <span>{val.replace('❌', '').trim()}</span>
                      </div>
                    ) : (
                      <span>{val}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* <div className="flex mt-10 justify-center"> */}
        {/*   <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold px-8 mb-10 py-3 rounded-full sm:text-lg text-xs transition-colors duration-200"> */}
        {/*     Explore Membership Plans */}
        {/*   </button> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default TogglePlans;
