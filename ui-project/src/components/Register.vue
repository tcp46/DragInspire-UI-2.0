<template>
  <v-layout column fluid>
    <v-flex>
      <panel title="Register">
        <form name="draginspire-registration-form" autocomplete="off">
          <v-text-field
            label="Drexel Email"
            v-model="email"></v-text-field>
            <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"></v-text-field>
        </form>
        <br>
        <div v-html="error"></div>
        <br>
        <v-btn @click="register" class="light-blue darken-4" dark>Register</v-btn>
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
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token) // response comes from the constant defined above
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'projects'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style>
</style>
