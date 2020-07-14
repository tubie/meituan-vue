<template>
  <div
    class="mt-waterfallsFlow-item"
    @click="waterfallsFlowItemClick"
  >
    <img
      :src='imgUrl'
      alt=""
    >
    <div class="mt-waterfallsFlow-bottom-container-div">
      <p class="mt-waterfallsFlow-bottom-firstText">{{firstText}}</p>
      <p class="mt-waterfallsFlow-bottom-secondText">{{secondText}}</p>
      <p class="mt-waterfallsFlow-bottom-thirdText">{{thirdText}}</p>
      <p class="mt-waterfallsFlow-bottom-fourText">{{fourText}}</p>
    </div>

  </div>
</template>


<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: ""
    },
    firstText: {
      type: String,
      default: ""
    },
    secondText: {
      type: String,
      default: ""
    },
    thirdText: {
      type: String,
      default: ""
    },
    fourText: {
      type: String,
      default: ""
    }
  },
  methods: {
    waterfallsFlowItemClick() {
      this.$emit("waterfallsFlowItemClickFun");
    }
  }
};
</script>

<style lang="scss">
.mt-waterfallsFlow-item {
  padding: 5px;
  width: 49%;
  border-radius: 10px;
  p {
    margin: 0px;
    margin-left: 5px;
  }
  .mt-waterfallsFlow-bottom-container-div {
    background: white;
    .mt-waterfallsFlow-bottom-firstText {
      font-size: 16;
      font-weight: 700;
      color: black;
    }
    .mt-waterfallsFlow-bottom-secondText {
      color: red;
      font-size: 10px;
    }

    .mt-waterfallsFlow-bottom-thirdText {
      color: red;
      font-size: 10px;
    }
    .mt-waterfallsFlow-bottom-fourText {
      color: gray;
      font-size: 2px;
    }
  }
}
</style>>
