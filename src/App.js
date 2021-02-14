import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/footer/Footer";
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

function App() {
  return (
    <WidgetState>
      <Router>
        <div className="App">
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/widget" component={Widget} />
              <Route exact path="/download/:title" component={Download} />
              <Route exact path="/download/wait/:id" component={DownloadWait} />
              <Route
                exact
                path="/softwares/:category"
                component={DownloadList}
              />
              <Route
                exact
                path="/advertise-with-us"
                component={AdvertiseWithUs}
              />
              <Route exact path="/tech-news" component={TechNews} />
              <Route exact path="/tech-news/:newsitle" component={LatestNews} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    </WidgetState>
  );
}

export default App;
