<template>
  <div class="top-card row">
    <div class="col-sm-4 col-xs-6">
      <div class="card-item building">
        <i class="bg-icon icon-cog"></i>
        <div class="name">Building</div>
        <div class="quantity">{{statusObj.building&&statusObj.building.length||0}}</div>
      </div>
    </div>
    <div class="col-sm-4 col-xs-6">
      <div class="card-item idle">
        <i class="bg-icon icon-coffee"></i>
        <div class="name">Idle</div>
        <div class="quantity">{{statusObj.idle&&statusObj.idle.length||0}}</div>
      </div>
    </div>
    <div class="col-sm-4 col-xs-12">
      <div class="card-types row">
        <div
          class="type col-lg-4 col-md-12 col-sm-12 col-xs-4"
          v-for="(item, key) in typeObj"
          :key="key"
        >
          <div class="name col-lg-12 col-md-6 col-sm-6 col-xs-12">{{item.type}}</div>
          <div class="quantity col-lg-12 col-md-6 col-sm-6 col-xs-12">{{item.quantity}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['agents_list']),
    statusObj() {
      let status = {};
      Object.values(this.agents_list).forEach(element => {
        if (status.hasOwnProperty(element.status)) {
          status[element.status].push(element);
          return
        }
        this.$set(status, element.status, [element])
      });
      return status
    },
    typeObj() {
      let typeObj = {
        all: {type: 'ALL', quantity: 0},
        physical: {type: 'PHYSICAL', quantity: 0},
        virtual: {type: 'VIRTUAL', quantity: 0}
      };
      if (!this.agents_list) return typeObj;
      Object.values(this.agents_list).forEach(element => {
        typeObj[element.type].quantity++
      });
      typeObj.all.quantity = Object.values(this.agents_list).length;
      return typeObj
    }
  }
}
</script>
<style lang="scss">
.top-card{
  user-select: none;
  .card-item{
    width: 100%;
    height: 130px;
    padding: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    &:hover{
      .icon-cog{
        transform: rotate(360deg);
        transition: transform 2s;
        transform-origin: center center;
        // animation: iconRotate 3s linear infinite;
      }
    }
    .bg-icon{
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 144px;
      opacity: 0.2;
      margin-top: -72px;
      margin-left: -72px;
    }
    .name{
      font-size: 18px;
      font-weight: bold;
    }
    .quantity{
      font-size: 48px;
      align-self: flex-end;
    }
  }
  .building{
    background: #FF9A2A;
  }
  .idle{
    background: #7FBC39;
  }
  .card-types{
    width: 100%;
    background: #fff;
    color: #2c3e50;
    .type{
      cursor: default;
      user-select: none;
      .name, .quantity{
        height: 50%;
      }
      .name{
        font-size: 12px;
      }
      .quantity{
        font-size: 20px;
      }
    }
  }
}
</style>
