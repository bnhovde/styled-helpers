import React from "react";
import { Block, Drawer } from '../styled-helpers.js';

class DrawerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer(e) {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleDrawer}>Toggle drawer</button>
        <Drawer open={this.state.drawerOpen}>
          <p>Test</p>
        </Drawer>
      </div>
    );
  }
}

export default DrawerExample;
