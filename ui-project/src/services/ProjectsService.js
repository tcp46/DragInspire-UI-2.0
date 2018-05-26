import Api from '@/services/Api'

export default {
  index () {
    return Api().get('projects')
  }, // will return all the projects
  show (projectId) {
    return Api().get(`projects/${projectId}`)
  },
  post (project) {
    return Api().post('projects', project)
  }
}
