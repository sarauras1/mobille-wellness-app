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
import Massages from './Massages/Massages';
import Facials from './Facials/Facials';
import HandsFeet from './HandsFeet/HandsFeet';
import Yoga from './Yoga/Yoga';
import Waxing from './Waxing/Waxing';
import Pamper from './Pamper/Pamper';
import Shop from './Shop/Shop';
import Contact from './Contact/Contact';
import MainText from './TextSlice/MainText';



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
        <SideDrawer show={this.state.sideDrawerOpen} />

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

          <Route path ="/shop">
              <Shop />
            </Route>

            <Route path ="/contact">
              <Contact />
            </Route>
        </Switch>
        
        <Switch>
           <Route path ="/massages">
              <Massages />
            </Route>

            <Route path ="/facials">
              <Facials />
            </Route>
            <Route path ="/handsFeet">
              <HandsFeet />
            </Route>
            <Route path ="/pamper">
              <Pamper />
            </Route>
            <Route path ="/yoga">
              <Yoga />
            </Route>
            <Route path ="/waxing">
              <Waxing />
            </Route>
        </Switch>
       <section>
        <MainText/>
       </section>
       
        <footer>
          <Footer/>
        </footer>  
                
      </div>
    );
  }
}





export default App;