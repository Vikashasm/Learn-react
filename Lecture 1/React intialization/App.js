import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorElement from "./ErrorElement";
import { Link,NavLink } from "react-router-dom";
import ContactUs from "./ContactUs";
import useOnlineStatus from "./hooks/useOnlineStatus";

const About= lazy(()=>import("./About"))


const App = () => {
  const [count, setCount] = useState(0);
  const online= useOnlineStatus()

if (!online){
  return (
    <h1>oops! your internet connection is not working</h1>
  )
}
  return (
    <div>

    <ContactUs data={{name:'vikash'}}/>
      
      <h1>ok sir this is my first heading</h1>
      <button onClick={() => setCount(count + 1)}>inc</button>
      <Link to={'about'}>About</Link>
      <NavLink to={'about'}>about</NavLink>
    </div>
  );
};

const appRouter = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorElement /> },
  {
    path: "/about",
    element: (
      <Suspense fallback={<h1>hello its loading buddy </h1>}>
        <About />
      </Suspense>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
