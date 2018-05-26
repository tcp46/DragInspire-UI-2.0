<template>
  <v-layout>
    <v-flex xs8 class="info">
      <panel title="More on Clicked Project">
        <div class="project-name" bold>
          Project Name: {{project.name}}
        </div>
        <br>
        <div class="project-creator">
          Student Email: <br>
          {{project.creator}} <br>
          <!--Change to the particular student profile based on their email-->
          <v-btn dark class="light-blue darken-4" :to="{name: 'project', params: {projectId: project.id}}">
            Student Profile
          </v-btn>
        </div>
        <br>
        <div class="project-skills">
          Skills Needed: <br>
          {{project.skills}}
        </div>
        <br>
        <div class="project-description">
          Project Description: <br>
          {{project.description}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import ProjectsService from '@/services/ProjectsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      project: {}
    }
  },
  async mounted () {
    const projectId = this.$store.state.route.params.projectId
    this.project = (await ProjectsService.show(projectId)).data
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
.project-name {
  font-size: 18px;
  font-weight: bold;
}
.info {
  text-align: left;
  border: none;
  border-style: none;
  border-color: transparent;
  overflow: auto;
}
</style>
