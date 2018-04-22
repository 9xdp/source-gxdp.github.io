<template>
  <div style="overflow: hidden">
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
      <Particles></Particles>
    </section>

    <div class="box cta">
      <p class="has-text-centered">
        프로젝트 활동의 첫 단추, 진짜 나만의 서비스를 만드는 이 곳은<span class="tag is-primary">9XDP</span>입니다.
      </p>
    </div>

    <section class="container">
      <div class="columns features">
        <div class="column is-4">
          <div class="card is-shady">
            <div class="card-image has-text-centered">
              <figure class="image fa">
                <img src="~/static/nuxt.png" alt="Nuxt.js" class="max150"/>
              </figure>
            </div>
            <div class="card-content" style="">
              <div class="content">
                <h4>Nuxt.js</h4>
                <p>정적 사이트를 빠르게 만들기 위해 프론트는 모두 <strong>Nuxt.js</strong>를 사용합니다. <strong>Vue.js</strong>를 자유자재로 다룰 줄 알아야합니다.</p>
                <p><a href="//ko.nuxtjs.org/guide" target="new">더 알아보기</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="card is-shady">
            <div class="card-image has-text-centered">
              <figure class="image fa">
                <img src="~/static/github-pages.jpg" alt="GithubPages.js" class="max150"/>
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>Github Pages</h4>
                <p>진정한 서버리스와 0원에 수렴하는 호스팅 비용을 위해 <strong>GitHub Pages</strong>를 사용합니다. <strong>Git</strong>의 기본적인 명령어와 <strong>GitHub</strong>에서 정적 호스팅이 어떻게 되는지에 대해 알아야합니다.</p>
                <p><a href="//pages.github.com/" target="new">더 알아보기</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="card is-shady">
            <div class="card-image has-text-centered">
                <i class="fa fa-question"></i>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>하나 이상의 WEB Framework</h4>
                <p>OOP, DI, ORM, Authrization 등 기본기를 알려드리진 않습니다. <strong>Laravel, Spring, Django, Rails, Revel...</strong> 중 하나는 부탁드려요.</p>
                <p><a href="https://github.com/topics/framework?o=desc&s=stars" target="new">더 알아보기</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="intro column is-8 is-offset-2">
        <h2 class="title">Perfect for developers or designers!</h2><br>
        <p class="subtitle">Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.</p>
      </div>

      <div class="sandbox" style="margin: 0.75rem;">
        <div class="tile is-ancestor">
          <div class="tile is-parent is-shady">
            <article class="tile is-child notification is-white">
              <p class="title">Hello World</p>
              <p class="subtitle">What is up?</p>
            </article>
          </div>
          <div class="tile is-parent is-shady">
            <article class="tile is-child notification is-white">
              <p class="title">Foo</p>
              <p class="subtitle">Bar</p>
            </article>
          </div>
          <div class="tile is-parent is-shady">
            <article class="tile is-child notification is-white">
              <p class="title">Third column</p>
              <p class="subtitle">With some content</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
        </div>

        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-white">
                  <p class="title">Vertical tiles</p>
                  <p class="subtitle">Top box</p>
                </article>
                <article class="tile is-child notification is-white">
                  <p class="title">Vertical tiles</p>
                  <p class="subtitle">Bottom box</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-white">
                  <p class="title">Middle box</p>
                  <p class="subtitle">With an image</p>
                  <figure class="image is-4by3">
                    <img src="//bulma.io/images/placeholders/640x480.png">
                  </figure>
                </article>
              </div>
            </div>
            <div class="tile is-parent is-shady">
              <article class="tile is-child notification is-white">
                <p class="title">Wide column</p>
                <p class="subtitle">Aligned with the right column</p>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent is-shady">
            <article class="tile is-child notification is-white">
              <div class="content">
                <p class="title">Tall column</p>
                <p class="subtitle">With even more content</p>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                  <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                  <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child notification is-white">
              <p class="title">Side column</p>
              <p class="subtitle">With some content</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
          <div class="tile is-parent is-8 is-shady">
            <article class="tile is-child notification is-white">
              <p class="title">Main column</p>
              <p class="subtitle">With some content</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Particles from '~/components/Particles'
  export default {
    components: {
      Particles
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
