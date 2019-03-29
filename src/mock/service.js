import axios from 'axios';
export default class Service {
  _get() {
    return axios.get('/api/agentsData');
  }
  _filterData(res) {
    return {
      status: res.status,
      data: res.data
    }
  }
  queryAgents(queryAgentsParam, cb) {
    this._get().then((res) => {
      setTimeout(() => {
        cb(this._filterData(res))
      }, 0);
    });
  }
}
