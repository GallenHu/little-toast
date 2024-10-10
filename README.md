# little-toast

## Screenshot

<img src="https://raw.githubusercontent.com/GallenHu/little-toast/refs/heads/main/docs/screenshot.png" width="248px">

## Development

```sh
npm install
npm run build
```

open file `example.html` in browser.

## Usage

### ESM

```js
import { showToast } from 'little-toast';
import 'little-toast/dist/styles.css';

showToast('hello');
```

### UMD

1. 引入

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/little-toast/dist/styles.css" />
<script src="https://cdn.jsdelivr.net/npm/little-toast/dist/toast.umd.js"></script>
```

2. 使用

```js
LittleToast.showToast('hello');
```
