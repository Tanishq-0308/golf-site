
const Star = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    viewBox="0 0 20 20"
  >
    <polygon
      points="9.9,1.1 8,6.6 2.2,7.5 6.6,11.4 5.5,17.1 9.9,14.3 14.3,17.1 13.2,11.4 17.6,7.5 11.8,6.6"
      style={{ strokeLinejoin: "round", strokeWidth: 1 }}
    />
  </svg>
);

export default Star;
