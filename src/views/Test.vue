<template>
  <div class="about">
    <el-button @click="showMessagePop">显示Popup消息</el-button>
    <el-button @click="getSlotConfig">调用代理接口(dev)</el-button>
    <br/>
    <button class="button-bordered">scss样式测试</button>
    <br/>
    <button class="button-base">scss样式测试</button>
    <br/>
    <button class="button-stylish">scss样式测试</button>
    <test-componet msg="一条消息"/>
    <!-- <test-componet msg="两条消息">非默认又是一个样子的</test-componet> -->
  </div>
</template>

<script>
import TestComponet from '@/components/TestComponet.vue'
export default {
  mounted(){
    this.$store.dispatch('fetchDemo')
    this.$store.dispatch('fetchDemo1')
  },
  methods: {
    showMessagePop(){
      this.$swal({
        type: 'warning',
        title: '测试消息弹窗',
        showConfirmButton: true,
        showCancelButton: true
      })
    },
    getSlotConfig(){
      this.$store.dispatch('fetchGameConfig').then(res => {
        console.log('查询完成')
      })
    }
  },
  components: {TestComponet}
}
</script>

<style lang="sass">

</style>


