import React from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';



class Restaurant extends React.Component {
  render() {
    return(
      <Card>
        <CardHeader
          title="business.$item.name"
          subtitle="business.$item.categories.title"
        />
      </Card>
    )
  }
}

export default Restaurant;
