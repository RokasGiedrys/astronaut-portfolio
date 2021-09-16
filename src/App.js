import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";
import PortfolioPage from "./pages/portfolio-page/portfolio-page.component";
import ContactPage from "./pages/contact-page/contact-page.component";

function App() {
  return (
    <div>
      <Header />
      <HashRouter basename='/'>
        <Switch>
          <Route path='/' component={HomePage} />
          <Route exact path='/projects' component={PortfolioPage} />
          <Route exact path='/contact' component={ContactPage} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
