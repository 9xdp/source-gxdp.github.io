<template>
  <div class="columns">
    <div class="column">
      <input
        type="email"
        v-model="email"
        v-validate="'required|email'"
        data-vv-name="email"
        :placeholder="placeHoldEmail"
      />
      <button @click="join">JOIN</button>
    </div>
  </div>
</template>
<script>
  const SLACK_ENDPOINT = "https://hooks.slack.com/services/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"

  export default {
    data () {
      return {
        submitting: false,
        email: '',
        placeHoldEmail: 'your@email.com'
      }
    },

    methods: {
      async join () {
        if (this.submitting) {
          this.$toast.error('요청 중입니다')
          return false
        }

        const result = await this.$validator.validate()
        if (!result) {
          this.$toast.error(this.$validator.errors.items[0].msg).goAway(1500);
        }

        this.submitting = true

        try {
          const body = JSON.stringify({
            text: `${this.email}이 가입을 원합니다`
          })

          const response = await this.$axios.$post(SLACK_ENDPOINT, body)
          if (response === 'ok') {
            this.$toast.success('가입요청이 발송되었습니다')
            this.$toast.success('5영업일 내로 연락드리겠습니다')
            this.email = ''
          }
        } catch (error) {
          this.$toast.error('통신 중 오류가 발생되었습니다')
          this.$toast.error('잠시 후 다시 시도해주세요')
        }

        this.submitting = false
      }
    }
  }
</script>
