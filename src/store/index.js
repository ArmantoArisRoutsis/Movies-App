import { createStore } from 'vuex'

export default createStore({
  state: {
    toWatch:[],
    darkTheme:false
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
    },
    setTheme(state){
      this.state.darkTheme=!this.state.darkTheme
      if(this.state.darkTheme){
        document.body.classList.add('dark-body')
      }else{
        document.body.classList.remove('dark-body')
      }
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
