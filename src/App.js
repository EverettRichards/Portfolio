import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarNew from "./components/NavbarNew";
import Home from "./pages/Home";
import ResearchPage from "./pages/ResearchPage";
import LeadershipPage from "./pages/LeadershipPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-400">
        <NavbarNew />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/research" component={ResearchPage} />
            <Route path="/leadership" component={LeadershipPage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}