import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as FetchActions from '../actions/fetch';

import TextField from 'material-ui/TextField';



class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: ''
    }
  }

  handleSearchTextFieldKeyPress(event) {
    if (event.key === 'Enter') {
      window.localStorage.setItem('https://freecodecamp-meet.glitch.com', {searchString: this.state.searchString});

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
          inputStyle={{textAlign: 'center'}}
          hintStyle={{textAlign: 'center', width: '100%'}}
          type='text'
          value={this.state.searchString}
          hintText='Enter a city name'
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(FetchActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);
