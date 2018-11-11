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
  return (
    <Grid key={index} layout={this.state.layout} rowHeight={60} imageList={i.image}/>
  );
};

getUrls = (i) => { return(i.data.body[0].value.map((i) => (
  {url: i.image.url,
   orientation: i["image-caption"][0].text}
    )
  )
)}

getParams = (i) => {

  let parameters = i.data.body[0].value.map((i)=> i.caption[0].text.split(","))

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
)}

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
  api.query('').then(response => {
    if (response) {
      this.setState({ doc: response.results });
    }

    let stacks = this.state.doc.map((i,index) =>
      ({tags: i.uid.split('-'),
        image: this.getUrls(i)
      })
    );

    this.setState({ stacks: stacks });

    console.log(stacks);

    let layout = this.state.doc.map((i,index) =>
      (this.getParams(i)
      )
    );

    this.setState({layout: layout[0]});

    let list = this.state.stacks.map((i, index) => this.renderGrids(i,index));

    this.setState({list: list});

  });
})
}


  render() {

    // var layout1 = [
    //   {i: 'a', x: 5, y: 0, w: 4, h: 4, isDraggable: false, isResizable: false},
    //   {i: 'b', x: 0, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false},
    //   {i: 'c', x: 5, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false},
    //   {i: 'd', x: 0, y: 0, w: 5, h: 5, isDraggable: false, isResizable: false},
    //   {i: 'e', x: 5, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false},
    //   {i: 'f', x: 0, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false},
    //   {i: 'g', x: 0, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false}
    // ];

    // var layout2 = [
    //   {i: 'a', x: 0, y: 0, w: 6, h: 6, isDraggable: false, isResizable: false},
    //   {i: 'b', x: 7, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false},
    //   {i: 'c', x: 5, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false},
    //   {i: 'd', x: 0, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false},
    //   {i: 'e', x: 5, y: 0, w: 5, h: 5, isDraggable: false, isResizable: false},
    //   {i: 'f', x: 0, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false},
    //   {i: 'g', x: 0, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false}
    // ];
    //
    // var layout3 = [
    //   {i: 'a', x: 0, y: 0, w: 3, h: 6, isDraggable: false, isResizable: false},
    //   {i: 'b', x: 7, y: 0, w: 3, h: 6, isDraggable: false, isResizable: false},
    //   {i: 'c', x: 5, y: 0, w: 5, h: 5, isDraggable: false, isResizable: false},
    //   {i: 'd', x: 0, y: 0, w: 3, h: 6, isDraggable: false, isResizable: false},
    //   {i: 'e', x: 5, y: 0, w: 5, h: 5, isDraggable: false, isResizable: false},
    //   {i: 'f', x: 0, y: 0, w: 3, h: 6, isDraggable: false, isResizable: false},
    //   {i: 'g', x: 0, y: 0, w: 3, h: 6, isDraggable: false, isResizable: false}
    // ];

    //
    // var imageListLandscape = [
    //   {img: 'https://x68wxo23bm-flywheel.netdna-ssl.com/wp-content/uploads/2014/08/martinparr9.jpg',
    //    orientation:'landscape'},
    //   {img: 'https://static.photocrowd.com/upl/dY/cms.v1VmlKRxSVk_Tde3Dsjg-collection_cover.jpeg',
    //    orientation:'landscape'},
    //   {img: 'https://media0.faz.net/ppmedia/aktuell/399746831/1.5255848/article_multimedia_overview/mit-guten-freundinnen-kann-man.jpg',
    //    orientation:'landscape'},
    //   {img: 'https://x68wxo23bm-flywheel.netdna-ssl.com/wp-content/uploads/2014/08/martinparr9.jpg',
    //    orientation:'landscape'},
    //   {img: 'https://x68wxo23bm-flywheel.netdna-ssl.com/wp-content/uploads/2014/08/martinparr9.jpg',
    //    orientation:'landscape'},
    //   {img: 'https://x68wxo23bm-flywheel.netdna-ssl.com/wp-content/uploads/2014/08/martinparr9.jpg',
    //    orientation:'landscape'},
    //   {img: 'https://x68wxo23bm-flywheel.netdna-ssl.com/wp-content/uploads/2014/08/martinparr9.jpg',
    //    orientation:'landscape'}
    // ];
    //
    // var imageListPortrait = [
    //   {img: 'http://79hbm1979mg58bnh1fp50y1bry.wpengine.netdna-cdn.com/wp-content/uploads/2018/02/Elliott-786x1024.jpg',
    //   orientation:'portrait'},
    //   {img: 'http://79hbm1979mg58bnh1fp50y1bry.wpengine.netdna-cdn.com/wp-content/uploads/2018/02/Elliott-786x1024.jpg',
    //   orientation:'portrait'},
    //   {img: 'https://x68wxo23bm-flywheel.netdna-ssl.com/wp-content/uploads/2014/08/martinparr9.jpg',
    //   orientation:'landscape'},
    //   {img: 'http://79hbm1979mg58bnh1fp50y1bry.wpengine.netdna-cdn.com/wp-content/uploads/2018/02/Elliott-786x1024.jpg',
    //   orientation:'portrait'},
    //   {img: 'https://x68wxo23bm-flywheel.netdna-ssl.com/wp-content/uploads/2014/08/martinparr9.jpg',
    //   orientation:'landscape'},
    //   {img: 'http://79hbm1979mg58bnh1fp50y1bry.wpengine.netdna-cdn.com/wp-content/uploads/2018/02/Elliott-786x1024.jpg',
    //   orientation:'portrait'},
    //   {img: 'http://79hbm1979mg58bnh1fp50y1bry.wpengine.netdna-cdn.com/wp-content/uploads/2018/02/Elliott-786x1024.jpg',
    //   orientation:'portrait'},
    // ];


    return (
      <div className="wrapper">
        {this.state.list}
    </div>
    )
  }
}


export default App;
