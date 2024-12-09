//

import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Page from "./Pages/Page";
import Root from "./Components/Root";
import ShopList from "./Pages/ShopList";

function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/Page" element={<Page />} />
        <Route path="/Shop1" element={<ShopList />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
