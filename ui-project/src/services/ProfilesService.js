import Api from '@/services/Api'

export default {
  show (profileId) {
    return Api().get(`projects/${profileId}`)
  },
  post (project) {
    return Api().post('projects', project)
  }
}
