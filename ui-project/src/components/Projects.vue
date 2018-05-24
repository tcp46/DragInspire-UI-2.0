<template>
  <v-layout column>
    <v-flex>
      <panel title="Projects">
        <div v-for="project in projects" :key="project.id"> <!--the name of the project will be the unique identifier-->
          {{project.name}} -
          {{project.creator}} -
          {{project.skills}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import ProjectsService from '@/services/ProjectsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      projects: null
    }
  },
  async mounted () {
    // do a request to the backend for all the projects
    this.projects = (await ProjectsService.index()).data
  }
}
</script>

<style>
</style>
