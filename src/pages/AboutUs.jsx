
import FootterSection from "../components/FootterSection";
import ImageComponent from "../components/ImageComponent";
import NavbarRegular from "../components/NabarRegular";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      <NavbarRegular />
      <ImageComponent />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-16 transition-all">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-4 text-center leading-tight">
            About Paradise Golf
          </h1>
          <p className="text-xl text-center text-gray-500 italic mb-10">
            “Your Gateway to the Ultimate Golf Experience”
          </p>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed tracking-wide">
            <p className="text-justify">
              <span className="font-semibold text-green-700">Paradise Golf</span> is a <span className="font-semibold">subscription-based membership</span> and <span className="font-semibold">AI-powered access platform</span> offering golfers discounted play at a curated network of public, semi-private, and premium golf courses. Acting as both an <span className="font-semibold">aggregator</span> and <span className="font-semibold">loyalty club</span>, Paradise Golf provides members with exclusive pricing, complimentary rounds, tournaments, leagues, and unique social golf experiences. We collaborate directly with partner golf courses to increase visibility, revenue, and utilization through customized marketing support.
            </p>

            <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
              <div className="bg-white text-justify rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex-1">
                <h2 className="text-2xl font-bold text-center mb-3">
                  B2C Subscription + B2B Partnerships
                </h2>
                <p>
                  Our business model blends a <span className="font-semibold">B2C subscription service</span> with <span className="font-semibold">B2B partnerships</span>. Members pay a recurring fee to unlock benefits across the network, while partner courses gain strategic exposure and increased bookings. Our centralized mobile platform simplifies tee time reservations, tracks loyalty, and delivers <span className="font-semibold">personalized offers</span> to each member.
                </p>
              </div>

              <div className="bg-white text-justify rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex-1">
                <h2 className="text-2xl font-bold text-center mb-3">
                  Investing in the Future of Membership
                </h2>
                <p>
                  As Paradise Golf continues to grow, we are investing in cutting-edge technology to create a seamless digital membership experience. Expansion plans include premium-tier offerings, integration with top-tier practice facilities, and enhanced <span className="font-semibold">data-driven personalization</span> — all designed to elevate the value for members and partners alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FootterSection />
    </div>
  );
};

export default AboutUs;



