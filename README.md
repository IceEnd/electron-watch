# electron-watch

> Automatically restart Electron app when the main process file is changed.

[![npm](https://img.shields.io/badge/npm-v1.0.4-brightgreen.svg)](https://www.npmjs.com/package/electron-watch)
![build](https://img.shields.io/badge/build-passing-green.svg)
[![MIT License](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/IceEnd/electron-watch/blob/master/LICENSE)

# Installation

```shell
npm install electron-watch
```

# Usage

For example,

`package.json`:

```js
{
  //...
  "scripts": {
    "dev:electron-main": "cross-env NODE_ENV='development' electron -r babel-register ./app/renderer/",
  },
  //...
}

```
Adding code block to the main process file:

`index.js`:

```js
import electron from 'electron';
import path from 'path';

if (process.env.NODE_ENV === 'development') {
  require('electron-watch')(
    __dirname,
    'dev:electron-main', // means: npm run dev:electron-main
    path.join(__dirname, './'),
  );
}
```

# OPTIONS

|field|type|description|
|-----|----|----|
|path|string|Paths to files, dirs to be watched recursively, or glob patterns.|
|command|string|`npm script` name, use this to start electron main process|
|cwd|string|Current working directory of the child process.|

# LICENSE

[MIT @ Alchemy](https://github.com/IceEnd/electron-watch/blob/master/LICENSE)