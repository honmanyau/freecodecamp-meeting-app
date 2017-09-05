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
        this.setState({
          going: snapshot.val().count
        });
      }
      else if (!snapshot.val()){
        this.setState({
          going: 0
        });
      }

      this.props.actions.submitting(false);
    });
  }

  render() {
    const divStyles = {
      display: 'flex',
      flexDirection: 'column'
    };
    const buttonDivStyle = {
      marginTop: '5px'
    };

    const subscribing = this.props.subscribe.inProgress;

    return(
      <div style={divStyles}>
        {this.props.subtitle}
        <div style={buttonDivStyle}>
          {
            this.props.auth.user ?
              <div>
                <RaisedButton
                  primary={!subscribing}
                  disabled={subscribing}
                  label={subscribing ? 'UPDATING' : this.state.going + ' Going'}
                  onClick={() => this.props.actions.submitSubscription(this.props.rid, this.props.auth.user.uid, true)}
                />
                {this.props.fetch.userData.rid === this.props.rid ? ' (I\'m going!)' : null}
              </div>
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
    auth: state.auth,
    fetch: state.fetch,
    subscribe: state.subscribe
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(SubscribeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSubtitle);
