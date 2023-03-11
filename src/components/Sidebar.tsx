import SidebarElements from "./SidebarElements";
import "../assets/styles/sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper d-flex flex-column flex-shrink-0">
      <SidebarElements />
    </div>
  );
};

export default Sidebar;
