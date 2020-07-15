<template>

  <div class="minepage">

    <div class="mine-top-class-item-container">
      <Mt9SquaresItem
        :isFourColumns='true'
        v-for='(item , index ) in mineTopClassData'
        :title="item.title"
        :imgUrl='item.imgUrl'
        :key='index'
        @itemClickFun='mineTopClassItemClick'
      ></Mt9SquaresItem>
    </div>

    <div class="mtItem-container-div">
      <div class="mtItem-container-div-subContainer">
        <Mt9SquaresItem
          :isFourColumns='false'
          v-for='(item , index ) in mineTopClasSubData'
          :key='index'
          :title="item.title"
          :imgUrl='item.imgUrl'
        ></Mt9SquaresItem>
      </div>
    </div>

    <img
      src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=927515568,3155617026&fm=15&gp=0.jpg"
      alt=""
    >

    <div class="my-wallet-container">

      <p>我的钱包</p>

      <div class="my-wallet-container-center">

        <MtMineWalletItem
        v-for="(item , index) in walletListData" :key="index"
        :topTitle='item.topTitle'
        :centerTitle='item.centerTitle'
        :bottomTitle='item.bottomTitle'
        ></MtMineWalletItem>

      </div>

      <img
        src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=240449294,3505719360&fm=15&gp=0.jpg"
        alt=""
      >

    </div>

    <div class="recommend-tool-container">

      <p> 推荐工具</p>
      <div class="recommend-tool-subContainer">
        <Mt9SquaresItem
          :isFourColumns='true'
          v-for='(item , index ) in recommendToolList'
          :key='index'
          :imgUrl='item.imgUrl'
          :title="item.title"
        ></Mt9SquaresItem>
      </div>

    </div>

    <div class="mt-mine-signItem-container">

      <p> 互动签名</p>
      <div class="mt-mine-signItem-container-sub">
        <MtMineSignItem
          v-for="(item, index) in signListData"
          :key="index"
          :title="item.title"
          :subtitle='item.subtitle'
          :imgUrl='item.imgUrl'
        ></MtMineSignItem>
      </div>

    </div>

  </div>

</template>


<script>
import Mt9SquaresItem from "../../components/Mt9SquaresItem.vue";
import MtMineSignItem from "../../components/MtMineSignItem.vue";
import MtMineWalletItem from "../../components/MtMineWalletItem.vue";

export default {
  data() {
    return {
      mineTopClassData: [
        {
          title: "收藏",
          imgUrl: "image/icon_mine_top_class_collect.png"
        },
        {
          title: "评价",
          imgUrl: "image/icon_mine_top_class_commit.png"
        },
        {
          title: "足迹",
          imgUrl: "image/icon_mine_top_class_footer.png"
        },
        {
          title: "红包/卡券",
          imgUrl: "image/icon_mine_top_class_collect_coupon.png"
        }
      ],
      mineTopClasSubData: [
        {
          title: "我的订单",
          imgUrl: "image/mine/icon_mine_order.png"
        },
        {
          title: "待付款",
          imgUrl: "image/mine/icon_mine_pay.png"
        },
        {
          title: "待使用",
          imgUrl: "image/mine/icon_mine_time.png"
        },
        {
          title: "待评价",
          imgUrl: "image/mine/icon_mine_submit.png"
        },
        {
          title: "退款售后",
          imgUrl: "image/mine/icon_mine_exchange.png"
        }
      ],
      recommendToolList: [
        {
          title: "充值中心",
          imgUrl: "image/mine/icon_recomment_phone_uppay.png"
        },
        {
          title: "新个税计算",
          imgUrl: "image/mine/icon_recomment_computer.png"
        },
        {
          title: "垃圾分类",
          imgUrl: "image/mine/icon_recomment_trash.png"
        },
        {
          title: "墨迹天气",
          imgUrl: "image/mine/icon_recomment_weather.png"
        },
        {
          title: "闪付",
          imgUrl: "image/mine/icon_recomment_pay.png"
        },
        {
          title: "发票助手",
          imgUrl: "image/mine/icon_recomment_invoice.png"
        },
        {
          title: "美团大学",
          imgUrl: "image/mine/icon_recomment_school.png"
        },
        {
          title: "我要合作",
          imgUrl: "image/mine/icon_recomment_c.png"
        }
      ],
      signListData: [
        {
          title: "袋鼠快跑",
          subtitle: "兑换大额红包>",
          imgUrl: "image/mine/icon_sign_car.png"
        },
        {
          title: "小美果园",
          subtitle: "0元领水果>",
          imgUrl: "image/mine/icon_sign_tree.png"
        },
        {
          title: "红包签到",
          subtitle: "连续7天兑红包>",
          imgUrl: "image/mine/icon_sign_in.png"
        },
        {
          title: "邀请有礼",
          subtitle: "分享得20元优惠>",
          imgUrl: "image/mine/icon_sign_coupon.png"
        }
      ],
      walletListData: [
        {
          topTitle: "99.99元",
          centerTitle: "美团借钱",
          bottomTitle: "享免借钱",
        },
         {
          topTitle: "99.99元",
          centerTitle: "美团信用卡",
          bottomTitle: "我的额度",
        },
        {
          topTitle: "99.99元",
          centerTitle: "账单",
          bottomTitle: "最近支付",
        },
         {
          topTitle: "99.99元",
          centerTitle: "美食享优惠",
          bottomTitle: "最高随机减",
        },
      ]
    };
  },
  components: {
    Mt9SquaresItem,
    MtMineSignItem,
    MtMineWalletItem
  },
  methods:{
    mineTopClassItemClick(){
      this.$router.push({
        path: "commonpage/prolist"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.minepage {
  .mine-top-class-item-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #f4bf42;
    margin-top: 0px;
    padding-top: 15px;
  }
  .nut-tabbar {
    background: rgba(244, 191, 66, 1);
    margin-top: 0px;
  }
  .mtItem-container-div {
    background: white;
    margin: 10px;
    border-radius: 10px;
    .mtItem-container-div-subContainer {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 10px;
    }
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
    .recommend-tool-subContainer {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-left: 10px;
      padding-right: 10px;
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

  .my-wallet-container {
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

    .my-wallet-container-center {
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