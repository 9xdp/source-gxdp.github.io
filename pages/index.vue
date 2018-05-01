<template>
  <div style="overflow: hidden">
    <!-- Title -->
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            9X년생 개발자 모임*
          </h1>
          <h2 class="subtitle">
            <p>Hello World만 찍는 모임</p>
            <p>위치가 멀어서 시간이 없어서 못 가는 모임</p>
            <p>결국 뭐라도 하다가 서버 비용에서 막히는 모임</p>
            <p>이제 그만 🖤</p>
          </h2>
        </div>
      </div>
      <Particles />
    </section>

    <!-- Criteria -->
    <div class="box cta">
      <p class="has-text-centered">
        프로젝트 활동의 첫 단추, 진짜 나만의 서비스를 만드는 이 곳은<span class="tag is-primary">9XDP</span>입니다.
      </p>
    </div>

    <section class="container">
      <!-- About component -->
      <About />
      <!-- Features component -->
      <Features />
      <!-- Proejcts component -->
      <Projects />
      <!-- Members component -->
      <Members />
    </section>
  </div>
</template>

<script>
  import Particles from '~/components/intro/Particles'
  import About from '~/components/intro/About'
  import Features from '~/components/intro/Features'
  import Projects from '~/components/intro/Projects'
  import Members from '~/components/intro/Members'

  export default {
    components: {
      Particles,
      About,
      Features,
      Projects,
      Members
    },

    data () {
      return {
        online: true
      }
    },

    mounted () {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },

    methods: {
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },

    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>

<style>
  .network {
    font-weight: 400;
    font-size: 1rem;
  }

  .network .circle {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: green;
    padding: .1rem .5rem;
    border-radius: 1rem;
  }

  .network.offline .circle {
    background: red;
  }

  .max150 {
    max-height: 150px;
  }
</style>
