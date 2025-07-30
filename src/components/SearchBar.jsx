
import { useEffect, useMemo, useState } from "react";
import mockGolfCourses from "../data/Data";


const SearchBar = ({ onSearchTermChange, initialSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm || '');
  const [recommendations, setRecommendations] = useState([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  // Dropdown options
  const dropdownOptions = [
    "All Course Types",
    "All Amenities",
    "Distance",
    "All Plans",
    "With Coupons",
  ];

  // Memoize filtered recommendations for performance
  const filteredRecommendations = useMemo(() => {
    if (searchTerm.length < 2) {
      return [];
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return mockGolfCourses.filter(
      (course) =>
        course.courseName.toLowerCase().includes(lowerCaseSearchTerm) ||
        course.city.toLowerCase().includes(lowerCaseSearchTerm) ||
        course.zipCode.includes(lowerCaseSearchTerm)
    ).slice(0, 5); // Limit to 5 recommendations
  }, [searchTerm]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      setShowRecommendations(true); // Show recommendations as user types
    } else {
      setShowRecommendations(false); // Hide if input is empty
    }
  };

  const handleRecommendationClick = (courseName) => {
    setSearchTerm(courseName);
    onSearchTermChange(courseName); // Pass the selected recommendation to the parent (App)
    setRecommendations([]); // Clear recommendations
    setShowRecommendations(false); // Hide recommendations
  };

  const handleSearchButtonClick = () => {
    onSearchTermChange(searchTerm); // Trigger search in parent with current searchTerm
    setShowRecommendations(false); // Hide recommendations
  };

  // Close recommendations when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the search bar container AND not on a recommendation item
      if (
        event.target.closest('.search-bar-container') === null &&
        !event.target.classList.contains('recommendation-item')
      ) {
        setShowRecommendations(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Update recommendations whenever searchTerm changes
  useEffect(() => {
    setRecommendations(filteredRecommendations);
  }, [filteredRecommendations]);


  return (
    <div className="bg-white flex space-x-10 justify-center items-center  p-6 rounded-xl shadow-lg mb-8 search-bar-container relative">
      {/* Search Input */}
      <div className=" w-full">
        <div className="relative">
          <input
            type="text"
            placeholder="Search golf courses by name, location..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => searchTerm.length > 0 && filteredRecommendations.length > 0 && setShowRecommendations(true)}
          />
          <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>

          {/* Recommendations Dropdown */}
          {showRecommendations && recommendations.length > 0 && (
            <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
              {recommendations.map((course) => (
                <div
                  key={course.id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center recommendation-item" // Added class for click outside logic
                  onMouseDown={() => handleRecommendationClick(course.courseName)} // Use onMouseDown to prevent onBlur from hiding the list before click
                >
                  <i className="fas fa-golf-ball text-gray-500 mr-2"></i>
                  <span>{course.courseName}</span>
                  <span className="text-gray-500 text-sm ml-2">({course.city})</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Dropdowns */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        {dropdownOptions.map((option, index) => (
          <div key={index} className="relative">
            <select className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition duration-200 pr-8">
              <option>{option}</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <i className="fas fa-chevron-down text-sm"></i>
            </div>
          </div>
        ))}
      </div> */}

      {/* View Toggles */}
      {/* <div className="flex justify-end items-center text-gray-600 text-sm">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 hover:text-blue-600 transition duration-200">
            <i className="fas fa-list-ul text-lg"></i>
            <span>List View</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-600 transition duration-200">
            <i className="fas fa-map-marker-alt text-lg"></i>
            <span>Map View</span>
          </button>
        </div>
      </div> */}
      {/* Search Button for explicit search trigger */}
      <div className="flex justify-center">
        <button
          onClick={handleSearchButtonClick}
          className="bg-green-500 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
