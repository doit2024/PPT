<template>
  <div class="btn-groups">
    <label class="checkbox" for="checkbox">{{checked}}</label>
    <input type="checkbox" id="checkbox" v-model="checked" hidden/>
    <button class="btn">1</button>
    <button class="btn">2</button>
    <button class="btn">3</button>
    <button class="btn">4</button>
    <button class="btn">5</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    checked: false
  })
}
</script>

<style lang=less>
/* .btn:nth-child(2n+3) {
  color: #f80;
} */
.btn-groups {
  position: relative;
  text-align: center;
  line-height: 6em;
  color: #fff;
}
.checkbox {
  display: inline-block;
  width: 6em;
  height: 6em;
  border-radius: 50%;
  background: #369;
  position: absolute;
  z-index: 1;
  left: -1em;
  top: -1em;
  user-select: none;
}
.btn {
  color: #fff;
  width: 3em;
  height: 3em;
  border: none;
  border-radius: 50%;
  position: absolute;
  background: #FFB66F;
  transition: all .3s ease;
  transform: translate(0, 0) rotate(360deg);
}
#checkbox:checked {
  @d: 10em;
  .generate-buttons(5);
  .generate-buttons(@n, @i: 1) when (@i =< @n) {
    ~ .btn:nth-of-type(@{i}) {
      @angle: (90 / (@n - 1)) * (@i - 1) * 1deg;
      @x: cos(@angle) * @d;
      @y: sin(@angle) * @d;
      transition-delay: 0.1s * @i;
      transform: translate(@x, @y) rotate(0deg);
    }
    .generate-buttons(@n, (@i + 1));
  }
}
</style>
