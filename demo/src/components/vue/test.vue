<template>
  <div>
    <CreateEle :list="list"/>
    {{obj.a}}
  </div>
</template>

<script>
import CreateEle from './CreateEle'
export default {
  components: {
    CreateEle
  },
  data: () => ({
    list: Object.freeze([1,2,3,4]),
    obj: Object.freeze({a: 1})
  }),
  mounted () {
    this.obj = Object.freeze({a: 3})
  }
}
</script>

<style>

</style>
