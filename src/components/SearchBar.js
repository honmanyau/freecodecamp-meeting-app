import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import firebase from '../firebase';
import * as FetchActions from '../actions/fetch';

import TextField from 'material-ui/TextField';
import yelpLogo from '../images/Yelp_trademark_RGB.png';



class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.storageKey = 'customLocalStorage@https://freecodecamp-meet.glitch.me';

    this.state = {
      searchString: ''
    }
  }

  componentDidMount() {
    firebase.auth().getRedirectResult().then(result => {
      if (result.user) {
        const searchString = JSON.parse(window.localStorage.getItem(this.storageKey)).searchString;

        this.setState({
          searchString
        })

        this.props.actions.fetchRestaurants(searchString);
      }
    });
  }

  handleSearchTextFieldKeyPress(event) {
    if (event.key === 'Enter') {
      window.localStorage.setItem(this.storageKey, JSON.stringify({searchString: this.state.searchString}));

      this.props.actions.fetchRestaurants(this.state.searchString);
    }
  }

  render() {
    const textFieldStyles = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    };
    const attributionStyles = {
      display: 'flex',
      alignItems: 'center',
      fontSize: '9pt',
      color: '#777'

    }
    const attributionLogoStyles = {
      height: '30px'
    }

    return(
      <div style={textFieldStyles}>
        <TextField
          disabled={this.props.auth.inProgress ? true : false}
          inputStyle={{textAlign: 'center'}}
          hintStyle={{textAlign: 'center', width: '100%'}}
          errorStyle={{textAlign: 'center'}}
          type='text'
          value={this.state.searchString}
          hintText={this.props.auth.inProgress ? 'Retrieving results' : 'Enter a city name'}
          errorText={this.props.fetch.data ? (this.props.fetch.data.error ? 'Please enter a valid city name.' : null) : null}
          onChange={event => this.setState({searchString: event.target.value})}
          onKeyPress={event => this.handleSearchTextFieldKeyPress(event)}
        />

        <div style={attributionStyles}>
          Search results powdered by <a href="https://www.yelp.com"><img style={attributionLogoStyles} alt="Yelp!" src={yelpLogo} /></a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    fetch: state.fetch
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(FetchActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
