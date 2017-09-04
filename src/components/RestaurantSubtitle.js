import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RaisedButton from 'material-ui/RaisedButton';



class RestaurantSubtitle extends React.Component {
  render() {
    const divStyles = {
      display: 'flex',
      flexDirection: 'column'
    }

    const buttonDivStyle = {
      marginTop: '5px'
    }

    return(
      <div style={divStyles}>
        {this.props.subtitle}
        <div style={buttonDivStyle}>
          {
            this.props.auth.user ?
              <RaisedButton
                primary
                label='0 Going'
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
  return
}

export default connect(mapStateToProps, null)(RestaurantSubtitle);
