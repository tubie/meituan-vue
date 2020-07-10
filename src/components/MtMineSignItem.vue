<template>
  <div class="mt-minesign-item">

    <nut-row
      type="flex"
      align="center"
    >

      <nut-col span="20">
        <p class="mt-minesign-item-top-p">成都市大幅度</p>
        <p class="mt-minesign-item-bottom-p"> 成送到发光时代</p>
      </nut-col>

      <nut-col span="4">
        <img
          src="image/icon_common.png"
          alt=""
        >
      </nut-col>
    </nut-row>

  </div>

</template>

<script>
export default {};
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
    font-size: 10px;
  }
}
</style>