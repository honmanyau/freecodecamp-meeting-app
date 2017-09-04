import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as AuthActions from '../actions/auth';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
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
          iconElementRight={
            <FlatButton
              disabled={this.props.auth.inProgress ? true : false}
              label={this.props.auth.user ? 'Sign out' : (this.props.auth.inProgress ? 'Signing in' : 'Sign in')}
            />
          }
          onTitleTouchTap={() => this.props.history.push('/')}
          onLeftIconButtonTouchTap={() => this.setState({drawerOpened: !this.state.drawerOpened})}
          onRightIconButtonTouchTap={() => this.props.auth.user ? this.props.actions.signOut() : this.props.actions.twitterSignIn()}
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

const mapStateToprops = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(AuthActions, dispatch)
  }
}

export default withRouter(connect(mapStateToprops, mapDispatchToProps)(Auth));
