<template>
  <section class="background-stars">
    <div class="stars __fsmall"></div>
    <div class="stars __small"></div>
    <div class="stars __fmedium"></div>
    <div class="stars __medium"></div>
    <div class="stars __fbig"></div>
    <div class="stars __big"></div>
  </section>



</template>

<style scoped lang="sass">
$c_bg_stars_in: #1B2735
$c_bg_stars_out: #090A0F

@function multiple-box-shadow ($n)
  $value: '#{random(2400)}px #{random(2400)}px #FFF'
  @for $i from 2 through $n
    $value: '#{$value} , #{random(2400)}px #{random(2400)}px #FFF'
  @return unquote($value)

$shadows-fsmall: multiple-box-shadow(300)
$shadows-small: multiple-box-shadow(300)
$shadows-fmedium: multiple-box-shadow(100)
$shadows-medium: multiple-box-shadow(100)
$shadows-fbig: multiple-box-shadow(50)
$shadows-big: multiple-box-shadow(50)

// background-stars
.background-stars
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: radial-gradient(ellipse at bottom, $c_bg_stars_in 0%, $c_bg_stars_out 100%)
  overflow: hidden

//
//stars
//
.stars
  background: transparent
  &:after
    content: " "
    position: absolute
    top: 2000px
    background: transparent

.__fsmall
  width: 1px
  height: 1px
  box-shadow: $shadows-fsmall
  animation: animStar 60s linear infinite
  &:after
    width: 1px
    height: 1px
    box-shadow: $shadows-fsmall

.__small
  width: 1px
  height: 1px
  box-shadow: $shadows-small
  animation: animStar 100s linear infinite
  &:after
    width: 1px
    height: 1px
    box-shadow: $shadows-small

.__fmedium
  width: 2px
  height: 2px
  box-shadow: $shadows-fmedium
  animation: animStar 90s linear infinite
  &:after
    width: 2px
    height: 2px
    box-shadow: $shadows-fmedium

.__medium
  width: 2px
  height: 2px
  box-shadow: $shadows-medium
  animation: animStar 160s linear infinite
  &:after
    width: 2px
    height: 2px
    box-shadow: $shadows-medium

.__fbig
  width: 3px
  height: 3px
  box-shadow: $shadows-fbig
  animation: animStar 140s linear infinite
  &:after
    width: 3px
    height: 3px
    box-shadow: $shadows-fbig

.__big
  width: 3px
  height: 3px
  box-shadow: $shadows-big
  animation: animStar 220s linear infinite
  &:after
    width: 3px
    height: 3px
    box-shadow: $shadows-big

@keyframes animStar
  from
    transform: translateY(0px)
  to
    transform: translateY(-2000px)

</style>
