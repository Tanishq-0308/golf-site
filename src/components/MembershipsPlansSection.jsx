import React, { useState } from 'react';

const MembershipPlansSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('year-round');

  const planData = {
    'year-round': {
      title: 'Year Round',
      subTitle: 'Summer/Winter Combo',
      period: '(Nov 1 to Oct 31)',
      plans: [
        {
          name: 'Free',
          price: 'No Cost',
          popular: false,
          value: false
        },
        {
          name: 'Basic',
          price: '$19.99/month billed annually',
          popular: false,
          value: false
        },
        {
          name: 'Premium',
          price: '$24.19',
          priceSubText: '/month billed annually',
          popular: false,
          value: false
        },
        {
          name: 'Platinum',
          price: '$32.49/month billed annually',
          popular: true,
          value: false
        }
      ]
    },
    'summer': {
      title: 'Summer Membership',
      period: '(May 1 to Oct 31)',
      plans: [
        {
          name: 'Free',
          price: 'No Cost',
          popular: false,
          value: false
        },
        {
          name: 'Basic',
          price: '$24.19/month billed seasonally',
          altPriceBold: '$28.99',
          altPriceRest: '/month billed monthly',
          popular: false,
          value: false
        },
        {
          name: 'Premium',
          price: '$32.49/month billed seasonally',
          altPriceBold: '$38.99',
          altPriceRest: '/month billed monthly',
          popular: false,
          value: false
        },
        {
          name: 'Platinum',
          price: '$40.79/month billed seasonally',
          altPriceBold: '$48.99',
          altPriceRest: '/month billed monthly',
          popular: false,
          value: false
        }
      ]
    },
    'winter': {
      title: 'Winter Membership',
      period: '(Nov 1 to Apr 31)',
      plans: [
        {
          name: 'Free',
          price: 'No Cost',
          popular: false,
          value: false
        },
        {
          name: 'Basic',
          price: '$19.99/month billed seasonally',
          altPriceBold: '$23.99',
          altPriceRest: '/month billed monthly',
          popular: false,
          value: false
        },
        {
          name: 'Premium',
          price: '$24.19/month billed seasonally',
          altPriceBold: '$28.99',
          altPriceRest: '/month billed monthly',
          popular: false,
          value: false
        },
        {
          name: 'Platinum',
          price: '$32.49/month billed seasonally',
          altPriceBold: '$38.99',
          altPriceRest: '/month billed monthly',
          popular: false,
          value: true
        }
      ]
    }
  };

  const currentPlan = planData[selectedPlan];

  return (
    <div className="max-w-6xl mx-auto p-6 pb-20 bg-white">
      <div className="text-center mb-8">

        {/* Toggle Slider */}
        <div className="inline-flex bg-gray-100 rounded-lg p-1 mb-8">
          <button
            onClick={() => setSelectedPlan('year-round')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${selectedPlan === 'year-round'
              ? 'bg-white text-gray-800 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
              }`}
          >
            Year Round
          </button>
          <button
            onClick={() => setSelectedPlan('summer')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${selectedPlan === 'summer'
              ? 'bg-white text-gray-800 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
              }`}
          >
            Summer
          </button>
          <button
            onClick={() => setSelectedPlan('winter')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${selectedPlan === 'winter'
              ? 'bg-white text-gray-800 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
              }`}
          >
            Winter
          </button>
        </div>
      </div>

      {/* Plan Cards Row */}
      <div className="transition-all  duration-500 ease-in-out">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6">
          {currentPlan.plans.map((plan, index) => (
            <div key={`${selectedPlan}-${index}`} className="relative">
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-2 left-0 right-0 z-10">
                  <div className="bg-yellow-500 text-white rounded-t-lg text-xs font-medium py-1 px-2 text-center">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Best Value Badge */}
              {plan.value && (
                <div className="absolute -top-2 left-0 right-0 z-10">
                  <div className="bg-yellow-500 text-white rounded-t-lg text-xs font-medium py-1 px-2 text-center">
                    Best Value
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`rounded-xl shadow-lg bg-white ${plan.popular || plan.value ? 'pt-6' : 'pt-4'} px-4 pb-8 h-72 flex flex-col ${plan.popular ? 'border-yellow-400' : plan.value ? 'border-yellow-400' : 'border-gray-300'}`}>
                {/* Plan Name */}
                <h3 className="text-lg font-medium text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-center flex-shrink-0">
                  <div className="mb-4">
                    <p className="text-m font-bold text-black mb-1">{currentPlan.title}</p>
                    {currentPlan.subTitle && <p className="text-sm text-gray-600 mb-1">{currentPlan.subTitle}</p>}
                    <p className="text-sm text-gray-900">{currentPlan.period}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center flex-grow flex flex-col justify-center">
                  <p className="text-sm text-gray-800">
                    <strong>
                      {plan.price.match(/^\$\d+(\.\d{1,2})?/)?.[0]}
                    </strong>
                    {plan.price.replace(/^\$\d+(\.\d{1,2})?/, '')}
                  </p>
                  {plan.altPriceBold && plan.altPriceRest && (
                    <p className="text-sm text-gray-800 mt-1">
                      Or <strong>{plan.altPriceBold}</strong>{plan.altPriceRest}
                    </p>
                  )}
                </div>

                {/* Join Button */}
                <div className="flex-shrink-0 mt-4 text-center">
                  <button className="w-32 bg-yellow-500 rounded-full text-white text-sm font-medium py-2 px-4 mx-auto block hover:bg-yellow-500 transition-colors duration-200">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipPlansSection;
