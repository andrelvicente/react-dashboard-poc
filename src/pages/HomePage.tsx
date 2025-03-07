import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

function HomePage() {
  return (
    <div className="font-sans bg-gray-50">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default HomePage;
