import React, { Component } from 'react';

import info from './info.svg';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {


    return(
      <>
      <div onClick={this.props.handleClick} class="about-button"><img src={info}/></div>
      <div class={this.props.class ? 'about-text' : 'about-text hidden-about-text'}>
      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum <br/>
      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum <br/>
      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum <br/>
      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum <br/>
      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum <br/>
      </div>
      </>
    )
  }
}

export default About;
