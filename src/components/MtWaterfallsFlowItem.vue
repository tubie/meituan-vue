<template>
  <div class="mt-waterfallsFlow-item">
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
            default:"http://www.sotu.cc/d/file/gqmn/2019-10-31/00127989.jpg"
        }
    }
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
