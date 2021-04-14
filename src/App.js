import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Banner from "./components/Banner/Banner";
import Services from "./Services/Services";
import Footer from "./components/Footer/Footer";
import About from "./About/About";
import Whats from "./components/Whatsapp/Whatsapp";
import routes from "./pages/index";
import Backdrop from "./components/Backdrop/Backdrop";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
});
class App extends React.Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  onClickHandle() {
    console.log("onClickHandle");
    this.setState({ open: false });
  }
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div style={{ height: "100%" }}>
        {backdrop}
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />

        <SideDrawer
          click={this.backdropClickHandler}
          show={this.state.sideDrawerOpen}
        />

        <Switch>
          <Route exact path="/">
            <section style={{ marginTop: "100px" }}>
              <Banner />
            </section>

            <section style={{ marginTop: "-150px" }}>
              <div>
                <Services />
              </div>
            </section>
            <div
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <About />
            </div>
          </Route>

       
        </Switch>

        <section>
          <Switch>
            {routes.map((route, idx) => (
              <Route
                exact
                path={route.path}
                component={route.component}
                key={idx}
              ></Route>
            ))}
          </Switch>
        </section>
      
        <footer id="footer">
          <Whats />
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
