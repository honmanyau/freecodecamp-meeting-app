import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import firebase from '../firebase';
import * as FetchActions from '../actions/fetch';

import TextField from 'material-ui/TextField';



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
      fontSize: '9pt',
      color: '#777'
    }

    const attributionLinkStyles = {
      color: '#555'
    }

    return(
      <div style={textFieldStyles}>
        <TextField
          disabled={this.props.auth.inProgress ? true : false}
          inputStyle={{textAlign: 'center'}}
          hintStyle={{textAlign: 'center', width: '100%'}}
          type='text'
          value={this.state.searchString}
          hintText={this.props.auth.inProgress ? 'Retrieving results' : 'Enter a city name'}
          onChange={event => this.setState({searchString: event.target.value})}
          onKeyPress={event => this.handleSearchTextFieldKeyPress(event)}
        />

        <div style={attributionStyles}>
          Search results powdered by <a style={attributionLinkStyles} href="https://www.yelp.com">YELP</a>!
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
