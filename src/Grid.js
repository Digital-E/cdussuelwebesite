import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';

import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';


class Grid extends React.Component {
  constructor(props) {
  super(props);

  this.state = { active: false,
     originalSize: "",
     originalHeight: "",
     originalWidth: ""};
  this.handleClick = this.handleClick.bind(this);
  this.handleMouseEnter = this.handleMouseEnter.bind(this);
  this.handleMouseLeave = this.handleMouseLeave.bind(this);
}

  handleClick = () => this.setState({ active: !this.state.active });

  handleMouseEnter = (e) => {

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 return
}

    if(e.currentTarget.classList[1] == 'portrait'){
      this.setState({originalHeight: e.currentTarget.style.height});
      this.setState({originalWidth: e.currentTarget.style.width});
      e.currentTarget.style.height = '600px';
      e.currentTarget.style.width = '400px';
    } else {
      this.setState({originalHeight: e.currentTarget.style.height});
      this.setState({originalWidth: e.currentTarget.style.width});
      this.setState({originalMaxWidth: e.currentTarget.children[0].style.maxWidth});
      e.currentTarget.style.height = '445px';
      e.currentTarget.style.width = '685px';
      e.currentTarget.children[0].style.maxWidth = '685px';
    }
  };

  handleMouseLeave = (e) => {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 return
}
    e.currentTarget.style.height = `${this.state.originalHeight}`;
    e.currentTarget.style.width = `${this.state.originalWidth}`;
    e.currentTarget.children[0].style.maxWidth = `${this.state.originalMaxWidth}`;
  }

  renderDiv = (i, index) => {
   return (
       <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}  key={ i.i } onClick={ this.handleClick } className={ this.state.active ? this.props.imageList[index].orientation : `${this.props.imageList[index].orientation} stack` }><img className="image" alt="" src={this.props.imageList[index].url}/></div>
   );
 }

  render() {

    return (
      <GridLayout orientation={this.props.orientation} className={ this.state.active ? 'layout expanded' : 'layout notexpanded' } layout={this.props.layout} cols={12} rowHeight={this.props.rowHeight} width={this.props.width}>
        {this.props.layout.map((i, index) => this.renderDiv(i, index))}
      </GridLayout>
    )
  }
}

export default Grid;
