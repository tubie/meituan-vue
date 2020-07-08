<template>
  <div
    id="app"
    class="app-container"
  >

    <mt-header
      fixed
      title="固定在顶部"
    ></mt-header>

    <transition>
      <router-view></router-view>
    </transition>

    <nut-tabbar
      @tab-switch="tabSwitch3"
      :tabbar-list="tabList3"
      :bottom="true"
    >
    </nut-tabbar>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList3: [
        {
          tabTitle: "首页",
          curr: false,
          icon: "/image/icon_home_normal.jpg",
          activeIcon: "/image/icon_home_select.jpg",
          href: "/homepage"
        },
        {
          tabTitle: "发现",
          curr: false,
          icon:
            "http://img13.360buyimg.com/uba/jfs/t1/10361/35/4713/4643/5c0f3d62E437a3c94/273fd0fb90798f03.jpg",
          activeIcon:
            "http://img14.360buyimg.com/uba/jfs/t1/26604/35/1073/7896/5c0f3d61Eb9f5f184/5f01c938abe4216d.jpg",
          href: "/findpage"
        },
        {
          tabTitle: "订单",
          curr: false,
          icon:
            "http://img11.360buyimg.com/uba/jfs/t1/14848/18/1066/3723/5c0f41bdE9f2a38fe/e6ed6768717297fb.jpg",
          activeIcon:
            "http://img30.360buyimg.com/uba/jfs/t1/17538/16/1070/6214/5c0f41bdE4bc9a1db/74cf978e5015454b.jpg",
          href: "/orderpage"
        },
        {
          tabTitle: "我的",
          curr: false,
          icon:
            "http://img20.360buyimg.com/uba/jfs/t1/20004/20/1045/3620/5c0f3d61Eaaec1670/9e59db63983b7b9f.jpg",
          activeIcon:
            "http://img14.360buyimg.com/uba/jfs/t1/23967/14/1072/6714/5c0f3d61E0ad8991e/8f741953f6e38f15.jpg",
          href: "/minepage"
        }
      ]
    };
  },
  methods: {
    tabSwitch3: function(value, index) {
      // 记录选择的下标 缓存起来
      window.localStorage.setItem("tabBarIndex", index);
    }
  },
  created() {
    let localData = window.localStorage.getItem("tabBarIndex");
    if (localData === undefined || localData === null) {
      this.tabList3[0].curr = true;
    } else {
      this.tabList3[localData].curr = true;
    }
  }
};
</script>


<style scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 70px;
}

.mint-header {
  background: rgba(244, 191, 66, 1);
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
</style>
