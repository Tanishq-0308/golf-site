
import { useEffect, useState, useMemo } from "react";
import SearchBar from "../components/SearchBar";
import GolfCourseCard from "../components/GolfCourseCard";
import mockGolfCourses from "../data/Data";
import Navbar from "./Navbar";
import NavbarRegular from "./NabarRegular";
import FootterSection from "./FootterSection";

// Main GolfCourses Component
const GolfCourses = () => {
  const coursesPerPage = 6; // Number of courses to load per "Load More" click
  const [displayedCourses, setDisplayedCourses] = useState([]);
  const [coursesToLoad, setCoursesToLoad] = useState(coursesPerPage);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); // New state for actual search query

  // Filter courses based on search query before pagination
  const filteredAndSortedCourses = useMemo(() => {
    if (!searchQuery) {
      return mockGolfCourses; // If no search query, return all courses
    }
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    return mockGolfCourses.filter(
      (course) =>
        course.courseName.toLowerCase().includes(lowerCaseSearchQuery) ||
        course.city.toLowerCase().includes(lowerCaseSearchQuery) ||
        course.zipCode.includes(lowerCaseSearchQuery)
    );
  }, [searchQuery]); // Recalculate when searchQuery changes

  // Load initial courses and handle "Load More" based on filtered courses
  useEffect(() => {
    const newCourses = filteredAndSortedCourses.slice(0, coursesToLoad);
    setDisplayedCourses(newCourses);
    setHasMore(coursesToLoad < filteredAndSortedCourses.length);
  }, [coursesToLoad, filteredAndSortedCourses]); // Depend on filteredAndSortedCourses

  const handleLoadMore = () => {
    setCoursesToLoad(prev => prev + coursesPerPage);
  };

  const handleSearchTermChange = (term) => {
    setSearchQuery(term);
    setCoursesToLoad(coursesPerPage); // Reset pagination when a new search is performed
  };

  return (
    <div>
      <NavbarRegular />
      <div className="min-h-screen bg-gray-100 font-sans antialiased px-4 py-8 sm:px-6 lg:px-16">
        {/* Header Section */}
        <header className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Golf Courses</h1>
          <p className="text-gray-600 text-lg">Discover and explore our partner golf courses</p>
        </header>

        {/* Search and Filter Section */}
        <SearchBar onSearchTermChange={handleSearchTermChange} initialSearchTerm={searchQuery} />

        {/* Courses Found Count */}
        <div className="mb-6 text-gray-700 text-lg font-medium">
          {filteredAndSortedCourses.length} courses found {searchQuery && `for "${searchQuery}"`}
        </div>

        {/* Golf Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {displayedCourses.map((course) => (
            <GolfCourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="bg-green-500 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Load More
            </button>
          </div>
        )}

        {/* Link to Font Awesome for icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" xintegrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0V4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </div>
      <FootterSection />
    </div>
  );
};
export default GolfCourses;
