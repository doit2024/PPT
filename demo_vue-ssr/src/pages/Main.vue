<template>
  <h2 class="main-title">This is Main View</h2>
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', this.meta())
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      meta () {
        return {
          title: 'Vue SSR Template',
          description: 'this is main description',
          keywords: 'view, main'
        }
      }
    }
  }
</script>