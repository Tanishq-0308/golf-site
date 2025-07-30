
import React, { useState, useMemo } from "react"; // Import useMemo for performance
import golfCourses from "../data/golfCourses.json"; // Your JSON data
import mapImage from "../assets/findCourse.png";
import { Search } from "lucide-react";

export default function CourseFinder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // actual query to filter
  const [showRecommendations, setShowRecommendations] = useState(false); // New state to control visibility

  const handleSearch = () => {
    setSearchQuery(searchTerm.trim());
    setShowRecommendations(false); // Hide recommendations when search button is clicked
  };

  // Memoize the filtered recommendations to avoid unnecessary re-renders
  const filteredRecommendations = useMemo(() => {
    if (searchTerm.length < 2) { // Only show recommendations after 2 characters for performance
      return [];
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return golfCourses.filter(
      (course) =>
        course.courseName.toLowerCase().includes(lowerCaseSearchTerm) ||
        course.city.toLowerCase().includes(lowerCaseSearchTerm) ||
        course.zipCode.includes(lowerCaseSearchTerm) // Zip code might need to be exact or a startsWith for better UX
    ).slice(0, 5); // Limit recommendations to a reasonable number, e.g., 5
  }, [searchTerm]); // Re-calculate only when searchTerm changes

  const filteredCourses = useMemo(() => {
    if (searchQuery === "") {
      return [];
    }
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    return golfCourses.filter(
      (course) =>
        course.courseName.toLowerCase().includes(lowerCaseSearchQuery) ||
        course.city.toLowerCase().includes(lowerCaseSearchQuery) ||
        course.zipCode.includes(lowerCaseSearchQuery)
    );
  }, [searchQuery]); // Re-calculate only when searchQuery changes

  const handleRecommendationClick = (recommendation) => {
    setSearchTerm(recommendation); // Set the search term to the clicked recommendation
    setSearchQuery(recommendation); // Immediately trigger a search with the recommendation
    setShowRecommendations(false); // Hide recommendations
  };

  return (
    <section className="bg-white mt-2 sm:pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="w-full mt-15 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Courses Near You
          </h2>
          <p className="text-gray-600 mb-8">
            Discover top-rated golf courses in your area that accept Paradise
            Golf Card.
          </p>

          {/* Mobile Image */}
          <div className="mb-8 lg:hidden">
            <img
              src={mapImage}
              alt="Map showing course locations"
              className="w-full rounded-2xl"
            />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md relative">
            {" "}
            {/* Added relative positioning */}
            {/* Input Field */}
            <div className="flex gap-4 mb-6">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowRecommendations(true); // Show recommendations as user types
                }}
                onFocus={() => setShowRecommendations(true)} // Show recommendations when input is focused
                onBlur={() => setTimeout(() => setShowRecommendations(false), 100)} // Hide after a small delay to allow click
                placeholder="Enter course name, city or zip"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>

            {/* Recommendations Dropdown */}
            {showRecommendations && filteredRecommendations.length > 0 && (
              <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg max-h-60 overflow-y-auto">
                {filteredRecommendations.map((course) => (
                  <div
                    key={course.id}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onMouseDown={() => // Use onMouseDown to prevent onBlur from hiding the list before click
                      handleRecommendationClick(course.courseName)
                    }
                  >
                    {course.courseName} - {course.city}
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={handleSearch}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              <span>Find Courses</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-4 text-sm text-gray-600 flex justify-between">
            <span>
              {searchQuery !== "" && filteredCourses.length > 0
                ? `Showing ${filteredCourses.length} of ${golfCourses.length} courses`
                : searchQuery !== ""
                  ? "No courses found"
                  : ""}
            </span>
            <a href="#" className="text-blue-600 hover:underline">
              View All Courses
            </a>
          </div>

          {/* Render Results */}
          <div className="mt-6 space-y-4">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="p-4 border border-gray-200 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {course.courseName}
                </h3>
                <p className="text-gray-600 text-sm">{course.address}</p>
                <p className="text-gray-500 text-sm">
                  {course.city}, FL {course.zipCode}
                </p>

                {/* Phone Number */}
                {course.phone && (
                  <p className="text-sm text-gray-700 mt-1">
                    📞{" "}
                    <a href={`tel:${course.phone}`} className="underline">
                      {course.phone}
                    </a>
                  </p>
                )}

                {/* Website */}
                {course.website && (
                  <p className="text-sm text-gray-700 mt-1">
                    🌐{" "}
                    <a
                      href={course.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Visit Website
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Map (hidden on mobile) */}
        <div className="w-full lg:w-1/2 hidden lg:block">
          <img
            src={mapImage}
            alt="Map showing course locations"
            className="w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
