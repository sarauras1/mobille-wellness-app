import React from 'react'

class ToggleLinkBackdrop extends React.Component {
    
  constructor() {
    super();
    
    this.state = {
      showSideDrawer: false,
    };
    
    this.closeSideDrawer = this.closeSideDrawer.bind(this);
    this.closeSideDrawer(event) {
    
      if (!this.ToggleLinkBackdrop.contains(event.target)) {
      
        this.setState({ showSideDrawer: false }, () => {
          document.removeEventListener('click', this.closeSideDrawer);
        });
      
      }
    }
    render() {
      return (
    
        
        <div onClick={this.showSideDrawer}></div>
      );
  }
}
export default ToggleLinkBackdrop;
