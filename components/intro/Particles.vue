<template>
  <no-ssr>
    <vue-particles
      color="#ffffff"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="4"
      linesColor="#ffffff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </no-ssr>
</template>
<style scoped>
  #particles-js {
    position: absolute;
    top: 5vh;
    left: 0;
    width: 100%;
    height: 50vh;
  }
</style>
