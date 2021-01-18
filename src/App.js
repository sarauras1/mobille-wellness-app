import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Gallery from "./Gallery/Gallery";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import { motion } from "framer-motion";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Massages from "./Massages/Massages";
import Facials from "./Facials/Facials";
import HandsFeet from "./HandsFeet/HandsFeet";
import Yoga from "./Yoga/Yoga";
import Waxing from "./Waxing/Waxing";
import Pamper from "./Pamper/Pamper";
import Contact from "./Contact/Contact";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import Blog from "./Blog/Blog";
import Whats from "./Whatsapp/Whatsapp";
import Backdrop from "./Backdrop/Backdrop";
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
  onClickHandle () {
        console.log('onClickHandle');
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
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Services />
              </motion.div>
            </section>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <About />
            </div>
          </Route>

          <Route path="/services">
            <motion.div
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0, onScroll: true }}
              transition={{ duration: 1 }}
            >
              <Services />
            </motion.div>
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/gallery">
            <Gallery />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>

        <section>
          <Switch>
            <Route path="/massages">
              <Massages />
            </Route>
            <Route path="/facials">
              <Facials />
            </Route>
            <Route path="/handsFeet">
              <HandsFeet />
            </Route>
            <Route path="/pamper">
              <Pamper />
            </Route>
            <Route path="/yoga">
              <Yoga />
            </Route>
            <Route path="/waxing">
              <Waxing />
            </Route>
            <Route path="/privacy">
              <PrivacyPolicy />
            </Route>
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
