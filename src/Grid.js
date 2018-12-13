import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';

import LazyLoad from 'react-lazyload';

import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

import Fade from 'react-reveal/Fade';

class Grid extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
     active: false,
     originalSize: "",
     originalHeight: "",
     originalWidth: "",
     numberOfImagesLoaded:[{loaded: "ok"}],
     loaded: false,
   };

  this.handleClick = this.handleClick.bind(this);
  this.handleMouseEnter = this.handleMouseEnter.bind(this);
  this.handleMouseLeave = this.handleMouseLeave.bind(this);

}

  handleClick = () => this.setState({ active: !this.state.active });

  handleMouseEnter = (e) => {

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 return
}

    if(e.currentTarget.classList[1] === 'portrait'){
      this.setState({originalTransform: e.currentTarget.style.transform});
      e.currentTarget.style.transform = `${e.currentTarget.style.transform} scale(2)`;
    } else {
      this.setState({originalTransform: e.currentTarget.style.transform});
      e.currentTarget.style.transform = `${e.currentTarget.style.transform} scale(2)`;
    }
  };

  handleMouseLeave = (e) => {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 return
}
    e.currentTarget.style.transform = `${this.state.originalTransform}`;
  }

loadedIndividual() {
  // Create a new ID and use
  // a random number as the value
  return {
    loaded: "ok"
  };
}

  loadCount = () => {
    let countImagesToLoad = this.props.imageList.length;
    this.setState({countImagesToLoad: this.props.imageList.length });
    this.setState({numberOfImagesLoaded: [...this.state.numberOfImagesLoaded, this.loadedIndividual()]});
    console.log(countImagesToLoad);
    console.log(this.state.numberOfImagesLoaded);
    if(this.state.countImagesToLoad == this.state.numberOfImagesLoaded.length)
    this.setState({
      loaded: true
    });
    console.log(this.state.loaded);
  }


  renderDiv = (i, index) => {
      return (
    <div id={this.state.loaded ? 'show' : 'hide'} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}  key={ i.i } onClick={ this.handleClick } className={ this.state.active ? this.props.imageList[index].orientation : `${this.props.imageList[index].orientation} stack` }>
      <img onLoad={this.loadCount} className="image" alt="" src={this.props.imageList[index].url}/>
    </div>
  )
 }


  render() {
      return (
        <LazyLoad height={200}>
        <Fade duration={2000}>
        <GridLayout orientation={this.props.orientation} className={ this.state.active ? 'layout expanded' : 'layout notexpanded' } layout={this.props.layout} cols={12} rowHeight={this.props.rowHeight} width={this.props.width}>
          {this.props.layout.map((i, index) => this.renderDiv(i, index))}
        </GridLayout>
        </Fade>
        </LazyLoad>
      )
  }
}

export default Grid;
