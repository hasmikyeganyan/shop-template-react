import { Outlet } from "react-router-dom";

import logo from "../assets/images/shop_logo.png";
import notif from "../assets/images/notif.png";

import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const Navbar: FC<IProps> = (props) => {
  return (
    <>
      <div className="navbar navbar-light bg-white topbar static-top shadow">
        <img className="mx-4" alt="logo" src={logo}></img>
        <div className="righSection d-flex gap-4 mx-4 float-end">
          <div className="search">{props.children}</div>
          <img alt="notification" src={notif}></img>
        </div>
      </div>
    </>
  );
};

export default Navbar;
