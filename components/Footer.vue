<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>Made with 🔥 in <a href="https://9xdp.github.io">9xdp</a></strong> since 2018 - {{ year }}
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

