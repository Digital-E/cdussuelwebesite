import React, { Component } from 'react';
import './App.css';

//React Routers
import { Router, Route, Switch } from '../node_modules/react-router';

// Prismic JS
import Prismic from 'prismic-javascript';
import {Link, RichText, Date} from 'prismic-reactjs';

//Grid
import Grid from './Grid.js';

//menu
import Filter from './Filter.js'

class App extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    doc: null,
    stacks: null,
    layout: null,
    list: null,
    loading: true
  };

}

renderGrids = (i,index) => {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    return (
  <Grid key={index} layout={this.state.layout[index]} rowHeight={60} width={1200} imageList={i.image}/>
  );
} else {
  return (
    <Grid key={index} layout={this.state.layout[index]} rowHeight={60} width={1200} imageList={i.image}/>
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
      x:1,
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

renderAll = () => {
  let stacks = this.state.doc.map((i,index) =>
    ({tags: i.uid.split('-'),
      image: this.getUrls(i)
    })
  );

  this.setState({ stacks: stacks });


  let layout = this.state.doc.map((i,index) =>
    this.getParams(i)
  );

  this.setState({layout: layout});

  let list = this.state.stacks.map((i, index) => this.renderGrids(i,index));

  this.setState({list: list});

  console.log(this.state.list);
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

    this.renderAll();

  });
})
}

handleListClick = (e) => {
  const apiEndpoint = 'https://caroline-dussuel.prismic.io/api/v2';

  if(e.target.innerHTML == "Photography") {

    Prismic.api(apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at("document.tags", ['photography'])).then(response => {
        if (response) {
          this.setState({ doc: response.results });
        }

        this.renderAll();

      });
    })

  } else if (e.target.innerHTML == "Fashiondesign") {

    Prismic.api(apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at("document.tags", ['fashiondesign'])).then(response => {
        if (response) {
          this.setState({ doc: response.results });
        }

        this.renderAll();

      });
    })

  } else if (e.target.innerHTML == "Styling") {

    Prismic.api(apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at("document.tags", ['styling'])).then(response => {
        if (response) {
          this.setState({ doc: response.results });
        }

        this.renderAll();

      });
    })
  } else {

    Prismic.api(apiEndpoint).then(api => {
      api.query('',{ orderings : '[document.last_publication_date desc]' }).then(response => {
        if (response) {
          this.setState({ doc: response.results });
        }

        this.renderAll();

      });
    })
  };
};


  render() {


    return (
      <>
      <Filter handleListClick={this.handleListClick}/>
      <div className="wrapper">
        {this.state.list}
    </div>
      </>
    )
  }
}


export default App;
