
const GolfCourseCard = ({ course }) => {
  // Function to get the first initial of the course name
  const getInitial = (name) => name ? name.charAt(0).toUpperCase() : '';

  // Function to generate a consistent color based on a string (for background)
  const getColorHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  };

  // Array of Tailwind color classes for backgrounds and text
  const colors = [
    'bg-blue-200 text-blue-800',
    'bg-green-200 text-green-800',
    'bg-purple-200 text-purple-800',
    'bg-yellow-200 text-yellow-800',
    'bg-red-200 text-red-800',
    'bg-indigo-200 text-indigo-800',
    'bg-pink-200 text-pink-800',
    'bg-teal-200 text-teal-800',
    'bg-orange-200 text-orange-800',
  ];

  // Function to get a background color class based on the course name
  const getBackgroundColorClass = (name) => {
    if (!name) return 'bg-gray-200 text-gray-800'; // Default fallback
    const hash = getColorHash(name);
    const index = Math.abs(hash % colors.length);
    return colors[index];
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-gray-200">
      {/* Alphabet Image Placeholder Section */}
      <div className={`relative w-full h-48 sm:h-56 md:h-64 lg:h-48 flex items-center justify-center text-3xl font-extrabold rounded-t-2xl ${getBackgroundColorClass(course.courseName)}`}>
        {course.courseName}
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.courseName}</h3>

        {/* City and Zip Code */}
        <p className="text-gray-600 text-sm mb-2 flex items-center">
          <i className="fas fa-map-marker-alt mr-2 text-gray-500"></i>
          {course.city}, {course.zipCode}
        </p>

        {/* Phone and Website */}
        <div className="text-gray-700 text-sm mb-4">
          <p className="flex items-center mb-1">
            <i className="fas fa-phone mr-2 text-gray-500"></i>
            <a href={`tel:${course.phone}`} className="hover:underline text-blue-600">
              {course.phone}
            </a>
          </p>
          <p className="flex items-center">
            <i className="fas fa-globe mr-2 text-gray-500"></i>
            <a href={course.website} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
              {course.website}
            </a>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-auto flex justify-between items-center space-x-2">
          {/* <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out shadow-md text-base"> */}
          {/*   View Details */}
          {/* </button> */}
        </div>
      </div>
    </div>
  );
};

export default GolfCourseCard;
