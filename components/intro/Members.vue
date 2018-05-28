<template>
  <div class="section">
    <div class="columns has-background-white is-multiline is-mobile">
      <div class="column is-one-quarter-desktop is-half-mobile has-text-centered" v-for="(value,key) in memberList" :key="key">
        <figure class="image is-96x96 member-image">
          <img class="profile-image" :src="value.img || '/profile/default.png' " />
        </figure>
        <h4 class="has-text-weight-semibold is-size-6">
          <a v-if="value.url" :href="value.url" target="_blank" class="has-text-dark">{{value.name}}</a>
          <span v-else>{{value.name}}</span>
          <a v-if="value.email" :href="'mailto:' + value.email" class="has-text-dark">
            <i class="fa fa-envelope-o"></i>
          </a>
        </h4>
        <p class="is-size-6" v-if="value.motto">"{{value.motto}}"</p>
      </div>
    </div>
  </div>
</template>

<script>
import memberList from '~/static/memberList.json'
export default {
  data () {
    return {
      memberList: memberList
    }
  }
}
</script>

<style scoped>
figure.member-image {
  margin: 10px auto;
}
img.profile-image {
  border-radius: 50%;
  height: 100%;
}
i.fa-envelope-o {
  margin-left: 3px;
}
</style>
