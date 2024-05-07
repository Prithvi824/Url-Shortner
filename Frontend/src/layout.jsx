import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigator = useNavigate();
  const dta = "hello";

  return (
    <>
      <Outlet
        context={{
          navigator,
          dta,
        }}
      />
    </>
  );
}

export default Layout;
