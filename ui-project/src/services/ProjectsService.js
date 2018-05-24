import Api from '@/services/Api'

export default {
  index () {
    return Api().get('projects')
  }, // will return all the projects
  post (project) {
    return Api().post('projects', project)
  }
}
