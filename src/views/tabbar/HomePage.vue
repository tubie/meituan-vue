<template>

  <div class="home-div">

    <nut-tabbar
      @tab-switch="tabSwitch1"
      :tabbar-list="tabList1"
    ></nut-tabbar>

    <!-- <mt-swipe :auto="0">
      <mt-swipe-item
        v-for='(item , index ) in mt9SquaresItemPages'
        :key='index'
      >
        <div class="mtItem-container-div">
          <Mt9SquaresItem
            v-for='(item , index ) in meituanItemList'
            :key='index'
          ></Mt9SquaresItem>
        </div>
      </mt-swipe-item>
    </mt-swipe> -->

    <div class="mtItem-container-div">
      <Mt9SquaresItem
        v-for='(item , index ) in meituanItemList'
        :key='index'
      ></Mt9SquaresItem>
    </div>

    <mt-swipe :auto="4000">
      <mt-swipe-item
        v-for=' (item ,index) in swipeList '
        :key="index"
      >
        <img
          :src='item.imgUrl'
          alt=""
        >
      </mt-swipe-item>
    </mt-swipe>

    <div class="waterFlowContainer-div">
      <MtWaterfallsFlowItem
        v-for="(item, index) in waterFlowlist"
        :key="index"
      ></MtWaterfallsFlowItem>
    </div>

  </div>

</template>

<script>
import Mt9SquaresItem from "../../components/Mt9SquaresItem.vue";
import MtWaterfallsFlowItem from "../../components/MtWaterfallsFlowItem.vue";

export default {
  name: "home",
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
      swipeList: [
        {
          imgUrl:
            "http://img5.imgtn.bdimg.com/it/u=3837875987,2852737972&fm=15&gp=0.jpg"
        },
        { imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594627152552&di=04c36010f872d314df0095f925ffcaea&imgtype=0&src=http%3A%2F%2Fwww.furuizhi.com%2Fupfiles%2Fimage%2F201401%2F201401071420556275.png" },
        {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg"
        }
      ],
      meituanItemList: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"
      ],
      waterFlowlist: [
        "1",
        "2",
        "3",
        "2",
        "3",
        "2",
        "3",
        "2",
        "3",
        "2",
        "3",
        "2",
        "3",
        "2",
        "3",
        "2",
        "3",
        "2",
        "3",
        "2"
      ],
      mt9SquaresItemPages: ["1", "2", "3"]
    };
  },
  methods: {
    tabSwitch1: function(value, index) {
      console.log(index);
    }
  },
  components: {
    Mt9SquaresItem,
    MtWaterfallsFlowItem
  }
};
</script>

<style lang="scss" scoped>
.home-div {
  .nut-tabbar {
    background: rgba(244, 191, 66, 1);
    margin-top: 0px;
  }
  .mint-swipe {
    height: 180px;
  }
  .mtItem-container-div {
    background: white;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    //   justify-content: space-between;
  }
  .waterFlowContainer-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
  }
  .mint-swipe {
    padding: 10px;
  }
}
</style>