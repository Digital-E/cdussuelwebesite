import React, { Component } from 'react';
import './App.css';

//modules
import { Router, Route, Switch } from '../node_modules/react-router';

import Grid from './Grid.js';

class App extends React.Component {
  constructor(props) {
  super(props);

}



  render() {

    var layout1 = [
      {i: 'a', x: 5, y: 0, w: 4, h: 4, isDraggable: false, isResizable: false},
      {i: 'b', x: 0, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false},
      {i: 'c', x: 5, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false},
      {i: 'd', x: 0, y: 0, w: 5, h: 5, isDraggable: false, isResizable: false},
      {i: 'e', x: 5, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false},
      {i: 'f', x: 0, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false},
      {i: 'g', x: 0, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false}
    ];

    var layout2 = [
      {i: 'a', x: 0, y: 0, w: 6, h: 6, isDraggable: false, isResizable: false},
      {i: 'b', x: 7, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false},
      {i: 'c', x: 5, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false},
      {i: 'd', x: 0, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false},
      {i: 'e', x: 5, y: 0, w: 5, h: 5, isDraggable: false, isResizable: false},
      {i: 'f', x: 0, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false},
      {i: 'g', x: 0, y: 0, w: 3, h: 3, isDraggable: false, isResizable: false}
    ];

    var layout3 = [
      {i: 'a', x: 0, y: 0, w: 3, h: 6, isDraggable: false, isResizable: false},
      {i: 'b', x: 7, y: 0, w: 3, h: 6, isDraggable: false, isResizable: false},
      {i: 'c', x: 5, y: 0, w: 5, h: 5, isDraggable: false, isResizable: false},
      {i: 'd', x: 0, y: 0, w: 3, h: 6, isDraggable: false, isResizable: false},
      {i: 'e', x: 5, y: 0, w: 5, h: 5, isDraggable: false, isResizable: false},
      {i: 'f', x: 0, y: 0, w: 3, h: 6, isDraggable: false, isResizable: false},
      {i: 'g', x: 0, y: 0, w: 3, h: 6, isDraggable: false, isResizable: false}
    ];

    var imageListLandscape = [
      {img: 'https://x68wxo23bm-flywheel.netdna-ssl.com/wp-content/uploads/2014/08/martinparr9.jpg',
       orientation:'landscape'},
      {img: 'https://static.photocrowd.com/upl/dY/cms.v1VmlKRxSVk_Tde3Dsjg-collection_cover.jpeg',
       orientation:'landscape'},
      {img: 'https://media0.faz.net/ppmedia/aktuell/399746831/1.5255848/article_multimedia_overview/mit-guten-freundinnen-kann-man.jpg',
       orientation:'landscape'},
      {img: 'https://x68wxo23bm-flywheel.netdna-ssl.com/wp-content/uploads/2014/08/martinparr9.jpg',
       orientation:'landscape'},
      {img: 'https://x68wxo23bm-flywheel.netdna-ssl.com/wp-content/uploads/2014/08/martinparr9.jpg',
       orientation:'landscape'},
      {img: 'https://x68wxo23bm-flywheel.netdna-ssl.com/wp-content/uploads/2014/08/martinparr9.jpg',
       orientation:'landscape'},
      {img: 'https://x68wxo23bm-flywheel.netdna-ssl.com/wp-content/uploads/2014/08/martinparr9.jpg',
       orientation:'landscape'}
    ];

    var imageListPortrait = [
      {img: 'http://79hbm1979mg58bnh1fp50y1bry.wpengine.netdna-cdn.com/wp-content/uploads/2018/02/Elliott-786x1024.jpg',
      orientation:'portrait'},
      {img: 'http://79hbm1979mg58bnh1fp50y1bry.wpengine.netdna-cdn.com/wp-content/uploads/2018/02/Elliott-786x1024.jpg',
      orientation:'portrait'},
      {img: 'https://x68wxo23bm-flywheel.netdna-ssl.com/wp-content/uploads/2014/08/martinparr9.jpg',
      orientation:'landscape'},
      {img: 'http://79hbm1979mg58bnh1fp50y1bry.wpengine.netdna-cdn.com/wp-content/uploads/2018/02/Elliott-786x1024.jpg',
      orientation:'portrait'},
      {img: 'https://x68wxo23bm-flywheel.netdna-ssl.com/wp-content/uploads/2014/08/martinparr9.jpg',
      orientation:'landscape'},
      {img: 'http://79hbm1979mg58bnh1fp50y1bry.wpengine.netdna-cdn.com/wp-content/uploads/2018/02/Elliott-786x1024.jpg',
      orientation:'portrait'},
      {img: 'http://79hbm1979mg58bnh1fp50y1bry.wpengine.netdna-cdn.com/wp-content/uploads/2018/02/Elliott-786x1024.jpg',
      orientation:'portrait'},
    ];

    return (
      <>
      <div className="wrapper">
      <Grid layout={layout3} rowHeight={60} imageList={imageListPortrait}/>
      <Grid layout={layout2} rowHeight={60} imageList={imageListLandscape}/>
      <Grid layout={layout1} rowHeight={60} imageList={imageListLandscape}/>
      <Grid layout={layout2} rowHeight={60} imageList={imageListLandscape}/>
      <Grid layout={layout2} rowHeight={60} imageList={imageListLandscape}/>
      <Grid layout={layout3} rowHeight={60} imageList={imageListPortrait}/>
      </div>
      </>
    )
  }
}


export default App;
