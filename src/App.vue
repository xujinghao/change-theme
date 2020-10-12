<template>
  <div id="app">
    <a-layout>
      <a-layout-sider>
        <a-menu theme="dark" mode="inline" :selected-keys="selectKey">
          <a-menu-item
            :key="item.key"
            v-for="item in menu"
            @click="onMenuItemClick(item)"
          >
            <span> {{ item.routeName }} </span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content>
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          key: "cssVerify",
          routeName: "css变量切换主题",
          path: "cssVerify",
        },
        {
          key: "cssVerifyCard",
          routeName: "css变量 色卡",
          path: "cssVerifyCard",
        },
        {
          key: "cssVerifyPicker",
          routeName: "css变量 选色器",
          path: "cssVerifyPicker",
        },
        {
          key: "cssFileCard",
          routeName: "css文件",
          path: "cssFileCard",
        },
      ],
      selectKey: [],
    };
  },
  watch: {
    $route: function (val) {
      this.selectKey = [val.name];
    },
  },
  methods: {
    onMenuItemClick(item) {
      if (item.path !== this.$route.path) {
        this.$router.push({ path: item.path });
      }
    },
  },
};
</script>
<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;

  .ant-layout {
    width: 100%;
    height: 100%;
  }
}
</style>
