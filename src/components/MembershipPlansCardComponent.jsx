export default function MembershipPlansCardComponent() {
  const plans = [
    {
      type: "Combo Membership",
      year: "2025-2026 (Prorated)",
      price: "$229",
      originalPrice: "$265",
      duration: "Apr 1, 2025 – Mar 31, 2026",
      access: "Year-round (Summer + Winter)",
      includes: "Free round, Double Eagle coupons, Private club passes, Tournament invites",
      description: "Best value for full-year preferred golf access",
      colorClass: "bg-white", // Dark blue header
      buttonColorClass: "bg-[#006838] hover:bg-white",
      link:"https://shop.paradisegolfcard.com/products/summer-winter-annual-combo-card-valid-apr-1-oct-31-2025"
    },
    {
      type: "Summer Membership",
      year: "2025 (Prorated)",
      price: "$169",
      originalPrice: "$198",
      duration: "Apr 1 – Oct 31, 2025",
      access: "Summer Season Only",
      includes: "Free round at Heritage Isles, Coupons, Tournament invites, Preferred rates",
      description: "Seasonal deal for summer golf lovers",
      colorClass: "bg-white", // Green header
      buttonColorClass: "bg-[#006838] hover:bg-white",
      link:"https://shop.paradisegolfcard.com/products/summer-2025-paradise-golf-membership-198-total"
    },
    {
      type: "Winter Membership",
      year: "2025-2026 (Early Special)",
      price: "$105",
      originalPrice: "$146",
      duration: "Nov 1, 2025 – Mar 31, 2026",
      access: "Winter Season Only",
      includes: "Preferred rates, Double Eagle coupons, Private club day passes",
      description: "Early renewal discount – limited time only",
      colorClass: "bg-white", // Lighter blue header
      buttonColorClass: "bg-[#006838] hover:bg-white",
      link:"https://shop.paradisegolfcard.com/products/early-renewal-special-winter-25-26-membership-105-total"
    }
  ];

  return (
    <section id='membership-card-component' className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#006838] mb-3">
            Choose Your Membership Plan
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Find the perfect golf membership that fits your needs and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col hover:ring-2 hover:ring-[#006838] transition-all ease-in-out duration-300 rounded-2xl shadow-lg overflow-hidden duration-300 hover:scale-105"
            >
              {/* Header */}
              <div className={`${plan.colorClass} p-4 text-white text-center rounded-t-2xl`}>
                <h3 className="text-xl font-semibold text-black">{plan.type}</h3>
                <p className="mt-1 text-lg text-black">{plan.year}</p>
              </div>

              {/* Body */}
              <div className="flex-1 bg-white p-6 flex flex-col justify-between rounded-b-2xl">
                <div>
                  <div className="flex items-baseline justify-center mb-4 ">
                    <span className="text-3xl font-extrabold text-gray-900">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="ml-2 text-xl text-gray-500 line-through">{plan.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-gray-700 text-center mb-2 text-left font-semibold text-sm"><span className="font-bold">Duration: </span> {plan.duration}</p>
                  <p className="text-gray-700 text-center mb-4 text-left"><span className="font-bold">Access:</span> {plan.access}</p>
                  <p className="text-gray-600 text-sm leading-relaxed text-left"><span className="font-bold">Includes: </span>
                    {plan.includes}
                  </p>
                </div>

                {/* Buy Now Button */}
                <div className="flex items-center justify-center px-6 mt-8">
                  <button
                    className={` py-2 px-5 border border-transparent rounded-full text-white  font-medium ${plan.buttonColorClass} hover:ring-2 hover:bg-white hover:ring-[#006838] hover:text-black transition-all duration-200 shadow-md`}
                  >
                    <a href={plan.link}>
                    Buy Now
                    </a>
                  </button>
                </div>

                {/* Footer Description */}
                <p className="mt-4 text-sm text-gray-500 text-center italic font-semibold">
                  {plan.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
