import React from 'react';



class RestaurantAvatar extends React.Component {
  render() {
    const avatarSize = this.props.avatarSize;
    const clippingDivStyles = {
      float: 'left',
      height: avatarSize + 'px',
      width: avatarSize + 'px',
      boxSizing: 'border-box',
      marginRight: '10px',
      overflow: 'hidden',
      borderRadius: '10%',
      boxShadow: '2px 2px 2px #555'
    }
    const imageStyles = {
      position: 'relative',
      top: (avatarSize / 2) + 'px',
      left: (avatarSize / 2) + 'px',
      transform: 'translate(-50%, -50%)',
      height: avatarSize + 'px',
      minWidth: avatarSize + 'px'
    }

    return(
      <div style={clippingDivStyles}>
        <a href={this.props.url} target='_blank'>
          <img style={imageStyles} alt={this.props.name} src={this.props.imageUrl} />
        </a>
      </div>
    )
  }
}

export default RestaurantAvatar;
