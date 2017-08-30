import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';

import SideList from './SideList'

class Header extends Component {
  constructor(){
    super();
    this.state ={
      open: {
        left: false
          }
      }
    }
    toggleDrawer = (side, open) => {
    const drawerState = {};
    drawerState[side] = open;
    this.setState({ open: drawerState });
  };
    handleDrawerOpen = () => this.toggleDrawer('left', true)
    handleDrawerClose = () => this.toggleDrawer('left', false)

  render() {
    return (
      <div>
        <AppBar position="static">
              <Toolbar>
                  <IconButton color="contrast" aria-label="Menu">
                    <MenuIcon onClick={ this.handleDrawerOpen} />
                  </IconButton>
                  <Typography type="title" color="inherit" className='btn-login-top'>
                    Title
                  </Typography>
                  <Button color="contrast">Login</Button>
              </Toolbar>
        </AppBar>
        <Drawer
          open={this.state.open.left}
          onRequestClose={this.handleLeftClose}
          onClick={this.handleDrawerClose}
        >
          <SideList/>
        </Drawer>
      </div>
    );
  }
}

export default Header;
