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
import ShopList2 from "./Pages/ShopList2";
import ShopCom from "./Pages/ShopCom";
import Contact from "./Components/Contact/Login";

function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/Page" element={<Page />} />
        <Route path="/Shop1" element={<ShopList />} />
        <Route path="/Shop2" element={<ShopList2 />} />
        <Route path="/OrderComplete" element={<ShopCom />} />
        <Route path="/Login" element={<Contact />} />
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
