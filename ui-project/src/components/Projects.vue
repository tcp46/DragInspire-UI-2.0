<template>
  <v-layout column>
    <v-flex>
      <panel title="Projects">
        <!--the online tutorial changes this into a navigateTo method
        I chose to keep it here because i like the styling-->
        <router-link slot="action" :to="{name: 'projects-create'}">
          <v-btn fab class="yellow darken-1" small absolute right middle>
            <v-icon>add</v-icon>
          </v-btn>
        </router-link>
        <div v-for="project in projects" :key="project.id"> <!--the name of the project will be the unique identifier-->
          <v-layout>
            <v-flex class="text">
              <div class="project-name" bold>
                Project Name: {{project.name}}
              </div>
              <div class="project-creator">
                Student Email: {{project.creator}}
              </div>
              <div class="project-skills">
                Skills Needed: {{project.skills}}
              </div>
              <div class="project-description">
                Project Description: {{project.description}}
              </div>
              <!--COMEBACK AND FIX THIS!-->
              <v-btn dark class="light-blue darken-4"
                @click="navigateTo({name: 'profile', params: {projectId: project.id}})">
                View Project
              </v-btn>
            </v-flex>
          </v-layout>
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
.text {
  text-align: left;
  padding: 10px;
}
.project-name {
  font-size: 18px;
  font-weight: bold;
}
</style>
