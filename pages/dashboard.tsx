import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DashboardDrawer from "../Components/DashboardDrawer";
const DashBoard = () => {
  return (
    <>
      <Navbar />
      <div className="dash-body clr-primary">
        <DashboardDrawer />
        <div className="dash-body"></div>
      </div>
    </>
  );
};
export default DashBoard;
