import React from 'react';
import Navbar from "../components/NavBar";

export default function LearnMore() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Learn More</h1>
      <p>
        Welcome to the Learn More page. Here, you can find detailed information about our project, our goals, and how we utilize data to enhance whisky discovery.
      </p>
      <p>
        Our system uses advanced chemical analysis to match whisky profiles with user preferences. Dive deep into the science and technology behind our recommendations.
      </p>
      <p>
        Whether you're a whisky enthusiast or just getting started, this page will help you understand the unique characteristics of different whiskies.
      </p>
    </div>
  );
}

import LearnMore from "./pages/LearnMore.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/whiskey",
    element: <Whiskey />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/learn-more",
    element: <LearnMore />,
  },
]);

<NavLink to="/learn-more">Learn More</NavLink>
