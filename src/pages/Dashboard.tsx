import DashboardSection from "../components/DashboardSection";
import Footer from "../components/Footer";
import PrivateHeader from "../components/PrivateHeader";


function DashboardPage() {
  return (
    <div className="font-sans bg-gray-50">
      <PrivateHeader />
      <DashboardSection/>
      <Footer/>
    </div>
  );
}

export default DashboardPage;
