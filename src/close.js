import React from "react";

class Close extends React.Components {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location && this.state.sideDrawerOpen) {
      this.setState({ sideDrawerOpen: false });
    }
  }
  render() {
    return this.props.children;
  }
}

export default Close;
      