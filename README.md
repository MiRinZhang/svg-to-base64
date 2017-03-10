> A Webpack Loader to turn SVGs into Base64

## Install

```sh
npm i -D svg2base64-loader
```

## Useage

```js
// without webpack loader config
import FirstImage from 'svg2base64!./firstImage.svg'; // also support .svgx file
// or let FirstImage = require('svg2base64!./firstImage.svg');

// with webpack loader config
import SecondImage from './secondImage.svg';
// or let SecondImage = require('/secondImage.svg');

// use in your component
<img src={FirstImage} />
<img src={SecondImage} />
```

### Loader output

#### Webpack1.x

```js
// In your webpack config
{
  test: /\.(svg|svgx)$/,
  loader: "svg2base64"
}
```

#### Webpack2.x

```js
// In your webpack config
{
  test: /\.(svg|svgx)$/,
  use: ["svg2base64"]
}
