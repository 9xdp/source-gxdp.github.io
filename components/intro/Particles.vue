<template>
  <div id="particles-js"></div>
</template>
<style scoped>
  #particles-js {
    position: absolute;
    top: 3em;
    left: 0;
    width: 100%;
    height: 27em;
  }
</style>
<script>
if (process.browser) {
 require ('particles.js')
}

export default {
  mounted () {
    if (window && window.particlesJS) {
      window.particlesJS.load('particles-js', '/particles.json');
    }
  }
}
</script>
