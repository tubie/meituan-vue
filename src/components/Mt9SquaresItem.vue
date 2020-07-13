<template>
  <div
    class="mt-item-div"
    :style='isFourColumns === ture ? "width:25%" :"width:20%"'
  >
    <img
      :src='imgUrl'
      alt=""
    >
    <p>{{title}}</p>
  </div>
</template>



<script>
export default {
  props: {
    isFourColumns: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ""
    }
    ,
    imgUrl: {
      type: String,
      default: "image/icon_vip.png"
    }
  }
};
</script>



<style lang="scss" scoped>
.mt-item-div {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  // width: 20%;
  img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
  }
  p {
    color: #000;
    font-size: 5px;
  }
}
</style>>

