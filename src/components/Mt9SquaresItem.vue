<template>
  <div
    class="mt-item-div"
    :style='currentStyle'
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
  },
  computed:{
    currentStyle:function(){
      if(this.isFourColumns === true){
        return {
          width:'25%'
        }
      }else{
          return {
          width:'20%'
        }
      }

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

