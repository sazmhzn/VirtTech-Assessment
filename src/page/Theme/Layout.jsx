import { Outlet } from "react-router-dom";

import Header from "./Header";

const Layout = () => {
  return (
    <>
      <div className="parent">
        <Header />
        <div className="main">
          <div className="child content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
