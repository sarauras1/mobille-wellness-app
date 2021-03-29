import React from "react";
import { withRouter } from "react-router-dom";


// This component ensures that when a new page is loaded the user is taken to the top of the page. e.g. when clicking on Home or Gallery.
// The code is taken from the React Router documentation here:
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md
// I used the class-based component example rather than the functional component, as I didn't see you using hooks anywhere else in the app.

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}
  
  export default withRouter(ScrollToTop); // withRouter is a function built into React Router. 