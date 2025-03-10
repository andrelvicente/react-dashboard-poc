import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PrivateHeader from "../components/PrivateHeader";

function HomePage() {
  return (
    <div className="font-sans bg-gray-50">
      <PrivateHeader />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default HomePage;
