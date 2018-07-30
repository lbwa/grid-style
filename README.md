# grid-style [![npm](https://img.shields.io/npm/v/grid-style.svg)](https://www.npmjs.com/package/grid-style) [![Build Status](https://travis-ci.org/lbwa/grid-style.svg?branch=master)](https://travis-ci.org/lbwa/grid-style)

> CSS grid layout which is based on 12 preset columns layout implemented by flex box.

👉Browse [online]

[online]:https://lbwa.github.io/grid-style/

## Installing

```bash
# npm
npm i gird-style --save

# yarn
yarn add grid-style
```

```html
<!-- CDN-->
<link rel="stylesheet" href="https://unpkg.com/grid-style@latest/dist/index.min.css">
<!-- or -->

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/grid-style@latest/dist/index.min.css">
<!-- recommend you to add version number to url ending. eg.https://unpkg.com/grid-style@x.y.z --> 
```

## Usage

```js
// import css file to js file
import 'grid-style/dist/index.min.css'
// or
import 'grid-style/dist/index.css'

// a sass alternative to css file
import 'grid-style/layout/index.sass'
```

```css
/* import css file to your own css file */
@import 'grid-style';

/* or */

/* import sass file to your own sass file */
@import 'grid-style/layout/index.sass'
```

## Basis

| Selector | description |
| ---------- | ----------- |
| `.gird` | flex box container |
| `.grid.no-wrap` | disallowed wrap flex item |
| `.gird.col` | column direction |
| `.gird.row` | row direction |
| `.gird-cell` | define default flex grow factor value of a flex item |
| `.grid.grid-cell-1 ~ 12` | define single flex item width （based on `1/12 container width`） |

```html
<div class="grid">
  <div class="grid-cell grid-cell-2">
    <!-- something you like -->
  </div>
  <div class="grid-cell">
    <!-- something you like -->
  </div>
</div>
```

## alignment

| Selector | description |
| ---------- | ----------- |
| `.grid-top` | define alignment per ***row*** to top-aligned |
| `.grid-center` | define alignment per ***row*** to vertically-centered |
| `.grid-bottom` | define alignment per ***row*** to bottom-aligned |
| `.grid-cell-top` | define alignment per ***item*** to top-aligned |
| `.grid-cell-center` | define alignment per ***item*** to vertically-centered |
| `.grid-cell-bottom` | define alignment per ***item*** to bottom-aligned |

[Online alignment demo][demo-alignment]

```html
<div class="grid grid-bottom">
   <!-- all child flex item element will be bottom-aligned excluding gird-cell alignment element -->
  <div class="grid-cell">
    <!-- content of this area will be bottom-aligned -->
  </div>
  <div class="grid-cell grid-cell-center">
    <!-- content of this area will be vertically-centered because of grid-cell-center -->
  </div>
</div>
```

[demo-alignment]:https://jsfiddle.net/h946ot70/12/

## gutters

| Selector | description |
| ---------- | ----------- |
| `.grid[grid-gutters="1 ~ 5"]` | define flex item gutter （based on `.5em`） |

## offset

| Selector | description |
| ---------- | ----------- |
| `.grid.offset-'1 ~ 12'` | define flex item offset （based on `1/12 container width`）|

[Online offset demo][demo-offset]

```html
<div class="grid" grid-gutters="1">
  <div class="grid-cell offset-1">
    <!-- offset 8.33333% * 1 -->
  </div>
  <div class="grid-cell offset-4">
    <!-- offset 8.33333% * 4 -->
  </div>
  <div class="grid-cell offset-6">
    <!-- offset 8.33333% * 6 -->
  </div>
  <div class="grid-cell">
    <!-- no offset -->
  </div>
</div>
```

[demo-offset]:https://jsfiddle.net/h946ot70/33/

## responsive

***Notice***: This section define properties to ***all*** flex item （`.grid-cell` * n） from ***one*** flex container（`.grid` * 1）.

| Selector | description |
| ---------- | ----------- |
| `.grid-full ~ 2, 3, 4 > .grid-cell` | define all flex item width from same flex container |
| `.small-grid-fit, full, 2, 3, 4 > .grid-cell` | same as `.grid-full ~ 2, 3, 4 > .grid-cell`, but it only works on device which width over `576px` |
| `.large-grid-fit, full, 2, 3, 4 > .grid-cell` | same as `.grid-full ~ 2, 3, 4 > .grid-cell`, but it only works on device which width over `768px` |