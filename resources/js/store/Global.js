const Global = {
    state: { 
      translations: {}
    },
    mutations: {  
      setTranslations(state, item) {
        state.translations = item;
      }
    },
    actions: {
    },
    getters: {  
      getTranslations(state) {
        return state.translations;
      }
    }
  }
  
  export default Global