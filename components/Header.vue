<template>
  <section class="hero is-primary is-medium is-bold">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src="~assets/9xdp_logo.png" alt="Logo">
            </a>
            <span
              :class="['navbar-burger', 'burger', burgerMenuClicked ? 'is-active' : '']"
              data-target="navbarMenu"
              @click="toggleMenu"
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div
            id="navbarMenu"
            :class="['navbar-menu', burgerMenuClicked ? 'is-active' : '']"
          >
            <div class="navbar-end">
              <a class="navbar-item is-active">
                HOME
              </a>
              <a class="navbar-item">
                MEETUP
              </a>
              <a class="navbar-item">
                PROJECTS
              </a>
              <a class="navbar-item">
                MEMBERS
              </a>
              <span class="navbar-item">
                <a class="button is-white is-outlined is-small" href="https://github.com/9xdp">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span>Github</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      burgerMenuClicked: false
    }
  },

  methods: {
    toggleMenu (event) {
      this.burgerMenuClicked = !this.burgerMenuClicked;
    }
  }
}
</script>
