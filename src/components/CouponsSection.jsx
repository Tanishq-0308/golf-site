import { Check, Dot } from "lucide-react";

const coupons = [
  {
    title: (
      <span>
        <span className="font-bold text-lg text-[#006838]">Guaranteed Free Rounds</span>
        <br />
      </span>
    ),
    description: (
      <div className="space-y-3 text-sm">
        <div className="flex items-start space-x-3">
          <Dot className="w-5 h-5 text-[#006838] mt-1 flex-shrink-0" />
          <span>
            1 round for <span className="font-bol">Basic Members</span> – paid annually
          </span>
        </div>
        <div className="flex items-start space-x-3">
          <Dot className="w-5 h-5 text-[#006838] mt-1 flex-shrink-0" />
          <span>
            2 rounds for <span className="font-bold">Premium and Platinum Members</span> – paid annually
          </span>
        </div>
        <div className="flex items-start space-x-3">
          <Dot className="w-5 h-5 text-[#006838] mt-1 flex-shrink-0" />
          <span>
            1 round for <span className="font-bold">Premium and Platinum Members</span> – paid seasonally
          </span>
        </div>
      </div>
    ),
    expires: "5 days",
    expiresSoon: true,
  },
  {
    bg: "bg-[#f6fbde]",
    title: (
      <span>
        <span className="font-bold text-lg text-[#006838]">Tournaments-Free Rounds at Selected Premium Courses</span>
      </span>
    ),
    description: (
      <div className="space-y-3 text-sm">
        <div className="flex items-start space-x-3">
          <Dot className="w-5 h-5 text-[#006838] mt-1 flex-shrink-0" />
          <span>
            2 rounds at selected premium courses for <span className="font-bold">Platinum Members</span> – paid annually
          </span>
        </div>
        <div className="flex items-start space-x-3">
          <Dot className="w-5 h-5 text-[#006838] mt-1 flex-shrink-0" />
          <span>
            1 round at selected premium courses for <span className="font-bold">Platinum Members</span> – paid seasonally
          </span>
        </div>
        <div className="flex items-start space-x-3">
          <Dot className="w-5 h-5 text-[#006838] mt-1 flex-shrink-0" />
          <span>
            <span className="font-bold">Based on Availability</span>
          </span>
        </div>
      </div>
    ),
    expires: "3 days",
    expiresSoon: false,
  },
  {
    title: (
      <span>
        <span className="font-bold text-lg text-[#006838]">Tee Time Discounts and Double Eagle Coupons</span>
      </span>
    ),
    description: (
      <div className="space-y-3 text-sm">
        <div className="flex items-start space-x-3">
          <Dot className="w-5 h-5 text-[#006838] mt-1 flex-shrink-0" />
          <span>
            Discounts available to seasonal and annual <span className="font-bold">Basic, Premium, and Platinum Members</span>
          </span>
        </div>
        <div className="flex items-start space-x-3">
          <Dot className="w-5 h-5 text-[#006838] mt-1 flex-shrink-0" />
          <span>
            <span className="font-bold">Double Eagle Coupons</span> available to seasonal and annual <span className="font-bold">Premium and Platinum Members</span>
          </span>
        </div>
      </div>
    ),
    expires: "54 days",
    expiresSoon: true,
  },
  {
    title: (
      <span>
        <span className="font-bold text-lg text-[#006838]">Member for a day</span>
      </span>
    ),
    description: (
      <div className="space-y-3 text-sm">
        <div className="flex items-start space-x-3">
          <Dot className="w-5 h-5 text-[#006838] mt-1 flex-shrink-0" />
          <span>
            <span className="font-bold">"Member for a Day"</span> access to some of the best private clubs in the Central, West Central Florida markets and others around the United States
          </span>
        </div>
        <div className="flex items-start space-x-3">
          <Dot className="w-5 h-5 text-[#006838] mt-1 flex-shrink-0" />
          <span>
            Available to seasonal and annual <span className="font-bold">Premium and Platinum Members</span>
          </span>
        </div>
      </div>
    ),
    expires: "54 days",
    expiresSoon: true,
  },
  {
    title: (
      <span>
        <span className="font-bold text-lg text-[#006838]">Loyalty Credits (Coming Soon!)</span>
      </span>
    ),
    description: (
      <div className="space-y-3 text-sm">
        <div className="flex items-start space-x-3">
          <Dot className="w-5 h-5 text-[#006838] mt-1 flex-shrink-0" />
          <span>
            Earn <span className="font-bold">loyalty credits</span> every time you play — save on future tee times, events, and member perks
          </span>
        </div>
        <div className="flex items-start space-x-3">
          <Dot className="w-5 h-5 text-[#006838] mt-1 flex-shrink-0" />
          <span>
            Accumulate credits that can be redeemed for <span className="font-bold">discounted rounds, tournament entries, or exclusive merchandise</span>
          </span>
        </div>
      </div>
    ),
    expires: "54 days",
    expiresSoon: true,
  },
];

export default function CouponsDeals() {
  return (
    <div className="px-4 py-10 w-full bg-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006838] text-center mb-10 mt-5">
          Exclusive Deals
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6">
          {coupons.map((coupon, idx) => (
            <div key={idx}
              className="bg-white mx-10 rounded-2xl shadow-xl flex-1 min-w-[270px] max-w-[350px] flex flex-col items-stretch transition hover:shadow-lg relative">

              <div className="flex-1 px-6 py-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="text-[#222] leading-tight">{coupon.title}</div>
                </div>
                <div className="text-sm text-gray-600 mt-4 min-h-[48px]">
                  {coupon.description}
                </div>
                <div className="flex-grow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
