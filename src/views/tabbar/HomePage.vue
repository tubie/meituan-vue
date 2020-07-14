<template>

  <div class="home-div">

    <div class="home-top-class-item-container">
      <Mt9SquaresItem
        :isFourColumns='true'
        v-for='(item , index ) in homeTopClassData'
        :title="item.title"
        :imgUrl='item.imgUrl'
        :key='index'
      ></Mt9SquaresItem>
    </div>

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
        :isFourColumns='false'
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
      homeTopClassData: [
        {
          title: "扫一扫",
          imgUrl: "image/home/icon_home_top_scan.png"
        },
        {
          title: "付款码",
          imgUrl: "image/home/icon_home_top_pay.png"
        },
        {
          title: "红包/卡券",
          imgUrl: "image/home/icon_home_top_coupon.png"
        },
        {
          title: "骑车",
          imgUrl: "image/home/icon_home_top_drive.png"
        }
      ],
      swipeList: [
        {
          imgUrl:
            "http://img5.imgtn.bdimg.com/it/u=3837875987,2852737972&fm=15&gp=0.jpg"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594627152552&di=04c36010f872d314df0095f925ffcaea&imgtype=0&src=http%3A%2F%2Fwww.furuizhi.com%2Fupfiles%2Fimage%2F201401%2F201401071420556275.png"
        },
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
  .home-top-class-item-container {
    background: rgba(244, 191, 66, 1);
    margin-top: 0px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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