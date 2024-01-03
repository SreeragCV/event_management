import React from "react";
import MainNavigation from "../components/MainNavigation.js";
import { Outlet, useNavigation } from "react-router-dom";

function RootLayout() {
  // const navigate = useNavigation();
  // navigate.state === "loading";

  return (
    <div>
      <MainNavigation />
      {/* {navigate.state === 'loading' && <p>loading...</p>} */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
