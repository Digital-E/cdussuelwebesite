import React, { Component } from 'react';

// Prismic JS
import Prismic from 'prismic-javascript';
import {Link, RichText, Date} from 'prismic-reactjs';

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    const listItems = this.props.filterItems.map((i) => <div key={i} onClick={this.props.handleListClick}>{i}</div>);

    return(
      <div>{listItems}</div>
    )
  }
}

export default Filter;
