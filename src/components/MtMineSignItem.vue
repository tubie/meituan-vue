<template>
  <div class="mt-minesign-item">

    <nut-row
      type="flex"
      align="center"
    >

      <nut-col span="20">
        <p class="mt-minesign-item-top-p">{{title}}</p>
        <p class="mt-minesign-item-bottom-p"> {{subtitle}}</p>
      </nut-col>

      <nut-col span="4">
        <img
          :src="imgUrl"
          alt=""
        >
      </nut-col>
    </nut-row>

  </div>

</template>

<script>
export default {
  props:{
    title:{
      type:String
    },
    subtitle:{
      type:String
    },
    imgUrl:{
      type:String,
      default:"image/icon_common.png"
    }
  }
};
</script>

<style lang="scss" scoped>
.mt-minesign-item {
  background: white;
  margin: 5px;
  width: 45%;
  p {
    margin: 0px;
  }
  .mt-minesign-item-top-p {
    color: black;
    font-size: 14px;
  }
  .mt-minesign-item-bottom-p {
    color: red;
    font-size: 1px;
  }
}
</style>