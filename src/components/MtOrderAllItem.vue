<template>
  <div class="mt-order-all-item">

    <div class="top-container">

      <nut-row
        type="flex"
        align="center"
      >

        <nut-col span="3">
          <img
            src="image/icon_common.png"
            alt=""
          >
        </nut-col>

        <nut-col span="17">
          <span>按时缴费；劳动发斯蒂芬</span>

        </nut-col>

        <nut-col span="4">
          <span class="top-container-right-p">已完成</span>

        </nut-col>

      </nut-row>

    </div>

    <div class="bottom-line">
    </div>

    <div class="center-container">


      <nut-row
        type="flex"
        
      >

        <nut-col span="4">
          <img
            src="http://www.sotu.cc/d/file/gqmn/2019-10-31/00127989.jpg"
            alt=""
          >
        </nut-col>

        <nut-col span="20">
          <p>发生法撒旦法是</p>
          <p>发送到发送发送到</p>
          <p>发送到发送发送到</p>

        </nut-col>

      </nut-row>

    </div>

    <div class="bottom-container">
      <p>再来一单</p>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mt-order-all-item {
    background: white;
  padding: 10px;
  .top-container {
    height: 30px;
    img {
      margin-left: 5px;
      margin-top: 5px;
      width: 20px;
      height: 20px;
    }
    span {
      font-size: 12px;
    }
    .top-container-right-p{
        color :gray;
    }
  }

  .bottom-line {
    height: 0.5px;
    background: rgb(243, 243, 243);
  }

  .center-container {
    height: 60px;
    margin-top: 5px;
    img {
      width: 50px;
      height: 60px;
    }
    p{
        margin: 0px;
        padding-left:10px ;
        font-size: 10px;
    }
  }

  .bottom-container {
    text-align: end;
    p{
        margin: 0px;
        font-size: 12px;
    }
  }
}
</style>