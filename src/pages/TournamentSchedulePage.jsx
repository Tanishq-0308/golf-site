import React, { useState, useMemo, useEffect } from "react";
import {
  FaCalendarDay,
  FaClock,
  FaDollarSign,
  FaGolfBall,
  FaClipboardList,
  FaCheckCircle,
  FaTimesCircle,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";
import scheduleData from "../data/tournament_schedule.json";
import NabarRegular from "../components/NabarRegular";
import FootterSection from "../components/FootterSection";

// Use Vite's glob import feature to handle dynamic imports correctly.
// This creates a map of all .json files in the data directory.
const eventDetailsModules = import.meta.glob("./event_data/*.json");

// Card component for a single event in the schedule
const ScheduleEventCard = ({ event, onSelect }) => {
  const isConfirmed = event.confirmed === "YES";
  const isTbd = event.member_price === "TBD" || event.guest_price === "TBD";

  // Format date for display
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  // Function to remove .json extension
  const getCleanDetailsFileName = (fileName) => {
    return fileName ? fileName.replace(/\.json$/, '') : '';
  };

  const cleanDetailsFile = getCleanDetailsFileName(event.detailsFile);


  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-200/80">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          {/* Event Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              {event.location}
            </h3>
            <p className="text-md font-semibold text-[#006838] mt-1">
              {formattedDate}
            </p>
          </div>
          {/* Confirmation Status */}
          <div
            className={`flex items-center gap-2 text-sm font-bold px-3 py-1 rounded-full ${
              isConfirmed
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {isConfirmed ? (
              <FaCheckCircle />
            ) : (
              <FaTimesCircle className="text-black" />
            )}
            <span>{isConfirmed ? "Confirmed" : "Not Confirmed"}</span>
          </div>
        </div>

        {/* Details Section */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 text-gray-600">
          <div className="flex items-center gap-3">
            <FaClock className="text-gray-600" />
            <div>
              <p className="font-semibold">Time</p>
              <p className="text-gray-800">{event.time}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaGolfBall className="text-gray-600" />
            <div>
              <p className="font-semibold">Start Type</p>
              <p className="text-gray-800">{event.start_type}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaDollarSign className="text-green-500" />
            <div>
              <p className="font-semibold">Price (Member/Guest)</p>
              <p
                className={`font-mono ${
                  isTbd ? "text-gray-500" : "text-gray-800"
                }`}
              >
                {isTbd
                  ? "TBD"
                  : `$${event.member_price} / $${event.guest_price}`}
              </p>
            </div>
          </div>
        </div>

        {/* Notes and Details Button */}
        <div className="mt-6 border-t border-gray-200 pt-4 flex justify-between items-center gap-4">
          <div className="flex-grow">
            {event.notes && (
              <div className="flex items-center gap-3 text-gray-600">
                <FaClipboardList className="text-gray-400" />
                <div>
                  <p className="font-semibold">Notes</p>
                  <p className="text-sm text-gray-800">{event.notes}</p>
                </div>
              </div>
            )}
          </div>
          {event.detailsFile && (
            <a
              href={`https://shop.paradisegolfcard.com/products/${cleanDetailsFile}`}
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Recommended for security with target="_blank"
              className="bg-[#006838] text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition-all duration-300 flex-shrink-0"
            >
              View Details{" "}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Main page component to display the schedule
export default function TournamentSchedulePage() {
  const { name, schedule } = scheduleData;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("All Months");
  const [selectedEventData, setSelectedEventData] = useState(null);

  // --- New state for "Load More" functionality ---
  const initialEventsToShow = 5; // Number of events to show initially
  const eventsPerLoad = 5; // Number of events to load with each click
  const [eventsToShow, setEventsToShow] = useState(initialEventsToShow);

  // Reset eventsToShow when filters change
  useEffect(() => {
    setEventsToShow(initialEventsToShow);
  }, [searchTerm, selectedMonth]);
  // -----------------------------------------------

  const months = useMemo(() => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const uniqueMonths = [
      ...new Set(schedule.map((event) => new Date(event.date).getMonth())),
    ];
    return uniqueMonths
      .sort((a, b) => a - b)
      .map((monthIndex) => monthNames[monthIndex]);
  }, [schedule]);

  const filteredSchedule = useMemo(() => {
    return schedule.filter((event) => {
      if (selectedMonth !== "All Months") {
        const eventMonth = new Date(event.date).toLocaleString("en-US", {
          month: "long",
          timeZone: "UTC",
        });
        if (eventMonth !== selectedMonth) return false;
      }
      if (
        searchTerm &&
        !event.location.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [schedule, searchTerm, selectedMonth]);

  // --- New function to handle loading more events ---
  const handleLoadMore = () => {
    setEventsToShow((prev) => prev + eventsPerLoad);
  };
  // -----------------------------------------------

  // This function now uses the pre-loaded map of modules to correctly load the data.
  const handleEventSelect = async (detailsFile) => {
    const path = `./event_data/${detailsFile}`;
    console.log("Loading event details from path:", path);
    if (eventDetailsModules[path]) {
      try {
        // Execute the function to get the module's content
        const module = await eventDetailsModules[path]();
        setSelectedEventData(module.default || module);
      } catch (error) {
        console.error("Failed to load event details:", error);
      }
    } else {
      console.error("No details found for file:", detailsFile);
    }
  };

  const handleClosePopup = () => {
    setSelectedEventData(null);
  };

  return (
    <div>
      <NabarRegular />
      <div className="min-h-screen bg-gray-100 font-sans">
        <header
          className="bg-gray-800 text-white text-center py-16 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1661772222311-f7b834b2b5f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="bg-black bg-opacity-60 py-12">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-5xl font-bold mb-2">{name}</h1>
              <p className="text-lg text-gray-300">
                Your complete guide to the upcoming golf season.
              </p>
            </div>
          </div>
        </header>

        <main className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-md p-4 mb-8 flex flex-col sm:flex-row items-center gap-4">
              <div className="relative w-full sm:w-2/3">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                />
              </div>
              <div className="relative w-full sm:w-1/3">
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option>All Months</option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-8">
              {filteredSchedule.length > 0 ? (
                // --- Render only a subset of events ---
                filteredSchedule.slice(0, eventsToShow).map((event, index) => (
                  <ScheduleEventCard
                    key={index}
                    event={event}
                    onSelect={handleEventSelect}
                  />
                ))
              ) : (
                <div className="text-center text-gray-500 py-10">
                  <p>No events found. Try adjusting your filters.</p>
                </div>
              )}
            </div>

            {/* --- Load More Button --- */}
            {filteredSchedule.length > eventsToShow && (
              <div className="text-center mt-8">
                <button
                  onClick={handleLoadMore}
                  className="bg-[#006838] text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-colors duration-300 shadow-lg"
                >
                  Load More Events
                </button>
              </div>
            )}
            {/* ------------------------ */}
          </div>
        </main>

        {/* {selectedEventData && <EventDetailsPopup product={selectedEventData.product} onClose={handleClosePopup} />} */}
      </div>
      <FootterSection />
    </div>
  );
}