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
        :imgUrl='item.imgUrl'
        :title="item.title"
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
        :firstText='item.firstText'
        :secondText='item.secondText'
        :thirdText='item.thirdText'
        :fourText='item.fourText'
        :imgUrl='item.imgUrl'
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
        { imgUrl: "image/home/icon_home_class_takeaway.png", title: "外卖" },
        { imgUrl: "image/home/icon_home_class_food.png", title: "美食" },
        { imgUrl: "image/home/icon_home_class_hotle.png", title: "酒店住宿" },
        { imgUrl: "image/home/icon_home_class_play.png", title: "休闲娱乐" },
        { imgUrl: "image/home/icon_home_class_movice.png", title: "电影演出" },
        { imgUrl: "image/home/icon_home_class_car.png", title: "打车" },
        { imgUrl: "image/home/icon_home_class_uppay.png", title: "充值中心" },
        { imgUrl: "image/home/icon_home_class_beautify.png", title: "丽人" },
        { imgUrl: "image/home/icon_home_class_money.png", title: "省钱专区" },
        {
          imgUrl: "image/home/icon_home_class_trainticket.png",
          title: "火车票/机票"
        },
        { imgUrl: "image/home/icon_home_class_fruit.png", title: "免费领水果" },
        {
          imgUrl: "image/home/icon_home_class_kangaroo.png",
          title: "袋鼠快跑"
        },
        { imgUrl: "image/home/icon_home_class_coupon.png", title: "红包签到" },
        { imgUrl: "image/home/icon_home_class_hear.png", title: "美发" },
        { imgUrl: "image/home/icon_home_class_house.png", title: "超市酒店" }
      ],
      waterFlowlist: [
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594718927675&di=21f6560b7420e6c24b3e345e0a2c49be&imgtype=0&src=http%3A%2F%2Fpic197.nipic.com%2Ffile%2F20181217%2F26823374_215857549000_2.jpg",
          firstText: "汉堡王",
          secondText: "4.6分",
          thirdText: "满5减3",
          fourText: "人均￥13|月销999"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594718927675&di=21f6560b7420e6c24b3e345e0a2c49be&imgtype=0&src=http%3A%2F%2Fpic197.nipic.com%2Ffile%2F20181217%2F26823374_215857549000_2.jpg",
          firstText: "汉堡王",
          secondText: "4.6分",
          thirdText: "满5减3",
          fourText: "人均￥13|月销999"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594718927675&di=21f6560b7420e6c24b3e345e0a2c49be&imgtype=0&src=http%3A%2F%2Fpic197.nipic.com%2Ffile%2F20181217%2F26823374_215857549000_2.jpg",
          firstText: "汉堡王",
          secondText: "4.6分",
          thirdText: "满5减3",
          fourText: "人均￥13|月销999"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594718927675&di=21f6560b7420e6c24b3e345e0a2c49be&imgtype=0&src=http%3A%2F%2Fpic197.nipic.com%2Ffile%2F20181217%2F26823374_215857549000_2.jpg",
          firstText: "汉堡王",
          secondText: "4.6分",
          thirdText: "满5减3",
          fourText: "人均￥13|月销999"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594718927675&di=21f6560b7420e6c24b3e345e0a2c49be&imgtype=0&src=http%3A%2F%2Fpic197.nipic.com%2Ffile%2F20181217%2F26823374_215857549000_2.jpg",
          firstText: "汉堡王",
          secondText: "4.6分",
          thirdText: "满5减3",
          fourText: "人均￥13|月销999"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594718927675&di=21f6560b7420e6c24b3e345e0a2c49be&imgtype=0&src=http%3A%2F%2Fpic197.nipic.com%2Ffile%2F20181217%2F26823374_215857549000_2.jpg",
          firstText: "汉堡王",
          secondText: "4.6分",
          thirdText: "满5减3",
          fourText: "人均￥13|月销999"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594718927675&di=21f6560b7420e6c24b3e345e0a2c49be&imgtype=0&src=http%3A%2F%2Fpic197.nipic.com%2Ffile%2F20181217%2F26823374_215857549000_2.jpg",
          firstText: "汉堡王",
          secondText: "4.6分",
          thirdText: "满5减3",
          fourText: "人均￥13|月销999"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594718927675&di=21f6560b7420e6c24b3e345e0a2c49be&imgtype=0&src=http%3A%2F%2Fpic197.nipic.com%2Ffile%2F20181217%2F26823374_215857549000_2.jpg",
          firstText: "汉堡王",
          secondText: "4.6分",
          thirdText: "满5减3",
          fourText: "人均￥13|月销999"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594718927675&di=21f6560b7420e6c24b3e345e0a2c49be&imgtype=0&src=http%3A%2F%2Fpic197.nipic.com%2Ffile%2F20181217%2F26823374_215857549000_2.jpg",
          firstText: "汉堡王",
          secondText: "4.6分",
          thirdText: "满5减3",
          fourText: "人均￥13|月销999"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594718927675&di=21f6560b7420e6c24b3e345e0a2c49be&imgtype=0&src=http%3A%2F%2Fpic197.nipic.com%2Ffile%2F20181217%2F26823374_215857549000_2.jpg",
          firstText: "汉堡王",
          secondText: "4.6分",
          thirdText: "满5减3",
          fourText: "人均￥13|月销999"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594718927675&di=21f6560b7420e6c24b3e345e0a2c49be&imgtype=0&src=http%3A%2F%2Fpic197.nipic.com%2Ffile%2F20181217%2F26823374_215857549000_2.jpg",
          firstText: "汉堡王",
          secondText: "4.6分",
          thirdText: "满5减3",
          fourText: "人均￥13|月销999"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594718927675&di=21f6560b7420e6c24b3e345e0a2c49be&imgtype=0&src=http%3A%2F%2Fpic197.nipic.com%2Ffile%2F20181217%2F26823374_215857549000_2.jpg",
          firstText: "汉堡王",
          secondText: "4.6分",
          thirdText: "满5减3",
          fourText: "人均￥13|月销999"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594718927675&di=21f6560b7420e6c24b3e345e0a2c49be&imgtype=0&src=http%3A%2F%2Fpic197.nipic.com%2Ffile%2F20181217%2F26823374_215857549000_2.jpg",
          firstText: "汉堡王",
          secondText: "4.6分",
          thirdText: "满5减3",
          fourText: "人均￥13|月销999"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594718927675&di=21f6560b7420e6c24b3e345e0a2c49be&imgtype=0&src=http%3A%2F%2Fpic197.nipic.com%2Ffile%2F20181217%2F26823374_215857549000_2.jpg",
          firstText: "汉堡王",
          secondText: "4.6分",
          thirdText: "满5减3",
          fourText: "人均￥13|月销999"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594718927675&di=21f6560b7420e6c24b3e345e0a2c49be&imgtype=0&src=http%3A%2F%2Fpic197.nipic.com%2Ffile%2F20181217%2F26823374_215857549000_2.jpg",
          firstText: "汉堡王",
          secondText: "4.6分",
          thirdText: "满5减3",
          fourText: "人均￥13|月销999"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594718927675&di=21f6560b7420e6c24b3e345e0a2c49be&imgtype=0&src=http%3A%2F%2Fpic197.nipic.com%2Ffile%2F20181217%2F26823374_215857549000_2.jpg",
          firstText: "汉堡王",
          secondText: "4.6分",
          thirdText: "满5减3",
          fourText: "人均￥13|月销999"
        },
         
      ],
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
    padding-left: 5px;
    padding-right: 5px;
  }
  .mint-swipe {
    padding: 10px;
  }
}
</style>