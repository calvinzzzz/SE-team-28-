import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('evidences')
  },

  addPost (params) {
    return Api().post('add_post', params)
  },

  addEvidence (params) {
    return Api().post('add_evidence', params)
  },

  updatePost (params) {
    return Api().put('posts/' + params.id, params)
  },

  getPost (params) {
    return Api().get('post/' + params.id)
  },

  deletePost (id) {
    return Api().delete('posts/' + id)
  }
}
