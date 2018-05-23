<template>
  <v-layout column>
    <v-flex>
      <div class="white elevation-2">
        <v-toolbar float dense class="light-blue darken-4" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Drexel Email"
            v-model="email"></v-text-field>
          <br>
          <v-text-field
            label="Password"
            v-model="password"></v-text-field>
          <br>
          <div class="error" v-html="error"></div>
          <br>
          <v-btn @click="register" class="light-blue darken-4" dark>Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
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
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style>
.error {
  color: red;
}
</style>
