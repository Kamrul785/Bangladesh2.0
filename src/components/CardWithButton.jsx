import cardIcom from "../assets/card-icon.png";

const colorClasses = {
  blue: "bg-blue-400",
  green: "bg-green-600",
  yellow: "bg-yellow-400",
};
const backGroundColorClasses = {
  blue: "bg-blue-100",
  green: "bg-green-100",
  yellow: "bg-yellow-100",
};

const CardWithButton = ({ title, description, color }) => {
  const buttonColor = colorClasses[color] || "bg-green-500";
  const backgroundColor = backGroundColorClasses[color] || "bg-green-100";
  return (
    <div
      className={` shadow-lg rounded-2xl p-6 mt-4 border border-gray-200 ${backgroundColor}`}
    >
      <img src={cardIcom} alt="Card Icon" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 font-semibold">{description}</p>
      <button
        className={`mt-4 ${buttonColor} text-white font-bold py-2 px-6 rounded-lg`}
      >
        Learn More
      </button>
    </div>
  );
};

export default CardWithButton;
