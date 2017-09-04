import React from 'react';

import TextField from 'material-ui/TextField';



class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: ''
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
          type='text'
          value={this.state.searchString}
          hintText='Enter a city name.'
          onChange={event => this.setState({searchString: event.target.value})}
        />

        <div style={attributionStyles}>
          Search results powdered by <a href="https://www.yelp.com" style={attributionLinkStyles}>YELP</a>!
        </div>
      </div>
    )
  }
}

export default SearchBar;
