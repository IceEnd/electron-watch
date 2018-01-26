# electron-watch

> Automatically restart Electron app when the main process file is changed.

[![npm](https://img.shields.io/badge/npm-v1.0.3-brightgreen.svg)](https://www.npmjs.com/package/electron-watch)
![build](https://img.shields.io/badge/build-passing-green.svg)
[![MIT License](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/IceEnd/electron-watch/blob/master/LICENSE)

# Installation

```shell
npm install electron-watch
```

# Usage

Adding code snippets to the main process file:

```js
import electron from 'electron';
import path from 'path';

if (process.env.NODE_ENV === 'development') {
  require('electron-watch')(
    __dirname,
    'dev:electron-main', // mean npm run dev:electron-main
    path.join(__dirname, './'),
  );
}
```

# OPTIONS

|field|type|note|
|-----|----|----|
|path|string|Paths to files, dirs to be watched recursively, or glob patterns.|
|command|string|`npm script` name, use start electron main process|
|cwd|string|Current working directory of the child process.|

# LICENSE

[MIT @ Alchemy](https://github.com/IceEnd/electron-watch/blob/master/LICENSE)