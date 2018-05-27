<template>
  <v-layout>
    <v-flex xs8 class="info">
      <panel title="Creator Profile">
        <div class="user-first-name">
          First Name: {{user.firstName}}
        </div>
        <div class="user-last-name">
          Last Name: {{user.lastName}}
        </div>
        <div class="user-email">
          Email: {{user.email}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      user: {}
    }
  },
  async mounted () {
    const userEmail = this.$store.state.route.params.userEmail
    this.user = (await AuthenticationService.show(userEmail)).data
  },
  components: {
    Panel
  }
}
</script>

<style>
.text {
  text-align: left;
  padding: 10px;
}
</style>
