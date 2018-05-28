<template>
  <div class="section">
    <h2 class="title has-text-centered">Projects</h2><br />
    <nav class="panel has-background-white">
      <p class="panel-heading">
        모든 프로젝트를 확인해보세요
      </p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-medium" type="text" v-model="keyword" />
          <span class="icon is-medium is-left">
            <i class="fa fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <template v-if="repoSize">
        <a class="panel-block"
          v-for="repo in repos"
          :key="repo.id"
          :class="repo.is_active ? 'is-active' : ''"
          :href="repo.html_url"
          target="_blank"
          >
          <span class="panel-icon">
            <i class="fa" aria-hidden="true" :class="repo.is_active ? 'fa-book' : 'fa-gear'"></i>
          </span>
          {{repo.full_name}}
        </a>
      </template>
      <template v-else>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fa" aria-hidden="true"></i>
          </span>
          검색결과가 없습니다
        </a>
      </template>
    </nav>
  </div>
</template>
<script>
// github search api endpoint
const REPOS_ENDPOINT = "https://api.github.com/search/repositories?q=user:9xdp&sort=updated&order=desc"
// is-active 를 줄 repo 명
const ACTIVE_REPO_NAMES = ['9xdp.github.io']

export default {
  async created () {
    try {
      const response = await this.$axios.$get(REPOS_ENDPOINT, {
        headers: {
          'Accept': 'application/vnd.github.mercy-preview+json'
        }
      })

      const filteredRepos = response.items.reduce((filteredRepo, repo) => {
        // source 가 들어가지 않은 repo만 추가
        if (repo.name.indexOf('source') === -1) {
          // repo name이 active 상태를 가질 경우 값 추가
          if (ACTIVE_REPO_NAMES.includes(repo.name)) {
            repo.is_active = true
          }

          filteredRepo.push(repo)
        }

        return filteredRepo
      }, [])

      this.repos = filteredRepos
      this.originRepos = filteredRepos

    } catch (e) {
      console.log(e)
      this.$toast.error('Github Search API로 부터 Project 정보를 가져올 수 없습니다');
    }
  },

  data () {
    return {
      keyword: '',
      repos: [],
      originRepos: []
    }
  },

  watch: {
    keyword (newKeyword) {
      this.getProjectList()
    }
  },

  methods: {
    getProjectList () {
      if (!this.keyword) {
        this.repos = this.originRepos
        return false
      }

      this.repos = this.originRepos.filter(repo => {
        return repo.name.includes(this.keyword)
      })
    }
  },

  computed: {
    repoSize () {
      return this.repos.length > 0
    }
  }
}
</script>
<style scoped>
.panel-block.is-active {
  border-left-color: #00d1b2;
}
.panel-block.is-active .panel-icon {
  color: #00d1b2;
}
</style>
