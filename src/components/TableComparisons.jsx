import React from 'react';

const benefits = [
  'One Free Round (Season Members)',
  'Two Free Rounds (Annual Members)',
  'Course Discounts',
  'Double Eagle Coupons',
  'Member for a Day',
  'Tournament Participation',
  'One Tournament Free Round (Seasonal Members) based on availability',
  'One Tournament Free Round (Annual Members) based on availability',
  'Tee Time Offers',
  'Loyalty Program (Coming Soon)',
];

const membershipTiers = ['Free', 'Basic', 'Premium', 'Platinum'];

const eligibility = [
  [false, false, true, true],
  [false, false, true, true],
  [false, true, true, true],
  [false, false, true, true],
  [false, false, true, true],
  [false, true, true, true],
  [false, false, false, true],
  [false, false, false, true],
  [true, true, true, true],
  [true, true, true, true],
];

const TableComparisons = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Compare Membership Benefits
      </h2>

      <div className="w-full overflow-x-auto rounded-lg">
        <table className="min-w-full border-collapse text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="w-1/3 px-2 sm:px-4 py-3 text-left font-semibold border border-gray-200">
                Benefit
              </th>
              {membershipTiers.map((tier) => (
                <th
                  key={tier}
                  className="px-2 sm:px-4 py-3 text-center font-semibold border border-gray-200 whitespace-nowrap"
                >
                  {tier}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {benefits.map((benefit, rowIndex) => (
              <tr
                key={benefit}
                className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="px-2 sm:px-4 py-3 border border-gray-200 text-gray-800 whitespace-normal text-left">
                  {benefit}
                </td>
                {eligibility[rowIndex].map((isEligible, colIndex) => (
                  <td
                    key={`${rowIndex}-${colIndex}`}
                    className="px-2 sm:px-4 py-3 text-center border border-gray-200"
                  >
                    {isEligible ? (
                      <span className="text-green-600 text-xl font-bold">✓</span>
                    ) : (
                      <span className="text-gray-400 text-lg">–</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComparisons;
