import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";
import PortfolioPage from "./pages/portfolio-page/portfolio-page.component";
import ContactPage from "./pages/contact-page/contact-page.component";
import MobileMenuPage from "./pages/mobile-menu-page/mobile-menu-page.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/portfolio' component={PortfolioPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/menu' component={MobileMenuPage} />
      </Switch>
    </div>
  );
}

export default App;
