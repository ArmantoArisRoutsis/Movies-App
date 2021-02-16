import { createStore } from 'vuex'

export default createStore({
  state: {
    toWatch:[]
  },
  mutations: {
    addToList(state,movie){
      let counter = 0;
      state.toWatch.forEach(each => {
        each.imdbID===movie.imdbID&&counter++
      })
      if(counter===0){
        state.toWatch.push(movie)
      }else{
        state.toWatch = state.toWatch.filter(each=> each.imdbID!==movie.imdbID)
      }
      localStorage.setItem("watchList",JSON.stringify(state.toWatch));
    }
  },
  actions: {
    getData(state,data){
      this.state.toWatch = JSON.parse(data)
    }
  },
  modules: {
  }
})
