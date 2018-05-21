<template>
  <div class="section">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child notification is-white">
          <div class="content member-list">
            <figure class="image is-128x128" v-for="(value,key) in memberList" :key="key">
              <img class="profile-image" :src="value.img" />
              <figcaption>{{value.name}}</figcaption>
              <figcaption v-if="value.motto">"{{value.motto}}"</figcaption>
            </figure>
          </div>
        </article>
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
div.member-list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
}
img.profile-image {
  border-radius: 50%;
}
</style>
