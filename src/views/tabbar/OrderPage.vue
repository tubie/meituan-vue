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

   <div class="mt-swipe-containter">
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
   </div>


   <div class="mt-orderAllItem-container" v-for="(item ,index) in orderListData" :key="index"> 
       <MtOrderAllItem
       :topIconUrl='item.topIconUrl'
       :topTitle='item.topTitle'
       :topSubTitle='item.topSubTitle'
       :bottomImgUrl='item.bottomImgUrl'
       :bottomTopTitle='item.bottomTopTitle'
       :bottomCenterTitle='item.bottomCenterTitle'
       :bottomBottomTitle='item.bottomBottomTitle'
       :rightTitle='item.rightTitle'
       :key="index"
       ></MtOrderAllItem>
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
        "全部",
        "待付款",
        "待使用",
        "待评价",
        "退款/售后",
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
      ],
      orderListData:[
        {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },

        {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },

           {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },

        {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },
           {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },

        {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },
           {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },

        {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },
           {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },

        {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },
           {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },

        {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },
           {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },

        {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },
           {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },

        {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },
           {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },

        {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },
           {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },

        {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },
           {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },

        {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },
           {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },

        {
          topIconUrl:"image/icon_common.png",
          topTitle:"魔法门VR(南京东路店)",
          topSubTitle:"已消费",

          bottomImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594721236739&di=b74f4aa9ad189a8fc37f7cc6f58f7184&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20170525%2F49602448841495693969.jpg",
          bottomTopTitle:"预定时间：2020-06-26 13:00",
          bottomCenterTitle:"VR游戏任选1小时",
          bottomBottomTitle:"总价：248.00",
          rightTitle:"再来一单",
        },

         
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
  .mt-swipe-containter{
      padding: 5px;
  }
}

.mui-control-item {
  font-size: 12px;
}
</style>