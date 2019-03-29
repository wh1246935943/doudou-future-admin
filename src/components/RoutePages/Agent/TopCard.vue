<template>
  <div class="top-card row">
    <div class="col-sm-4 col-xs-6">
      <div class="card-item building">
        <i class="bg-icon icon-cog"></i>
        <div class="name">Building</div>
        <div class="quantity">3</div>
      </div>
    </div>
    <div class="col-sm-4 col-xs-6">
      <div class="card-item idle">
        <i class="bg-icon icon-coffee"></i>
        <div class="name">Idle</div>
        <div class="quantity">5</div>
      </div>
    </div>
    <div class="col-sm-4 col-xs-12">
      <div class="card-types row">
        <div
          class="type col-lg-4 col-md-12 col-sm-12 col-xs-4"
          v-for="(item, index) in typeList"
          :key="index"
        >
          <div class="name col-lg-12 col-md-6 col-sm-6 col-xs-12">{{item.type}}</div>
          <div class="quantity col-lg-12 col-md-6 col-sm-6 col-xs-12">{{item.quantity}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      typeList: [
        {type: 'ALL', quantity: '11'},
        {type: 'PHYSICAL', quantity: '5'},
        {type: 'VIRTUAL', quantity: '6'}
      ]
    }
  }
}
</script>
<style lang="scss">
.top-card{
  .card-item{
    width: 100%;
    height: 130px;
    padding: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    .bg-icon{
      position: absolute;
      top: -9px;
      font-size: 144px;
      opacity: 0.2;
      left: 50%;
      transform: translateX(-50%);
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
