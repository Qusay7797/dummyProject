import React from "react";
import MainPage from "./components/main_page";

import { BrowserRouter as Router, Route } from "react-router-dom";
import AdvPage from "./components/advertisment_page";

function App() {
  return (
    <Router>
      <Route path="/" exact component={MainPage} />

      <Route path="/adv/:id" component={AdvPage} />
    </Router>
  );
}

export default App;
