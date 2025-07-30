import Star from "./Star";

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++)
    stars.push(<Star key={i} filled={i <= Math.round(rating)} />);
  return <div className="flex">{stars}</div>;
};

export default RatingStars;
