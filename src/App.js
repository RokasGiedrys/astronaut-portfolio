import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";
import PortfolioPage from "./pages/portfolio-page/portfolio-page.component";
import ContactPage from "./pages/contact-page/contact-page.component";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/portfolio'>
            <PortfolioPage />
          </Route>
          <Route exact path='/contact'>
            <ContactPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
