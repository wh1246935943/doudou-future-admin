import axios from 'axios';

var HTTP = axios.create({
  baseURL: 'http://localhost:3001',
});

export default class Service {
  _filterData(res) {
    return {
      status: res.status,
      data: res.data
    }
  }
  _get(api) {
    return HTTP.get(api);
  }
  _put(api, param) {
    return HTTP.put(api, param);
  }
  // 获取agents列表
  getAgents(cb) {
    this._get('/agents').then((res) => {
      console.log('Service.agents.getAgents:::', res);
      cb(this._filterData(res))
    });
  }
  // 更新agent
  updataAgent(param, cb) {
    this._put(`/agents/${param.id}`, param.body).then((res) => {
      console.log('Service.agents.updataAgent:::', res);
      cb(this._filterData(res))
    });
  }
}
