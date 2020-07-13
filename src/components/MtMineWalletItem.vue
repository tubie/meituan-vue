<template>
  <div class="mt-mine-wallet-item-container">
    <p class="top-p">999.99万</p>
    <p class="center-p">信用卡</p>
    <p class="bottom-p">我的额度</p>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mt-mine-wallet-item-container {
  width: 25%;
  p {
    text-align: center;
    margin: 0px;
  }

  .top-p {
    font-size: 14px;
    color: black;
  }

  .center-p {
    font-size: 5px;
    color: black;
  }

  .bottom-p {
    font-size: 3px;
    color: gray;
  }
}
</style>