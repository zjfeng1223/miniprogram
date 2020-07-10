<template>
  <div class="page">
    <top-handle text="账单"></top-handle>
    <view class="page__bd page__bd_spacing">
      <div class="selected-date">
        <picker mode="date" fields="month" @change="bindDateChange">
          <p>{{selectDate}}</p>
        </picker>
      </div>
      <div class="panel">
        <p class="title">
          <span>总支出</span>
        </p>
        <h3 class="num">0</h3>
        <p class="handle">
          <span class="tips">
            总收入
            <i class="n">0</i>
          </span>

          <span class="tips">
            剩余预算
            <i class="n">0</i>
          </span>
        </p>
      </div>
    </view>

    <van-button type="primary">按钮</van-button>
    <div class="is-empty" @click="onShow">
      <div>图标</div>
      <p>点击此处来添加本月的第一笔数据吧~</p>
    </div>
    <van-popup :show="isShow" round position="bottom" custom-style="height: 90%" @close="onClose">内容</van-popup>
  </div>
</template><script>
import { formatTime } from '@/utils/index'
export default {
  data () {
    return {
      isShow: false,
      date: '',
      selectDate: formatTime(new Date(), true)
    }
  },

  methods: {
    onShow () {
      this.isShow = true
    },
    onClose () {
      this.isShow = false
    },
    bindDateChange (e) {
      let arr = e.target.value.split('-')
      this.selectDate = arr[0] + '年' + arr[1] + '月'
      console.log(e.target.value.split('-'))
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev) // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>
<style scoped lang="scss">
.page {
  .selected-date {
    font-weight: bold;
    font-size: 18px;
  }
  .panel {
    margin: 10px 0;
    padding: 10px;
    background-color: #fff;
    border-radius: 6px;
    .title {
      font-size: 14px;
      color: #ff5b39;
    }
    .num {
      font-size: 32px;
      font-weight: bold;
    }
    .handle {
      font-size: 14px;
      .tips {
        color: #979797;
        margin-right: 20px;
        .n {
          display: inline;
          color: #4d4c4d;
          padding: 0 5px;
        }
      }
    }
  }
  .is-empty {
    padding: 20px;
    text-align: center;
    color: #989898;
  }
}
</style>