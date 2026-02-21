import aljazeera from "../assets/al-jazeera.png";
import satelliteImg from "../assets/satelite.png";
import NewsCard from "./NewsCard";


const newsInfo = [
  {
    title: "Bangladesh Launches New Satellite",
    date: "05/01/2025",
    time: "10:25 PM",
    description:
      "Not until the creation and maintenance of decent conditions of life for all people are recognized and accepted as a common obligation of all people and all countries—not until then shall we, with a certain degree of justification, be able to speak of humankind as civilized",
    reverse: false,
  },
  {
    title: "Bangladesh Launches New Satellite",
    date: "05/01/2025",
    time: "10:25 PM",
    description:
      "Not until the creation and maintenance of decent conditions of life for all people are recognized and accepted as a common obligation of all people and all countries—not until then shall we, with a certain degree of justification, be able to speak of humankind as civilized",
    reverse: true,
  },
  {
    title: "Bangladesh Launches New Satellite",
    date: "05/01/2025",
    time: "10:25 PM",
    description:
      "Not until the creation and maintenance of decent conditions of life for all people are recognized and accepted as a common obligation of all people and all countries—not until then shall we, with a certain degree of justification, be able to speak of humankind as civilized",
    reverse: false,
  },
];

const RecentNews = () => {
  return (
    <section className="mt-10 md:mt-20">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Recent News</h2>
      <p className="text-gray-500 text-xs md:text-sm mb-6 md:mb-8">
        Bangladesh 2.0 aims to redefine the nation's trajectory by embracing
        cutting-edge technology, promoting inclusive growth, and ensuring
        sustainability. With initiatives in renewable energy, digital
        transformation, and robust infrastructure, the country is set to become
        a global model of development.
      </p>
      <div className="flex flex-col gap-6">
        {newsInfo.map((news, index) => (
          <NewsCard
            key={index}
            image={satelliteImg}
            logo={aljazeera}
            title={news.title}
            date={news.date}
            time={news.time}
            description={news.description}
            reverse={news.reverse}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentNews;