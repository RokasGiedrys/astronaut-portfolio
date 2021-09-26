import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";
import PortfolioPage from "./pages/portfolio-page/portfolio-page.component";
import ContactPage from "./pages/contact-page/contact-page.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/astronaut-portfolio' component={HomePage} />
        <Route exact path='/portfolio' component={PortfolioPage} />
        <Route exact path='/contact' component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
