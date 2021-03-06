import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// IMPORT APP CSS
import "./App.css";

// IMPORT ADMIN CSS
import "./admin/App.css";

// IMPORT APP COMPONENTS
import Home from "./components/pages/Home";
import Widget from "./components/pages/Widget";
import Download from "./components/pages/Download";
import WidgetState from "./context/fileinstant/widget/WidgetState";
import DownloadWait from "./components/pages/DownloadWait";
import About from "./components/pages/About";
import DownloadList from "./components/pages/DownloadList";
import Contact from "./components/pages/Contact";
import AdvertiseWithUs from "./components/pages/AdvertiseWithUs";
import TechNews from "./components/pages/TechNews";
import LatestNews from "./components/pages/LatestNews";

// IMPORT ADMIN PANEL COMPONENTS
import Dashboard from "./admin/pages/Dashboard";
import HomeManagement from "./admin/pages/HomeManagement";
import SoftwaresCategories from "./admin/pages/SoftwaresCategories";
import SoftwaresManagement from "./admin/pages/SoftwaresManagement";
import InfoPages from "./admin/pages/InfoPages";
import DetailStatics from "./admin/pages/DetailStatics";
import StaffManagement from "./admin/pages/StaffManagement";
import AlertsAndNotifications from "./admin/pages/AlertsAndNotifications";

function App() {
  return (
    <WidgetState>
      <Router>
        <div className="App">
          <Switch>
            {/* APP ROUTES  */}
            <Route exact path="/" component={Home} />
            <Route exact path="/widget" component={Widget} />
            <Route exact path="/download/:title" component={Download} />
            <Route exact path="/download/wait/:id" component={DownloadWait} />
            <Route exact path="/softwares/:category" component={DownloadList} />
            <Route
              exact
              path="/advertise-with-us"
              component={AdvertiseWithUs}
            />
            <Route exact path="/tech-news" component={TechNews} />
            <Route exact path="/tech-news/:newsitle" component={LatestNews} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />

            {/* ADMIN PANEL ROUTES */}
            <Route
              exact
              path="/admin"
              component={() => (window.location.href = "/admin/dashboard")}
            />
            <Route exact path="/admin/dashboard" component={Dashboard} />
            <Route
              exact
              path="/admin/home-management"
              component={HomeManagement}
            />
            <Route
              exact
              path="/admin/softwares-categories"
              component={SoftwaresCategories}
            />
            <Route
              exact
              path="/admin/softwares-management"
              component={SoftwaresManagement}
            />
            <Route exact path="/admin/info-pages" component={InfoPages} />
            <Route
              exact
              path="/admin/detail-statics"
              component={DetailStatics}
            />
            <Route
              exact
              path="/admin/staff-management"
              component={StaffManagement}
            />
            <Route
              exact
              path="/admin/alerts-and-notifications"
              component={AlertsAndNotifications}
            />
          </Switch>
        </div>
      </Router>
    </WidgetState>
  );
}

export default App;
