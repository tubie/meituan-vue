<template>
  <div class="common-page-datail-container">
    <p>详情</p>

    <div class="top-header-container">
      <img
        src="http://img.zcool.cn/community/0103e955b07a0a6ac7258178301cdb.jpg@1280w_1l_2o_100sh.jpg"
        alt=""
      >
      <div class="top-header-container-right">
        <p>ndfasdlfaskf</p>
        <p>2020-07-09</p>
      </div>
    </div>

    <div class="thumbs">
      <vue-preview
        :slides="slide1"
        @close="handleClose"
      >
      </vue-preview>
      <p>思南公馆历史沿革bai始于1920年。这一年，沿“法国公du园zhi” (French Garden, 今复兴公园) 南面的“辣斐德dao路” (Rue Lafayette, 今复兴中路), 首批花园大宅拔地而起。随后的十年里，“辣斐德路”以南，“马斯南路” (Route Massenet, 今思南路) 以东，“吕班路” (Avenue Dubail, 今重庆南路)以西地区的花园洋房陆续建成，吸引了大批当时的军政要员、企业家、专业人士和知名艺术家迁入，使该地区成为当时上流社会的居停和会聚之所。1999年9月，上海市建设和房屋管理部门确定上海多个优秀历史街区作为保留保护改造的试点。卢湾区第47、48街坊，被列为试点之一。这一区域的具体范围：东起重庆南路，西至思南路西侧花园住宅边界，南邻上海交通大学医学院，北抵复兴中路，以思南路为界，分成东、西两块，涉及保留保护历史建筑51幢，汇集8种上海近代居住建筑类型。这就是今天被称为“思南公馆”的这片街区。 作为上海市中心唯一一个以成片花园洋房的保留保护为宗旨的项目，“寻根”和“再造”，如同硬币的两面，贯穿于思南公馆十数年的保留保护改造之中。</p>

      <img
        src="http://img.zcool.cn/community/0103e955b07a0a6ac7258178301cdb.jpg@1280w_1l_2o_100sh.jpg"
        alt=""
      >
      <p>浏览1.2万</p>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      slide1: [
        {
          src:
            "http://img.zcool.cn/community/0103e955b07a0a6ac7258178301cdb.jpg@1280w_1l_2o_100sh.jpg",
          msrc:
            "http://img.zcool.cn/community/0103e955b07a0a6ac7258178301cdb.jpg@1280w_1l_2o_100sh.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        },
        {
          src:
            "http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1510/25/c56/14443956_1445778026604.jpg",
          msrc:
            "http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1510/25/c56/14443956_1445778026604.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        },
        {
          src:
            "http://img1.imgtn.bdimg.com/it/u=2204468782,443243079&fm=26&gp=0.jpg",
          msrc:
            "http://img1.imgtn.bdimg.com/it/u=2204468782,443243079&fm=26&gp=0.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        },
        {
          src:
            "http://cdn0.hbimg.cn/store/wm/bigfiles/201352/D52588B8B5A0CEFBC5A7AAA212.jpg",
          msrc:
            "http://cdn0.hbimg.cn/store/wm/bigfiles/201352/D52588B8B5A0CEFBC5A7AAA212.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        },
        {
          src:
            "http://dimg09.c-ctrip.com/images/100q0u000000j8j42B8C9_R_800_10000_Q90.jpg",
          msrc:
            "http://dimg09.c-ctrip.com/images/100q0u000000j8j42B8C9_R_800_10000_Q90.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        },
        {
          src:
            "http://dpic.tiankong.com/we/2b/QJ6730510172.jpg?x-oss-process=style/shows",
          msrc:
            "http://dpic.tiankong.com/we/2b/QJ6730510172.jpg?x-oss-process=style/shows",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        },
        {
          src:
            "http://img.yaokaihui.com/86124290/b73034b1ea67a9ec6038d362548ed752.jpg",
          msrc:
            "http://img.yaokaihui.com/86124290/b73034b1ea67a9ec6038d362548ed752.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        },
        {
          src:
            "http://img1.qunarzz.com/travel/d0/1702/a4/20561a3dd6cd07b5.jpg_r_720x480x95_aa5fea4d.jpg",
          msrc:
            "http://img1.qunarzz.com/travel/d0/1702/a4/20561a3dd6cd07b5.jpg_r_720x480x95_aa5fea4d.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        },
        {
          src: "http://youimg1.c-ctrip.com/target/100h0d0000006tlkn51BC.jpg",
          msrc: "http://youimg1.c-ctrip.com/target/100h0d0000006tlkn51BC.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        },
        {
          src:
            "http://pic2bj.shejibao.com/img/2016/07/04/c40bdfdfd89949f49ec45845bb008734.jpg@%21width_800",
          msrc:
            "http://pic2bj.shejibao.com/img/2016/07/04/c40bdfdfd89949f49ec45845bb008734.jpg@%21width_800",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        },
        {
          src:
            "http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1810/15/c7/114380601_1539602617700_mthumb.jpg",
          msrc:
            "http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1810/15/c7/114380601_1539602617700_mthumb.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        },
        {
          src:
            "http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1510/25/c56/14443946_1445777961143_mthumb.jpg",
          msrc:
            "http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1510/25/c56/14443946_1445777961143_mthumb.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        }
      ]
    };
  },
  methods: {
    handleClose: function() {}
  }
};
</script>

<style lang="scss" scoped>
.common-page-datail-container {
  padding: 10px;
  .top-header-container {
    display: flex;
    flex-wrap: wrap;

    img {
      width: 50px;
      height: 50px;
    }
    .top-header-container-right {
      p {
        font-size: 14px;
        margin: 0px;
        margin-left: 10px;
      }
    }
  }
  .thumbs {
    /deep/ .my-gallery {
      display: flex;
      flex-wrap: wrap;
      figure {
        width: 20%;
        margin: 5px;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>