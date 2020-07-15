<template>
  <div class="Mt-common-pro-item">
    <img
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594802450326&di=9351e2ab8944e6917e9a8133bb5c02de&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F58b4ef69ed377.jpg"
      alt=""
    >

    <div class="right-div-container">
      <p class="right-div-top-p">上海海昌海洋公园</p>
      <p class="right-div-center-p">公园游乐场所</p>
      <p class="right-div-bottom-p">199元起</p>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Mt-common-pro-item {
  margin: 10px;
  padding: 10px;
  display: flex;
  background: white;
  border-radius: 10px;
  img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
  }
  .right-div-container {
    p {
      margin: 0px;
      margin-left: 10px;
    }

    .right-div-top-p {
        font-weight: 700;
        font-size:16px ;
        color: black;
    }

    .right-div-center-p {
        font-size:9px ;
        color: black;
    }

    .right-div-bottom-p {
        font-size:3px ;
        color: red;
    }
  }
}
</style>