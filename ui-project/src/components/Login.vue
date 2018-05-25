<template>
  <v-layout column>
    <v-flex>
      <panel title="Login">
        <v-text-field
          label="Drexel Email"
          v-model="email"></v-text-field>
        <br>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"></v-text-field>
        <br>
        <div v-html="error"></div>
        <br>
        <v-btn @click="login" class="light-blue darken-4" dark>Login</v-btn>
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
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token) // response comes from the constant defined above
        this.$store.dispatch('setUser', response.data.user)
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
