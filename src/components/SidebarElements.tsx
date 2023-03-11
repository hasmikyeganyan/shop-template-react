import sidebarItems from "../data/sidebar";

const SidebarElements = () => {
  return (
    <>
      <ul className="sidebar-list list navbar-nav sidebar-dark list-group">
        {sidebarItems.map((item) => (
          <a
            key={item.title}
            className="sidebar-brand d-flex align-items-center"
            href={item.to}
          >
            <li
              id="sidebar-item"
              className="list-group-item w-50 nav-item bg-primary float-start"
            >
              <a className="nav-link d-flex gap-3 align-items-center">
                <i className={`${item.icon}`}></i>
                <span className="nav-link-text">{item.title}</span>
              </a>
            </li>
          </a>
        ))}
      </ul>
    </>
  );
};

export default SidebarElements;
