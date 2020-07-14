<template>
  <div class="mt-mine-wallet-item-container">
    <p class="top-p">{{topTitle}}</p>
    <p class="center-p">{{centerTitle}}</p>
    <p class="bottom-p">{{bottomTitle}}</p>

  </div>
</template>

<script>
export default {
    props:{
        topTitle:{
            type:String
        },
         centerTitle:{
            type:String
        },
         bottomTitle:{
            type:String
        }
    }
};
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
    font-weight: 700;
  }

  .center-p {
    font-size: 5px;
    color: black;
  }

  .bottom-p {
    font-size: 1px;
    color: gray;
  }
}
</style>