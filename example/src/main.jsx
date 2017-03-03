import React, {Component} from 'react';
import {render} from 'react-dom';

// import svg file
import newImage from '../resource/Image';
import oldImage from '../resource/oldImage';
// let reqNewImage = require('../resource/Image');
// let reqOldImage = require('../resource/oldImage');

class Example extends Component {
  render() {
    return <div>
      <h2>turn SVGs into Base64</h2>
      <p>
        <span>new type svg file</span>
        <img src={newImage} alt="newStyle" />
      </p>
      <p>
        <span>old type svg file</span>
        <img src={oldImage} alt="oldStyle" />
      </p>
    </div>
  }
}


render(
    <Example />,
    document.getElementById('root'),
);
