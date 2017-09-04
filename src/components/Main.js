import React from 'react';

import { Card, CardText } from 'material-ui/Card';

import SearchBar from './SearchBar';
import Restaurant from './Restaurant';


class Main extends React.Component {
  render() {
    return(
      <Card>
        <CardText>
          <SearchBar />
        </CardText>
        <CardText>
          <Restaurant />
          <Restaurant />
          <Restaurant />
        </CardText>
      </Card>
    )
  }
}

export default Main;
