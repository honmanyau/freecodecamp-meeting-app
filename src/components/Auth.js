import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';



class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpened: false
    }
  }

  render() {
    return(
      <div>
        <AppBar
          title="Meet"
          onTitleTouchTap={() => this.props.history.push('/')}
          onLeftIconButtonTouchTap={() => this.setState({drawerOpened: !this.state.drawerOpened})}
        />
        <Drawer
          docked={false}
          width={220}
          open={this.state.drawerOpened}
          onRequestChange={(drawerState) => this.setState({drawerOpened: drawerState})}
        >
          <MenuItem onClick={() => this.props.history.push('/')}>Home</MenuItem>
          <MenuItem onClick={() => window.open('https://github.com/honmanyau/freecodecamp-meeting-app')}>GitHub Repository</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default withRouter(connect(null, null)(Auth));
