<template>
  <div class="container">
    <div class="section">
      <div class="columns">
        <div class="column" v-for="meetup in meetupLists" :key="meetup.sha">
          {{ meetup.name }}
          <p>
            {{ meetup.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const MEETUP_ENDPOINT = "https://api.github.com/search/code?q=meetup+in:path+extension:md+repo:9xdp/source.9xdp.github.io&sort=indexed"

export default {
  async asyncData ({ app }) {
    try {
      const response = await app.$axios.$get(MEETUP_ENDPOINT)
      const meetupLists = response.items

      if (meetupLists.length > 0) {
        const fileResponse = await app.$axios.$get(meetupLists[0].url)
        // fileResponse의 encoded content를 base64 decode를 하면 한글이 깨져서 다시 호출해야함
        const contentResponse = await app.$axios.$get(fileResponse.download_url)
        meetupLists[0].content = contentResponse
      }

      return {
        meetupLists: response.items
      }
    } catch (e) {
      app.$toast.error("Github Search API로 부터 Meepup 정보를 가져올 수 없습니다")
      app.$toast.error("잠시 후 다시 시도해주세요")
    }
  },

  data () {
    return {
      meetupLists: []
    }
  }
}
</script>

