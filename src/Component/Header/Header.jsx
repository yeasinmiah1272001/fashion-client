import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

const Header = () => {
  return (
    <div className="sticky top-0 opacity-100 bg-white">
      <TopNav />
      <BottomNav />
    </div>
  );
};

export default Header;
