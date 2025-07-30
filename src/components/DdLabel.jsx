const DdLabel = ({ name }) => {

  return (
    <div className="bg-white flex px-3 py-2 border-gray-300 items-center justify-center border rounded-full text-md">
      {name} <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </div>
  )
}
export default DdLabel;
