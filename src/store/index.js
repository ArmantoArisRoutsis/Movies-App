import { createStore } from 'vuex'

export default createStore({
  state: {
    toWatch:[]
  },
  mutations: {
    addToList({commit},movie){
      let counter = 0;
      this.state.toWatch.forEach(each => {
        if(each.imdbID===movie.imdbID){
          counter++
        }
      });
      if(counter===0){
        this.state.toWatch.push(movie)
      }else{
        this.state.toWatch = this.state.toWatch.filter(each=> each.imdbID!==movie.imdbID)
      }
      localStorage.setItem("watchList",JSON.stringify(this.state.toWatch));
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
