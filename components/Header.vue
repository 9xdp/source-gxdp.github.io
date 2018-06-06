<template>
  <header class="hero is-primary is-medium">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container" style="z-index: 1">
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
              <nuxt-link class="navbar-item is-active" to="/">
                HOME
              </nuxt-link>
              <nuxt-link class="navbar-item" to="/#projects">
                PROJECTS
              </nuxt-link>
              <nuxt-link class="navbar-item" to="/#members">
                MEMBERS
              </nuxt-link>
              <!-- <nuxt-link class="navbar-item" to="/intro/meetup">
                MEETUP
              </nuxt-link> -->
              <span class="navbar-item">
                <a class="button is-white is-outlined is-small" href="https://9xdp.github.io/docs/" target="_blank">
                  <span class="icon">
                    <i class="fa fa-book"></i>
                  </span>
                  <span>Docs</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
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
      this.burgerMenuClicked = !this.burgerMenuClicked
    }
  }
}
</script>
