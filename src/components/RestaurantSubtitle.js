import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SubscribeActions from '../actions/subscribe';

import RaisedButton from 'material-ui/RaisedButton';

import firebase from '../firebase';



class RestaurantSubtitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      going: '--'
    }
  }

  componentDidMount() {
    firebase.database().ref('/meeting-app/restaurants/').child(this.props.rid).on('value', snapshot => {
      if (snapshot.val()) {
        console.log(snapshot.val())
        this.setState({
          going: snapshot.val().count
        });
      }
      else if (!snapshot.val()){
        this.setState({
          going: 0
        });
      }
    });
  }

  render() {
    console.log(this.state.going);
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
                label={this.state.going + ' Going'}
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
