<template>

  <div class="minepage">

    <!-- <nut-tabbar
      @tab-switch="tabSwitch1"
      :tabbar-list="tabList1"
    ></nut-tabbar> -->

    <div class="mine-top-class-item-container">
      <Mt9SquaresItem
        :isFourColumns='true'
        v-for='(item , index ) in mineTopClassData'
        :title="item.title"
        :imgUrl='item.imgUrl'
        :key='index'
      ></Mt9SquaresItem>
    </div>

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

    <div class="my-wallet-container">

      <p>我的钱包</p>

      <div class="my-wallet-container-center">

        <MtMineWalletItem></MtMineWalletItem>
        <MtMineWalletItem></MtMineWalletItem>
        <MtMineWalletItem></MtMineWalletItem>
        <MtMineWalletItem></MtMineWalletItem>

      </div>

      <img
        src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=240449294,3505719360&fm=15&gp=0.jpg"
        alt=""
      >

    </div>

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
import MtMineWalletItem from "../../components/MtMineWalletItem.vue";

export default {
  data() {
    return {
      mineTopClassData:[ {
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
        }],
      meituanItemList: ["1", "2", "3", "4", "5"],
      recommendToolList: ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"]
    };
  },
  components: {
    Mt9SquaresItem,
    MtMineSignItem,
    MtMineWalletItem
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
    background: rgba(244, 191, 66, 1);
    margin-top: 0px;
    padding-top: 15px;
  }
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