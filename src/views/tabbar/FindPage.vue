<template>

  <div class="find-container-div">

    <div
      id="slider"
      class="mui-slider"
    >
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >

        <!-- ：class 后面跟class 或表达式 -->
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',index===0 ? 'mui-active' :'' ]"
            v-for='(item, index) in titleList'
            :key="index"
          >
            {{item}}
          </a>

        </div>
      </div>

    </div>

    <!-- <ul>
      <li
        v-for='(item,index) in photoList'
        :key="index"
      >
        <img v-lazy="item.src">
      </li>
    </ul> -->

    <div class="waterFlowContainer-div">
      <MtWaterfallsFlowItem
        v-for="(item, index) in waterFlowlist"
        :key="index"
         :firstText='item.firstText'
        :secondText='item.secondText'
        :thirdText='item.thirdText'
        :fourText='item.fourText'
        :imgUrl='item.imgUrl'
        @waterfallsFlowItemClickFun='waterfallsFlowClick'
      ></MtWaterfallsFlowItem>
    </div>

  </div>

</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
import MtWaterfallsFlowItem from "../../components/MtWaterfallsFlowItem.vue";

export default {
  name: "findPage",
  data() {
    return {
      titleList: [
        "推荐",
        "丽人",
        "旅行",
        "电影",
        "美食",
        "结婚",
        "购物",
        "教培",
        "家装",
        "亲子",
        "运动健身",
        "宠物",
        "医美"
      ],
       waterFlowlist: [
        {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
          {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
          {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
        {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
          {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
          {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
         {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg",
          firstText: "大漂亮",
          secondText: "9.6分",
        },
        
      ],
    };
  },
  methods: {
    waterfallsFlowClick() {
      this.$router.push({
        path: "commonpagedatail"
      });
    }
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  components: {
    MtWaterfallsFlowItem
  }
};
</script>

<style lang="scss" scoped>
.find-container-div {
  img[lazy="loading"] {
    width: 40px;
    height: 300px;
    margin: auto;
  }

  .waterFlowContainer-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>>
