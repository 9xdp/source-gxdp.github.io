<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <a href="https://9xdp.slack.com" target="_blank" class="has-text-primary">
            <i class="fa fa-slack"></i>
          </a>
        </p>
        <p>
          <strong>Made with 🔥 in <a href="https://github.com/9xdp">9xdp</a></strong> since {{ year }}
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

