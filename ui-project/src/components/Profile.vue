<template>
  <div>
    <panel title="User Profile">
      <v-text-field
        label="First Name"
        v-model="profile.first_name"
      ></v-text-field>
      <v-text-field
        label="Last Name"
        v-model="profile.last_name"
      ></v-text-field>
      <v-text-field
        label="Graduation Year"
        v-model="profile.graduation_year"
      ></v-text-field>
      <v-text-field
        label="College"
        v-model="profile.college"
      ></v-text-field>
      <v-text-field
        label="Major"
        v-model="profile.major"
      ></v-text-field>
      <v-text-field
        label="Skills"
        v-model="profile.skills"
      ></v-text-field>
    </panel>
    <br>
    <v-btn dark class="light-blue darken-4" @click="saveProfile">
      Create Project
    </v-btn>
  </div>
</template>

<script>
import ProfilesService from '@/services/ProfilesService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      profile: {
        first_name: null,
        last_name: null, // email of drexel student that made this project
        graduation_year: null,
        college: null,
        major: null,
        skills: null
      }
    }
  },
  methods: {
    async saveProfile () {
      try {
        await ProfilesService.post(this.profile)
        this.$router.push({
          name: 'projects'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>
</style>
