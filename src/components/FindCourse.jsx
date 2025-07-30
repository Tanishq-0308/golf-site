
import React, { useState, useEffect } from "react";
import golfCourses from "../data/golfCourses.json";
import { Search } from "lucide-react";
import MapContainerWithMarkers from "./MapContainerWithMarkers";

export default function CourseFinder() {
  const [displayedCourses, setDisplayedCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedCourseName, setHighlightedCourseName] = useState(null);

  useEffect(() => {
    setDisplayedCourses([]);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setHighlightedCourseName(null);

    if (value.trim() === "") {
      setSuggestions([]);
      setDisplayedCourses([]);
      return;
    }

    const matches = golfCourses.filter(
      (course) =>
        course.courseName.toLowerCase().includes(value.toLowerCase()) ||
        course.city.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(matches.slice(0, 5));
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setDisplayedCourses([]);
      setSuggestions([]);
      setHighlightedCourseName(null);
      return;
    }

    const results = golfCourses.filter(
      (course) =>
        course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.zipCode.includes(searchTerm)
    );
    setDisplayedCourses(results);
    setSuggestions([]);

    if (
      results.length === 1 &&
      results[0].courseName.toLowerCase() === searchTerm.toLowerCase()
    ) {
      setHighlightedCourseName(results[0].courseName);
    } else {
      setHighlightedCourseName(null);
    }
  };

  const handleSuggestionClick = (course) => {
    setSearchTerm(course.courseName);
    setDisplayedCourses([course]);
    setSuggestions([]);
    setHighlightedCourseName(course.courseName);
  };

  const handleViewAllCourses = () => {
    setSearchTerm("");
    setSuggestions([]);
    setDisplayedCourses(golfCourses);
    setHighlightedCourseName(null);
  };

  return (
    <section className="bg-white mt-2 sm:pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="w-full mt-15 lg:w-1/2">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Find Courses Near You
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Discover top-rated golf courses in your area that accept Paradise Golf Card.
          </p>

          {/* Search Box */}
          <div className="bg-white p-6 rounded-2xl shadow-md relative">
            <div className="flex flex-col gap-2 mb-6 relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search by course name or city."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />

              {/* Autocomplete Dropdown */}
              {suggestions.length > 0 && (
                <ul className="bg-white border border-gray-200 rounded-md shadow-md absolute mt-12 w-full z-10">
                  {suggestions.map((course) => (
                    <li
                      key={course.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSuggestionClick(course)}
                    >
                      {course.courseName} –{" "}
                      <span className="text-sm text-gray-500">{course.city}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="w-full bg-[#006838] hover:bg-white hover:text-black hover:ring-2 transition-all  hover:border-[#006838] text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              <span>Find Courses</span>
            </button>
          </div>

          {/* Footer */}
          {/* <div className="mt-4 text-sm text-gray-600 flex justify-between">
            <span>
              Showing {displayedCourses.length} of {golfCourses.length} courses
            </span>
            <button
              onClick={handleViewAllCourses}
              className="text-blue-600 hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              View All Courses
            </button>
          </div> */}

          {/* Render Results */}
          <div className="mt-6 space-y-4">
            {displayedCourses.map((course) => (
              <div
                key={course.id}
                className="p-4 border border-gray-200 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {course.courseName}
                </h3>
                {course.address && (
                  <p className="text-gray-600 text-sm">{course.address}</p>
                )}
                <p className="text-gray-500 text-sm">
                  {course.city}, FL {course.zipCode}
                </p>

                {course.phone && (
                  <p className="text-sm text-gray-700 mt-1">
                    📞 <a href={`tel:${course.phone}`} className="underline">{course.phone}</a>
                  </p>
                )}

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

        {/* Right Section - Live Map */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="w-full h-[500px] rounded-2xl overflow-hidden relative z-0 mt-6 lg:mt-0">
            <MapContainerWithMarkers highlightedCourseName={highlightedCourseName} />
          </div>
        </div>
      </div>
    </section>
  );
}
