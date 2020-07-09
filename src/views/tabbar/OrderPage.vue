<template>

  <div
    id="orderpage"
    class="orderpage"
  >

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


   <div class="mt-orderAllItem-container" v-for="(item ,index) in titleList" :key="index"> 
       <MtOrderAllItem></MtOrderAllItem>
   </div>




    <!-- <ul>
      <li
        v-for='(item,index) in waterFlowlist'
        :key="index"
      >
        <img v-lazy="item.src">
      </li>
    </ul> -->

  </div>

</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
import MtOrderAllItem from "../../components/MtOrderAllItem.vue";

export default {
  name: "orderpage",
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
      swipeList: [
        {
          imgUrl:
            "http://img5.imgtn.bdimg.com/it/u=3837875987,2852737972&fm=15&gp=0.jpg"
        },
        { imgUrl: "http://www.sotu.cc/d/file/gqmn/2019-10-31/00127989.jpg" },
        {
          imgUrl:
            "http://img34.51tietu.net/pic/2016-120603/20161206033037ursxowkuxsp155172.jpg"
        }
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
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  components:{
      MtOrderAllItem,}
}
</script>

<style lang="scss" scoped>
.orderpage {
  background: white;
  // padding: 10px;
  .mint-swipe {
    height: 80px;
  }
  .mt-orderAllItem-container{
      background: rgb(243, 243, 243);
      padding: 5px,;
  }
}

.mui-control-item {
  font-size: 12px;
}
</style>