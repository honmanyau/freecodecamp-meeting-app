import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SubscribeActions from '../actions/subscribe';

import RaisedButton from 'material-ui/RaisedButton';



class RestaurantSubtitle extends React.Component {
  render() {
    const divStyles = {
      display: 'flex',
      flexDirection: 'column'
    };

    const buttonDivStyle = {
      marginTop: '5px'
    };

    return(
      <div style={divStyles}>
        {this.props.subtitle}
        <div style={buttonDivStyle}>
          {
            this.props.auth.user ?
              <RaisedButton
                primary
                label='0 Going'
                onClick={() => this.props.actions.submitSubscription(this.props.rid, this.props.auth.user.uid, true)}
              />
              :
              null
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(SubscribeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSubtitle);
