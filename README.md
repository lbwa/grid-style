# grid-style [![npm](https://img.shields.io/npm/v/grid-style.svg)](https://www.npmjs.com/package/grid-style) [![Build Status](https://travis-ci.org/lbwa/grid-style.svg?branch=master)](https://travis-ci.org/lbwa/grid-style)

> CSS grid layout which is based on 12 preset columns layout implemented by flex box.

👉Browse [online]

[online]:https://lbwa.github.io/grid-style/

## Installing

```bash
# npm
npm i grid-style --save

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

| selector | target | description |
| -------- | ------ | ----------- |
| .grid | container | define box container |
| .grid.no-wrap | container | disallow wrap item |
| .grid.col | container | set flex direction to column |
| .grid.cr | container | set flex direction to column-reverse |
| .grid.row | container | set flex direction to row |
| .grid.rr | container | set flex direction to row-reverse |
| .grid-cell | item | define default flex grow factor value of a item |
| .grid-cell-1 ~ .grid-cell-12 | item | define single item width （based on `1/12 container width`） |

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

## Alignment

| selector | target | description |
| -------- | ------ | ----------- |
| .grid-top | container | define alignment per ***row*** to top-aligned |
| .grid-center | container | define alignment per ***row*** to vertically-centered |
| .grid-bottom | container | define alignment per ***row*** to bottom-aligned |
| .grid-jc-start | container | define alignment all ***item*** to left-aligned |
| .grid-jc-end | container | define alignment all ***item*** to right-aligned |
| .grid-jc-center | container | define alignment all ***item*** to horizontally-centered |
| .grid-jc-between | container | define alignment all ***item*** to space-between-aligned |
| .grid-jc-around | container | define alignment all ***item*** to space-around-aligned |
| .grid-cell-top | item | define alignment per ***item*** to top-aligned |
| .grid-cell-center | item | define alignment per ***item*** to vertically-centered |
| .grid-cell-bottom | item | define alignment per ***item*** to bottom-aligned |

***Notice***: You have to make sure all item total width less than container width if you are using `.grid-jc-` properties. You can use `.grid-cell-1 ~ .grid-cell-12` to limit item width.

[Online alignment demo][demo-alignment]

```html
<div class="grid grid-bottom">
   <!-- all child item element will be bottom-aligned excluding grid-cell alignment element -->
  <div class="grid-cell">
    <!-- content of this area will be bottom-aligned -->
  </div>
  <div class="grid-cell grid-cell-center">
    <!-- content of this area will be vertically-centered because of grid-cell-center -->
  </div>
</div>
```

[demo-alignment]:https://jsfiddle.net/h946ot70/12/

## Gutters

| selector | target | description |
| -------- | ------ | ----------- |
| .grid[grid-gutters="1"] ~ .grid[grid-gutters="5"] | container | define item gutter （based on `.5em`） |

## Offset

| selector | target | description |
| -------- | ------ | ----------- |
| .offset-1 ~ .offset-12 | item | define item offset （based on `1/12 container width`）|

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

## Response

***Notice***: This section define properties to ***all*** item （`.grid-cell` * n） from ***one*** container（`.grid` * 1）.

| selector | target | description |
| -------- | ------ | ----------- |
| .grid-full | container | define all item (`100%` container width) width from same container |
| .grid-2 | container | define all item (`50%` container width) width from same container |
| .grid-3 | container | define all item (`33.3333%` container width) width from same container |
| .grid-4 | container | define all item (`25%` container width) width from same container |
| .small-grid-fit | container | define `flex: 1` ,  but it only works on device which width over `576px` |
| .small-grid-full | container | same as `.grid-full` , but it only works on device which width over `576px` |
| .small-grid-2 | container | same as `.grid-2` , but it only works on device which width over `576px` |
| .small-grid-3 | container | same as `.grid-3` , but it only works on device which width over `576px` |
| .small-grid-4 | container | same as `.grid-4` , but it only works on device which width over `576px` |
| .large-grid-fit | container | define `flex: 1` ,  it only works on device which width over `768px` |
| .large-grid-full | container | same as `.grid-full` , but it only works on device which width over `768px` |
| .large-grid-2 | container | same as `.grid-2` , but it only works on device which width over `768px` |
| .large-grid-3 | container | same as `.grid-3` , but it only works on device which width over `768px` |
| .large-grid-4 | container | same as `.grid-4` , but it only works on device which width over `768px` |
