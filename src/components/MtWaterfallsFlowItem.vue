<template>
  <div class="mt-waterfallsFlow-item" @click="waterfallsFlowItemClick">
    <img
      :src='img_url'
      alt=""
    >
    <div class="mt-waterfallsFlow-bottom-container-div">
        <p>东方明珠广播电视塔</p>
    <p>姥姥家的小区</p>
    <p>10块钱按</p>
    <p>已售90000份</p>
    </div>

  </div>
</template>

<script>
export default {
    props:{
        img_url:{
            type:String,
            default:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594627152552&di=04c36010f872d314df0095f925ffcaea&imgtype=0&src=http%3A%2F%2Fwww.furuizhi.com%2Fupfiles%2Fimage%2F201401%2F201401071420556275.png"
        }
    },
    methods:{
        waterfallsFlowItemClick(){
            this.$emit('waterfallsFlowItemClickFun');
        }
    },
};
</script>

<style lang="scss">
.mt-waterfallsFlow-item {
  width: 49%;
  .mt-waterfallsFlow-bottom-container-div{
      background: white;
  }
}
</style>>
