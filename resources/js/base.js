import { createStore } from 'vuex'
import Global from './store/Global.js'

const store = createStore({
  modules: {
    Global: Global
  }
});

export default store