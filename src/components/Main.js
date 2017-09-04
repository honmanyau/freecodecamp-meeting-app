import React from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';

import SearchBar from './SearchBar';
import Restaurant from './Restaurant';


class Main extends React.Component {

  const

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
