import React from 'react';
import { connect } from 'react-redux';

import { Card, CardText, CardTitle } from 'material-ui/Card';

import SearchBar from './SearchBar';
import Restaurant from './Restaurant';


class Main extends React.Component {
  render() {
    const userData = this.props.fetch.userData;
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

        {
          userData ?
            <div>
              <CardTitle
                titleStyle={{marginBottom: '10px'}}
                title="My plan for tonight:"
                children={<Restaurant data={{...userData.data, id: userData.rid}}/>}
              />
            </div>
            :
            null
        }

        {
          businesses ?
            <CardTitle
              titleStyle={{marginBottom: '10px'}}
              title="Restaurants near you:"
              children={businesses}
            />
            :
            null
        }
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
