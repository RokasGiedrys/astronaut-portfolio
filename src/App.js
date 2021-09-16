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
        <Route exact path='/myportfolio'>
          <Redirect to='/home' />
        </Route>
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/projects' component={PortfolioPage} />
        <Route exact path='/contact' component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
