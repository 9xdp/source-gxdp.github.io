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
      <template v-if="projectSize">
        <a class="panel-block" v-for="(value,key) in projects" :key="key" v-bind:class="value.status">
          <span class="panel-icon">
            <i class="fa" aria-hidden="true" v-bind:class="value.icon"></i>
          </span>
          {{value.title}}
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
import projectList from '~/static/projectList.json';

export default {
  data () {
    return {
      keyword: '',
      projects: projectList.data,
      origProjects: JSON.parse(JSON.stringify(projectList.data))
    }
  },
  watch: {
    keyword (newKeyword) {
      this.getProjectList()
    }
  },
  methods: {
    getProjectList () {
      if (this.keyword === "") {
        this.projects = this.origProjects
        return
      }
      this.projects = this.origProjects.filter((value) => {
        if (value.title.includes(this.keyword)) {
          return true;
        }
      });
    }
  },
  computed: {
    projectSize () {
      return this.projects.length > 0 ? true : false
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
