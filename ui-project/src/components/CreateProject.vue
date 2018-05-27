<template>
  <div>
    <panel title="Project Metadata">
      <v-text-field
        label="What is the name of your project?"
        required
        :rules="[required]"
        v-model="project.name"
      ></v-text-field>
      <v-text-field
        label="What is your Drexel email?"
        required
        :rules="[required]"
        v-model="project.creator"
      ></v-text-field>
      <v-text-field
        label="What skills are you looking for?"
        required
        :rules="[required]"
        v-model="project.skills"
      ></v-text-field>
      <v-text-field
        label="Project Description"
        required
        :rules="[required]"
        v-model="project.description"
        multi-line
      ></v-text-field>
    </panel>
    <span class="danger-alert" v-if="error">
      {{error}}
    </span>
    <br>
    <v-btn dark class="light-blue darken-4" @click="create">
      Create Project
    </v-btn>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import ProjectsService from '@/services/ProjectsService'
export default {
  data () {
    return {
      project: {
        name: null,
        creator: null,
        skills: null,
        description: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.project)
        .every(key => !!this.project[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await ProjectsService.post(this.project)
        this.$router.push({
          name: 'projects'
        })
      } catch (err) {
        console.log(err)
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
