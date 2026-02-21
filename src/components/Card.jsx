import cardIcom from "../assets/card-icon.png";

const Card = ({ title }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mt-4 border border-gray-200 ">
      <img src={cardIcom} alt="Card Icon" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 font-semibold ">
        Donor sit amet consectetur elit. Facilis quas, ducimus labore sequi quos
      </p>
    </div>
  );
};

export default Card;
