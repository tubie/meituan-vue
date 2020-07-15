<template>
  <div class="common-proList-container">
    <MtCommonProItem
      v-for="(item, index) in commonProItemList "
      :key="index"
    ></MtCommonProItem>
  </div>

</template>

<script>
import MtCommonProItem from "../../components/MtCommonProItem.vue";

export default {
  name: "CommonProList",
  data() {
    return {
      commonProItemList: [
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594802450326&di=9351e2ab8944e6917e9a8133bb5c02de&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F58b4ef69ed377.jpg",
          topTitle: "上海海昌海洋公园",
          centerTitle: "公园游乐场所",
          bottomTitle: "199元起"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594802450326&di=9351e2ab8944e6917e9a8133bb5c02de&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F58b4ef69ed377.jpg",
          topTitle: "上海海昌海洋公园",
          centerTitle: "公园游乐场所",
          bottomTitle: "199元起"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594802450326&di=9351e2ab8944e6917e9a8133bb5c02de&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F58b4ef69ed377.jpg",
          topTitle: "上海海昌海洋公园",
          centerTitle: "公园游乐场所",
          bottomTitle: "199元起"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594802450326&di=9351e2ab8944e6917e9a8133bb5c02de&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F58b4ef69ed377.jpg",
          topTitle: "上海海昌海洋公园",
          centerTitle: "公园游乐场所",
          bottomTitle: "199元起"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594802450326&di=9351e2ab8944e6917e9a8133bb5c02de&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F58b4ef69ed377.jpg",
          topTitle: "上海海昌海洋公园",
          centerTitle: "公园游乐场所",
          bottomTitle: "199元起"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594802450326&di=9351e2ab8944e6917e9a8133bb5c02de&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F58b4ef69ed377.jpg",
          topTitle: "上海海昌海洋公园",
          centerTitle: "公园游乐场所",
          bottomTitle: "199元起"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594802450326&di=9351e2ab8944e6917e9a8133bb5c02de&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F58b4ef69ed377.jpg",
          topTitle: "上海海昌海洋公园",
          centerTitle: "公园游乐场所",
          bottomTitle: "199元起"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594802450326&di=9351e2ab8944e6917e9a8133bb5c02de&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F58b4ef69ed377.jpg",
          topTitle: "上海海昌海洋公园",
          centerTitle: "公园游乐场所",
          bottomTitle: "199元起"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594802450326&di=9351e2ab8944e6917e9a8133bb5c02de&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F58b4ef69ed377.jpg",
          topTitle: "上海海昌海洋公园",
          centerTitle: "公园游乐场所",
          bottomTitle: "199元起"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594802450326&di=9351e2ab8944e6917e9a8133bb5c02de&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F58b4ef69ed377.jpg",
          topTitle: "上海海昌海洋公园",
          centerTitle: "公园游乐场所",
          bottomTitle: "199元起"
        }
        ,
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594802450326&di=9351e2ab8944e6917e9a8133bb5c02de&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F58b4ef69ed377.jpg",
          topTitle: "上海海昌海洋公园",
          centerTitle: "公园游乐场所",
          bottomTitle: "199元起"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594802450326&di=9351e2ab8944e6917e9a8133bb5c02de&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F58b4ef69ed377.jpg",
          topTitle: "上海海昌海洋公园",
          centerTitle: "公园游乐场所",
          bottomTitle: "199元起"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594802450326&di=9351e2ab8944e6917e9a8133bb5c02de&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F58b4ef69ed377.jpg",
          topTitle: "上海海昌海洋公园",
          centerTitle: "公园游乐场所",
          bottomTitle: "199元起"
        }
        ,
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594802450326&di=9351e2ab8944e6917e9a8133bb5c02de&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F58b4ef69ed377.jpg",
          topTitle: "上海海昌海洋公园",
          centerTitle: "公园游乐场所",
          bottomTitle: "199元起"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594802450326&di=9351e2ab8944e6917e9a8133bb5c02de&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F58b4ef69ed377.jpg",
          topTitle: "上海海昌海洋公园",
          centerTitle: "公园游乐场所",
          bottomTitle: "199元起"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594802450326&di=9351e2ab8944e6917e9a8133bb5c02de&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F58b4ef69ed377.jpg",
          topTitle: "上海海昌海洋公园",
          centerTitle: "公园游乐场所",
          bottomTitle: "199元起"
        }
      ]
    };
  },
  components: {
    MtCommonProItem
  }
};
</script>

<style lang="scss" scoped>
.common-proList-container {
  width: 100%;
}
</style>