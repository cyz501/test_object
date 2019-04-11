import vue from 'vue'

const mutations = {
  SET_APP_NAME (state, params) {
    state.appName = params
  },
  SEI_APP_VERSION (state) {
    vue.set(state, 'appVersion', 'v2.0')
  }
}
export default mutations
