<template>
  <div
    class="list-item"
    :style="{borderColor: statusColor[item.status]}"
    @click="consoleData"
  >
    <div class="os-icon">
      <img :src="getOsIcon(item.os)" @error="imgError">
    </div>
    <div class="item-details">
      <div class="infos row">
        <div class="col-sm-5 col-xs-12">
          <div class="info">
            <i class="icon-desktop"></i>
            <span class="name">{{item.name}}</span>
          </div>
        </div>
        <div class="info-status col-sm-1 col-xs-12">
          <div class="info">
            <span
              class="status"
              :style="{background: statusColor[item.status]}"
            >{{item.status}}</span>
          </div>
        </div>
        <div class="col-sm-3 col-xs-12">
          <div class="info">
            <i class="icon-info"></i>
            <span>{{item.ip}}</span>
          </div>
        </div>
        <div class="col-sm-3 col-xs-12">
          <div class="info">
            <i class="icon-folder"></i>
            <span>{{item.location}}</span>
          </div>
        </div>
      </div>
      <user-operating :item="item"></user-operating>
    </div>
  </div>
</template>
<script>
import {getOsIcon, imgError} from './../../Common/util.js';
import UserOperating from './UserOperating.vue'
export default {
  components: {
    UserOperating
  },
  data() {
    return {
      statusColor: {
        building: '#FF9A2A',
        idle: '#7FBC39'
      },
      // infos: [
      //   {key: 'name', value: '',class: 'col-sm-5', icon: 'icon-desktop'},
      //   {key: 'status', value: '',class: 'col-sm-1 info-status', icon: 'icon-info'},
      //   {key: 'ip', value: '',class: 'col-sm-3', icon: ''},
      //   {key: 'location', value: '',class: 'col-sm-3', icon: ''}
      // ]
    }
  },
  props: {
    item: Object
  },
  computed: {
    // listRenderData() {
    //   this.infos.forEach((e) =>{
    //     e[e.value] = this.item[e.key]
    //   })
    //   return this.infos
    // }
  },
  methods: {
    getOsIcon(os) {
      return getOsIcon(os)
    },
    imgError(e) {
      return imgError(e)
    },
    consoleData() {
      console.log(this.item);
    }
  }
}
</script>
<style lang="scss">
.list-item{
  display: flex;
  justify-items: center;
  margin-bottom: 15px;
  padding: 15px;
  background: #fff;
  font-size: 14px;
  .os-icon{
    width: 80px;
    height: 80px;
    img{
      object-fit: cover;
    }
  }
  .item-details{
    flex: 1;
    .infos{
      .info{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        i{
          font-size: 16px;
          margin-right: 10px;
        }
        .name{
          color: #00B4CF;
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .status{
          color: #fff;
          padding: 3px 5px;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
