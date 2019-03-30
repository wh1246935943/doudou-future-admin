import Vue from 'vue';
const homeWork = {
  state: {
    agents: Object
  },
  mutations: {
    SET_AGENTS(state, data) {
      switch (data.flag) {
        case 0: {
          Vue.delete(state.agents, data.id)
          break;
        }
        case 1: {
          Vue.delete(state.agents[data.id].resources, data.index);
          break;
        }
        default: {
          state.agents = data;
        }
      }
    },
  }
};

export default homeWork;