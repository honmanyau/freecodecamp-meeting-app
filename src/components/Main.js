import React from 'react';
import { connect } from 'react-redux';

import { Card, CardText } from 'material-ui/Card';

import SearchBar from './SearchBar';
import Restaurant from './Restaurant';


class Main extends React.Component {
  render() {
    let businesses = null;

    if (!this.props.fetch.inProgress && this.props.fetch.data) {
      businesses = this.props.fetch.data.businesses.map((business, index) => {
        return <Restaurant key={index} data={business} />
      });
    }

    return(
      <Card>
        <CardText>
          <SearchBar />
        </CardText>
        <CardText>
          {businesses}
        </CardText>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    fetch: state.fetch
  }
}

export default connect(mapStateToProps, null)(Main);
