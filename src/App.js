import React from 'react';
import {Switch, Route} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import Gallery from './Gallery/Gallery';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import { motion } from "framer-motion";
import Footer from './Footer/Footer';
import About from './About/About';

class App extends React.Component  {
    
  
 state = {
  sideDrawerOpen: false
 
};

drawerToggleClickHandler = () => {
  this.setState((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen};
  });
};

backdropClickHandler = () => {
  this.setState({sideDrawerOpen: false});
};

  

  render() {
    
  let backdrop;

  if (this.state.sideDrawerOpen) {
    backdrop = <Backdrop click={this.backdropClickHandler} />
  }  

    return (
      <div style={{height: '100%'}}>
    
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        {backdrop}
        <SideDrawer show={this.state.sideDrawerOpen } />

        <Switch>
          <Route exact path="/" >
            {backdrop}

            <banner style={{marginTop: '100px'}}>
              <Banner/>
            </banner>
            <section style={{marginTop: '-150px'}}>
            <motion.div
                initial={{ opacity: 0,
                y: 100}}
                animate={{ opacity: 1,
                y: 0}}
                transition={{duration: 1}}
              >  
              <Services/>
              </motion.div>
              </section>
            </Route>
           
            <Route  path="/services" >
              <motion.div
                initial={{ opacity: 0,
                y: 100}}
                animate={{ opacity: 1,
                y: 0}}
                transition={{duration: 1}}
              >  
              <Services/>
              </motion.div>
              </Route>
             
              

              <Route  path="/about" >
              <About />
              </Route>

          <Route path="/gallery">
            <Gallery />
          </Route>

          {/* If you want more separate pages, such as the Blog and Contact, render their components here each wrapped in their own <Route> component.
          e.g.
            <Route path ="/blog">
              <Blog />
            </Route>

            Then in your Navbar and SideDrawer components, render a NavLink or Link component like so <Link to="/blog>.

            --------------------------------------------------------------------------------------------------------------------------------------------

            If instead you want them to be sections of the same (home) page like Services and About, then add an id attribute to their surrounding <div> within the component.
            e.g.

            ... inside Blog.js ...
            <div id="blog">... your html... </div>

            and then in Navbar and SideDrawer components, render a NavHashLink or HashLink component like so <HashLink to="/#blog">
          */}
        </Switch>
     
        <footer>
          <Footer/>
        </footer>          
      </div>
    );
  }
}





export default App;