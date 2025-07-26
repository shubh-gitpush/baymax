// import TopBar from './Top-bar';
import Header from './Header';
import HeroSection from './Hero-section';
import BottomSection from './Bottom-section';

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      {/* <TopBar /> */}
      <Header />
      <HeroSection />
      {/* You can add more sections/components here as needed */}
      <BottomSection />
    </div>
  );
}

export default Dashboard;
