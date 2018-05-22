<template>
  <div class="section">
    <h2 class="title has-text-centered">Projects</h2><br />
    <nav class="panel has-background-white">
      <p class="panel-heading">
        모든 프로젝트를 확인해보세요
      </p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-medium" type="text" />
          <span class="icon is-medium is-left">
            <i class="fa fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <a class="panel-block is-active">
        <span class="panel-icon">
          <i class="fa fa-book" aria-hidden="true"></i>
        </span>
        9xdp.github.io
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fa fa-book" aria-hidden="true"></i>
        </span>
        9dxp.github.io/docs/
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fa fa-cog" aria-hidden="true"></i>
        </span>
        9dxp.github.io/finedust/
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fa fa-cog" aria-hidden="true"></i>
        </span>
        9dxp.github.io/bikeseoul/
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fa fa-cog" aria-hidden="true"></i>
        </span>
        9dxp.github.io/realinterview/
      </a>
    </nav>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
.panel-block.is-active  {
  border-left-color: #00d1b2;
}
.panel-block.is-active .panel-icon {
  color: #00d1b2;
}

</style>
