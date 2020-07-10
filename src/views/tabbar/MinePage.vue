<template>

  <div class="minepage">

    <nut-tabbar
      @tab-switch="tabSwitch1"
      :tabbar-list="tabList1"
    ></nut-tabbar>

    <div class="mtItem-container-div">
      <Mt9SquaresItem
        v-for='(item , index ) in meituanItemList'
        :key='index'
      ></Mt9SquaresItem>
    </div>

    <img
      src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=927515568,3155617026&fm=15&gp=0.jpg"
      alt=""
    >

    <div class="recommend-tool-container">

      <p> 推荐工具</p>

      <Mt9SquaresItem
        v-for='(item , index ) in recommendToolList'
        :key='index'
      ></Mt9SquaresItem>

    </div>

    <div class="mt-mine-signItem-container">

      <p> 互动签名</p>
      <div class="mt-mine-signItem-container-sub">
        <MtMineSignItem></MtMineSignItem>
        <MtMineSignItem></MtMineSignItem>
        <MtMineSignItem></MtMineSignItem>
        <MtMineSignItem></MtMineSignItem>
      </div>

    </div>

  </div>

</template>


<script>
import Mt9SquaresItem from "../../components/Mt9SquaresItem.vue";
import MtMineSignItem from "../../components/MtMineSignItem.vue";

export default {
  data() {
    return {
      tabList1: [
        {
          tabTitle: "日用品",
          curr: true,
          icon:
            "http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg",
          activeIcon:
            "http://img20.360buyimg.com/uba/jfs/t28675/125/569589124/2710/fe1b0e7c/5bf79218Nbc49fc24.jpg"
        },
        {
          tabTitle: "服饰",
          curr: false,
          icon:
            "http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg",
          activeIcon:
            "http://img14.360buyimg.com/uba/jfs/t28468/128/565494642/3313/ce508dd6/5bf79214Nab2a3076.jpg"
        },
        {
          tabTitle: "娱乐",
          curr: false,
          icon:
            "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
          activeIcon:
            "http://img11.360buyimg.com/uba/jfs/t27370/260/2117900302/3274/bd097e85/5bf7921bNafc526e2.jpg"
        },
        {
          tabTitle: "娱乐",
          curr: false,
          icon:
            "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
          activeIcon:
            "http://img11.360buyimg.com/uba/jfs/t27370/260/2117900302/3274/bd097e85/5bf7921bNafc526e2.jpg"
        }
      ],
      meituanItemList: ["1", "2", "3", "4", "5"],
      recommendToolList: ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"]
    };
  },
  components: {
    Mt9SquaresItem,
    MtMineSignItem
  }
};
</script>

<style lang="scss" scoped>
.minepage {
  .nut-tabbar {
    background: rgba(244, 191, 66, 1);
    margin-top: 0px;
  }
  .mtItem-container-div {
    background: white;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    //   justify-content: space-between;
  }
  img {
    padding: 10px;
    width: 100%;
    height: 80px;
    border-radius: 15px;
  }

  .recommend-tool-container {
    background: white;
    margin: 10px;
    border-radius: 8px;

    p {
      color: black;
      font-size: 14px;
      font-weight: 700; //加粗
      margin-left: 5px;
      padding-top: 5px;
    }
  }
  .mt-mine-signItem-container {
      background: white;
      border-radius: 10px;
      margin: 10px;
    p {
      color: black;
      font-size: 14px;
      font-weight: 700; //加粗
      margin-left: 5px;
      padding-top: 5px;
    }
    .mt-mine-signItem-container-sub {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
</style>