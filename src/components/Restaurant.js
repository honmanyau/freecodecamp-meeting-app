import React from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';

import RestaurantAvatar from './RestaurantAvatar';
import RestaurantSubtitle from './RestaurantSubtitle';



class Restaurant extends React.Component {
  render() {
    const business = this.props.data;
    const avatarSize = 72;

    return(
      <Card>
        <CardHeader
          style={{height: avatarSize + 32 + 'px'}}
          avatar={<RestaurantAvatar name={business.name} imageUrl={business.image_url} url={business.url} avatarSize={avatarSize} />}
          title={business.name}
          subtitle={
            <RestaurantSubtitle
              subtitle={business.categories.map(category => category.title).join(', ')}
            />
          }
        />
      </Card>
    )
  }
}

// RestaurantSubtitle will take a going prop, which is a ternary function that checks whether or not the user has already indicated a place to go to and returns a boolean accordingly.  It will be used to change the colour of buttons.

export default Restaurant;
