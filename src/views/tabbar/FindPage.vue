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
        :img_url='item.src'
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
        "测试1",
        "测试2",
        "测试3",
        "测试4",
        "测试5",
        "测试6",
        "测试7"
      ],
      waterFlowlist: [
        {
          src: "http://www.sotu.cc/d/file/gqmn/2019-10-31/00127989.jpg",
          title: "",
          subtitle: ""
        },
        {
          src: "http://www.sotu.cc/d/file/gqmn/2019-10-31/00127989.jpg",
          title: "",
          subtitle: ""
        },
        {
          src: "http://www.sotu.cc/d/file/gqmn/2019-10-31/00127989.jpg",
          title: "",
          subtitle: ""
        },
        {
          src: "http://www.sotu.cc/d/file/gqmn/2019-10-31/00127989.jpg",
          title: "",
          subtitle: ""
        },
        {
          src: "http://www.sotu.cc/d/file/gqmn/2019-10-31/00127989.jpg",
          title: "",
          subtitle: ""
        },
        {
          src: "http://www.sotu.cc/d/file/gqmn/2019-10-31/00127989.jpg",
          title: "",
          subtitle: ""
        },
        {
          src: "http://www.sotu.cc/d/file/gqmn/2019-10-31/00127989.jpg",
          title: "",
          subtitle: ""
        },
        {
          src: "http://www.sotu.cc/d/file/gqmn/2019-10-31/00127989.jpg",
          title: "",
          subtitle: ""
        }
      ]
    };
  },
  methods: {
    waterfallsFlowClick() {
      this.$router.push({
          path:"commonpagedatail"
      })
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
