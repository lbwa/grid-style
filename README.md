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

| Selector | target | description |
| -------- | ------ | ----------- |
| `.gird` | `flex container` | define flex box container |
| `.grid.no-wrap` | `flex container` | disallow wrap flex item |
| `.gird.col` | `flex container` | set flex direction to column |
| `.gird.cr` | `flex container` | set flex direction to column-reverse |
| `.gird.row` | `flex container` | set flex direction to row |
| `.gird.rr` | `flex container` | set flex direction to row-reverse |
| `.gird-cell` | `flex item` | define default flex grow factor value of a flex item |
| `.grid-cell-1 ~ .grid-cell-12` | `flex item` | define single flex item width （based on `1/12 container width`） |

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

| Selector | target | description |
| -------- | ------ | ----------- |
| `.grid-top` | `flex container` | define alignment per ***row*** to top-aligned |
| `.grid-center` | `flex container` | define alignment per ***row*** to vertically-centered |
| `.grid-bottom` | `flex container` | define alignment per ***row*** to bottom-aligned |
| `.grid-cell-top` | `flex item` | define alignment per ***item*** to top-aligned |
| `.grid-cell-center` | `flex item` | define alignment per ***item*** to vertically-centered |
| `.grid-cell-bottom` | `flex item` | define alignment per ***item*** to bottom-aligned |

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

| Selector | target | description |
| -------- | ------ | ----------- |
| `.grid[grid-gutters="1"] ~ .grid[grid-gutters="5"]` | `flex container` | define flex item gutter （based on `.5em`） |

## offset

| Selector | target | description |
| -------- | ------ | ----------- |
| `.offset-1 ~ .offset-12` | `flex item` | define flex item offset （based on `1/12 container width`）|

[Online offset demo][demo-offset]

```html
<div class="grid" grid-gutters="1">
  <div class="grid-cell offset-1">
    <!-- offset 8.33333% * 1 -->
  </div>
  <div class="grid-cell offset-5">
    <!-- offset 8.33333% * 5 -->
  </div>
  <div class="grid-cell offset-6">
    <!-- offset 8.33333% * 6 -->
  </div>
  <div class="grid-cell">
    <!-- no offset -->
  </div>
</div>
```

[demo-offset]:https://jsfiddle.net/h946ot70/36/

## response

***Notice***: This section define properties to ***all*** flex item （`.grid-cell` * n） from ***one*** flex container（`.grid` * 1）.

| Selector | target | description |
| -------- | ------ | ----------- |
| `.grid-full` | `flex container` | define all flex item `(100% container width)` width from same flex container |
| `.grid-2` | `flex container` | define all flex item `(50% container width)` width from same flex container |
| `.grid-3` | `flex container` | define all flex item `(33.3333% container width)` width from same flex container |
| `.grid-4` | `flex container` | define all flex item `(25% container width)` width from same flex container |
| `.small-grid-fit` | `flex container` | define `flex: 1` ,  but it only works on device which width over `576px` |
| `.small-grid-full` | `flex container` | same as `.grid-full` , but it only works on device which width over `576px` |
| `.small-grid-2` | `flex container` | same as `.grid-2` , but it only works on device which width over `576px` |
| `.small-grid-3` | `flex container` | same as `.grid-3` , but it only works on device which width over `576px` |
| `.small-grid-4` | `flex container` | same as `.grid-4` , but it only works on device which width over `576px` |
| `.large-grid-fit` | `flex container` | define `flex: 1`,  it only works on device which width over `768px` |
| `.large-grid-full` | `flex container` | same as `.grid-full` , but it only works on device which width over `768px` |
| `.large-grid-2` | `flex container` | same as `.grid-2` , but it only works on device which width over `768px` |
| `.large-grid-3` | `flex container` | same as `.grid-3` , but it only works on device which width over `768px` |
| `.large-grid-4` | `flex container` | same as `.grid-4` , but it only works on device which width over `768px` |