<template>
  <v-layout>
    <v-flex class="info">
      <panel title="Creator Profile">
        <div class="text-sm-left">
          First Name: {{user.firstName}}
        </div>
        <div class="text-sm-left">
          Last Name: {{user.lastName}}
        </div>
        <div class="text-sm-left">
          Graduation Year: {{user.gradYear}}
        </div>
        <div class="text-sm-left">
          College: {{user.college}}
        </div>
        <div class="text-sm-left">
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
    const userEmail = this.$store.state.user.email
    this.user = (await AuthenticationService.show(userEmail)).data
  },
  components: {
    Panel
  }
}
</script>

<style>
text {
  text-align: left;
  padding: 10px;
}
</style>
