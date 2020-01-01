/** @format */

import React, { Component } from 'react';

class SearchResult extends Component {
  renderResult() {
    if (!this.props.data.recipes) {
      return <div></div>;
    }
    return this.props.data.recipes.map(
      ({ recipe_id, title, image_url, publisher, social_rank }) => {
        return (
          <div className='card' key={recipe_id}>
            <div className='image'>
              <img
                style={{ wicth: 'auto', height: '250px' }}
                src={image_url}
                alt={title}
              />
            </div>
            <div className='content'>
              <span className='header'>
                {title.length < 20 ? title : title.substring(0, 25)}
              </span>
              {/* <span className="header">{ title }</span> */}
              <div className='description'>{`Publisher is ${publisher}`}</div>
            </div>
            <div className='extra content'>
              <i className='user icon'></i>
              {`Social Rank ${social_rank}`}
            </div>
          </div>
        );
      }
    );
  }
  render() {
    // console.log('Search result :',this.props.data.recipes);
    return (
      <div className='ui cards' style={{ marginTop: '10px' }}>
        {this.renderResult()}
      </div>
    );
  }
}
export default SearchResult;
