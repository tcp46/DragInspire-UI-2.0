import Api from '@/services/Api'

export default {
  show (profileId) {
    return Api().get(`projects/${profileId}`)
  },
  post (profile) {
    return Api().post('profiles', profile)
  }
}
