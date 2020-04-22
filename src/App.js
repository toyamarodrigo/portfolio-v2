import React from "react";
import { Route } from "react-router-dom";

import Header from './components/header/header.component'
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/aboutpage/aboutpage.component";

function App() {
  return (
    <div>
    <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
    </div>
  );
}

export default App;
