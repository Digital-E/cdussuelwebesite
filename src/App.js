import React, { Component } from 'react';
import './App.css';

//React Routers
import { Router, Route, Switch } from '../node_modules/react-router';

// Prismic JS
import Prismic from 'prismic-javascript';
import {Link, RichText, Date} from 'prismic-reactjs';

//Grid
import Grid from './Grid.js';

class App extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    doc: null,
    stacks: null,
    layout: null,
    list: null};
}

renderGrids = (i,index) => {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    return (
  <Grid key={index} layout={this.state.layout[index]} rowHeight={61} width={1200} imageList={i.image}/>
  );
} else {
  return (
    <Grid key={index} layout={this.state.layout[index]} rowHeight={61} width={1200} imageList={i.image}/>
  );
}
};

getUrls = (i) => { return(i.data.body[0].value.map((i) => (
  {url: i.image.url,
   orientation: i["image-caption"][0].text}
    )
  )
)}

getParams = (i) => {

  let parameters = i.data.body[0].value.map((i)=> i.caption[0].text.split(","));

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    return(i.data.body[0].value.map((i,index) => ({
      i:parameters[index][0],
      x:0,
      y:0,
      w:parseInt(parameters[index][3]),
      h:parseInt(parameters[index][4]),
      isDraggable:false,
      isResizable:false
    })
  )
  )
} else {
  return(i.data.body[0].value.map((i,index) => ({
    i:parameters[index][0],
    x:parseInt(parameters[index][1]),
    y:parseInt(parameters[index][2]),
    w:parseInt(parameters[index][3]),
    h:parseInt(parameters[index][4]),
    isDraggable:false,
    isResizable:false
  })
)
)
}
}

// Link Resolver
linkResolver(doc) {
  // Define the url depending on the document type
  if (doc.type === 'page') {
    return '/page/' + doc.uid;
  } else if (doc.type === 'blog_post') {
    return '/blog/' + doc.uid;
  }

  // Default to homepage
  return '/';
}


componentWillMount() {
const apiEndpoint = 'https://caroline-dussuel.prismic.io/api/v2';

Prismic.api(apiEndpoint).then(api => {
  api.query('',{ orderings : '[document.last_publication_date desc]' }).then(response => {
    if (response) {
      this.setState({ doc: response.results });
    }

    let stacks = this.state.doc.map((i,index) =>
      ({tags: i.uid.split('-'),
        image: this.getUrls(i)
      })
    );

    this.setState({ stacks: stacks });

    console.log(this.state.stacks);

    let layout = this.state.doc.map((i,index) =>
      (this.getParams(i)
      )
    );

    this.setState({layout: layout});

    console.log(this.state.layout);

    let list = this.state.stacks.map((i, index) => this.renderGrids(i,index));

    this.setState({list: list});

  });
})
}


  render() {

    return (
      <div className="wrapper">
        {this.state.list}
    </div>
    )
  }
}


export default App;
