<template>
  <div>
    <a class="link">click</a>
    <p>只能请求一次</p>
    <a class="knil" data-prop="___">kcilc</a>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.link:active::after {
  content: url("http://localhost:3000?action=visit");
}
.knil::before,
.knil::after {
  content: attr(data-prop);
}
</style>
