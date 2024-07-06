import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      {/* header */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};
