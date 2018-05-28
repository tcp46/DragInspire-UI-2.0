major<template>
  <v-layout column fluid>
    <v-flex>
      <panel title="Register">
        <form name="draginspire-registration-form" autocomplete="off">
          <v-text-field
            placeholder="First Name"
            type="string"
            name="firstName"
            v-model="firstName"></v-text-field>
          <v-text-field
            placeholder="Last Name"
            type="string"
            name="lastName"
            v-model="lastName"></v-text-field>
          <v-select
            type="string"
            :items="years"
            placeholder="Graduation Year"
            v-model="gradYear"></v-select>
          <v-select
            type="string"
            :items="colleges"
            placeholder="What college are you in?"
            v-model="college"></v-select>
          <v-text-field
            placeholder="What is your major?"
            type="string"
            name="major"
            v-model="major"></v-text-field>
          <v-text-field
            placeholder="Skills"
            type="string"
            name="skills"
            v-model="skills"></v-text-field>
          <v-text-field
            placeholder="Drexel Email"
            type="email"
            name="email"
            v-model="email"></v-text-field>
          <v-text-field
            placeholder="Password"
            name="password"
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
      firstName: '',
      lastName: '',
      gradYear: '',
      years: [
        { text: '2019' },
        { text: '2020' },
        { text: '2021' },
        { text: '2022' },
        { text: '2023' },
        { text: '2024' }
      ],
      college: '',
      colleges: [
        { text: 'Antoinette Westphal College of Media Arts & Design' },
        { text: 'Bennett S. LeBow College of Business' },
        { text: 'Center for Food and Hospitality Management' },
        { text: 'Center for Sport Management' },
        { text: 'Close School of Entrepreneurship' },
        { text: 'College of Arts and Sciences' },
        { text: 'College of Computing & Informatics' },
        { text: 'College of Engineering' },
        { text: 'College of Nursing and Health Professions' },
        { text: 'Dornsife School of Public Health' },
        { text: 'Goodwin College of Professional Studies' },
        { text: 'School of Biomedical Engineering, Science and Health Systems' },
        { text: 'School of Education' }
      ],
      major: '',
      skills: '',
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          firstName: this.firstName,
          lastName: this.lastName,
          gradYear: this.gradYear,
          college: this.college,
          major: this.major,
          skills: this.skills,
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
