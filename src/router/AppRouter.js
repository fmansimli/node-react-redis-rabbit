import { BrowserRouter, Route, Switch } from "react-router-dom";

import AppHeader from "../components/common/AppHeader";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ProfilePage from "../pages/account/ProfilePage";

export default function AppRouter(props) {
  return (
    <BrowserRouter>
      <AppHeader />
      <div style={{ padding: 25 }}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/auth/login" component={LoginPage} />
          <Route path="/auth/register" component={RegisterPage} />
          <Route path="/account/profile" component={ProfilePage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
