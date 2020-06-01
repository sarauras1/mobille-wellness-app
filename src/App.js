import React from 'react';
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
   
        <SideDrawer show={this.state.sideDrawerOpen } />
            {backdrop}
       <banner style={{marginTop: '50px'}}>
        <Banner/>
       </banner>

       <main style={{marginTop: '-100px'}}>
       <motion.div
       initial={{ opacity: 0,
           y: 100}}
         animate={{ opacity: 1,
         y: 0}}
       transition={{duration: 1}}
        >  
         <Services/>
         </motion.div>

         <About/>

        <Gallery/>
       </main>

      <footer>
        <Footer/>
      </footer>

  
          
   </div>
    );
  }
}





export default App;