<template>
  <div class="container" ref="container">
    <div style="margin-bottom: 20px">
      <span>主题：</span>
      <a-select
        v-model="activeThemeKey"
        :default-value="activeThemeKey"
        style="width: 170px"
      >
        <a-select-option
          v-for="item in themes"
          :key="item.key"
          :value="item.key"
        >
          {{ item.key }} &nbsp;&nbsp;&nbsp; {{ item.name }}
        </a-select-option>
      </a-select>
    </div>

    <div class="card">
      <div
        ref="cardItem"
        class="card-item"
        :class="'level' + (index + 1)"
        v-for="(_item, index) in 10"
        :key="_item.key"
      ></div>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import changeTheme from "../theme";
import tinycolor from "tinycolor2";
export default {
  name: "CssFileCard",
  data() {
    return {
      value: false,
      themes: [
        {
          key: "DustRed",
          name: "薄暮",
        },
        {
          key: "Volcano",
          name: "火山",
        },
        {
          key: "SunsetOrange",
          name: "日暮",
        },
        {
          key: "CalendulaGold",
          name: "金盏花",
        },
        {
          key: "SunriseYellow",
          name: "日出",
        },
        {
          key: "Lime",
          name: "青柠",
        },
        {
          key: "PolarGreen",
          name: "极光绿",
        },
        {
          key: "Cyan",
          name: "明青",
        },
        {
          key: "DaybreakBlue",
          name: "拂晓蓝",
        },
        {
          key: "GeekBlue",
          name: "极客蓝",
        },
        {
          key: "GoldenPurple",
          name: "酱紫",
        },
        {
          key: "Magenta",
          name: "法式洋红",
        },
      ],
      activeThemeKey: "",
      activeThemeColors: [],
    };
  },
  watch: {
    activeThemeKey(val) {
      this.activeThemeColors = [];
      changeTheme(val);
    },
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .card {
    width: 250px;

    .card-item {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
  }
}
</style>