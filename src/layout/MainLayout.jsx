import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Card from "../components/Card";
import CardWithButton from "../components/CardWithButton";
import Donation from "../components/Donation";
import Hero from "../components/Hero";
import NewsLetter from "../components/NewsLetter";
import Opinion from "../components/Opinion";
import RecentNews from "../components/RecentNews";
import Speach from "../components/Speach";

const MainLayout = () => {
  return (
    <div className="main-layout max-w-7xl mx-auto">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">Bangladesh 2.0</h1>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-white text-green-800 font-semibold text-lg py-2 px-8 border border-green-800 rounded-lg hover:bg-green-800 hover:text-white transition-colors">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>

      <Hero />

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-4 font-sans">
          Pillar's of "Bangladesh 2.0"
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title={"Innovation"} />
          <Card title={"Sustainability"} />
          <Card title={"Infrastructure"} />
          <Card title={"Empowerment"} />
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-4 font-sans">
          The Vision of Future
        </h2>
        <p className="text-md text-gray-500 font-semibold mb-6">
          Bangladesh 2.0 aims to redefine the nation's trajectory by embracing
          cutting-edge technology, promoting inclusive growth, and ensuring
          sustainability. With initiatives in renewable energy, digital
          transformation, and robust infrastructure, the country is set to
          become a global model development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardWithButton
            title={"Innovation"}
            description={
              "Creating nationwide digital ecosystem to enhance connectivity and access to services for all citizens."
            }
            color={"blue"}
          />
          <CardWithButton
            title={"Sustainability"}
            description={
              "Investments in solar and wind energy to ensure a sustainable and eco-friendly future."
            }
            color={"green"}
          />
          <CardWithButton
            title={"Infrastructure"}
            description={
              "Building state-of-the-art infrastructure to support economic growth and global competitiveness."
            }
            color={"yellow"}
          />
        </div>
      </div>

      <Speach />

      <Opinion />

      <RecentNews />

     <Donation />

     <NewsLetter />

    </div>
  );
};

export default MainLayout;
