<template>
  <button id="ripple" @click="ripple">snake</button>
</template>

<script>
CSS.paintWorklet.addModule('paintworklet.js');
export default {
  methods: {
    ripple (evt) {
      let button = evt.target
      let x, y
      let start = performance.now()

      button.classList.add('animating');
      [x, y] = [evt.clientX, evt.clientY];
      start = performance.now();
      requestAnimationFrame(function raf(now) {
        const count = Math.floor(now - start);
        button.style.cssText = `--ripple-x: ${x}; --ripple-y: ${y}; --animation-tick: ${count};`;
        if(count > 1000) {
          button.classList.remove('animating');
          button.style.cssText = `--animation-tick: 0`;
          return;
        }
        requestAnimationFrame(raf);
      })
    }
  }
}
</script>

<style>
#ripple {
  width: 300px;
  height: 300px;
  border-radius: 150px;
  font-size: 5em;
  background-color: rgb(255,64,129);
  border: 0;
  box-shadow: 0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);
  color: white;

  --ripple-x: 0;
  --ripple-y: 0;
  --ripple-color: rgba(255,255,255,0.54);
  --animation-tick: 0;
}
#ripple:focus {
  outline: none;
}
#ripple.animating {
  background-image: paint(ripple);
}
</style>
