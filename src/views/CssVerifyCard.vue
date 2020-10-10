<template>
  <div class="theme-container" ref="container">
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
        class="card-item"
        :class="'level' + (index + 1)"
        v-for="(_item, index) in activeTheme.value"
        :key="_item.key"
      >
        <span>{{ _item.color }} </span>
      </div>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
export default {
  name: "CssVerifyCard",
  data() {
    return {
      value: false,
      activeThemeKey: "Volcano",
      activeTheme: {},
      themes: [
        {
          key: "DustRed",
          name: "薄暮",
          value: [
            {
              key: "level1",
              color: "#fff1f0",
            },
            {
              key: "level2",
              color: "#ffccc7",
            },
            {
              key: "level3",
              color: "#ffa39e",
            },
            {
              key: "level4",
              color: "#ff7875",
            },
            {
              key: "level5",
              color: "#ff4d4f",
            },
            {
              key: "level6",
              color: "#f5222d",
            },
            {
              key: "level7",
              color: "#cf1322",
            },
            {
              key: "level8",
              color: "#a8071a",
            },
            {
              key: "level9",
              color: "#820014",
            },
            {
              key: "level10",
              color: "#5c0011",
            },
          ],
        },
        {
          key: "Volcano",
          name: "火山",
          value: [
            {
              key: "level1",
              color: "#fff2e8",
            },
            {
              key: "level2",
              color: "#ffd8bf",
            },
            {
              key: "level3",
              color: "#ffbb96",
            },
            {
              key: "level4",
              color: "#ff9c6e",
            },
            {
              key: "level5",
              color: "#ff7a45",
            },
            {
              key: "level6",
              color: "#fa541c",
            },
            {
              key: "level7",
              color: "#d4380d",
            },
            {
              key: "level8",
              color: "#ad2102",
            },
            {
              key: "level9",
              color: "#871400",
            },
            {
              key: "level10",
              color: "#610b00",
            },
          ],
        },
        {
          key: "SunsetOrange",
          name: "日暮",
          value: [
            {
              key: "level1",
              color: "#fff7e6",
            },
            {
              key: "level2",
              color: "#ffe7ba",
            },
            {
              key: "level3",
              color: "#ffd591",
            },
            {
              key: "level4",
              color: "#ffc069",
            },
            {
              key: "level5",
              color: "#ffa940",
            },
            {
              key: "level6",
              color: "#fa8c16",
            },
            {
              key: "level7",
              color: "#d46b08",
            },
            {
              key: "level8",
              color: "#ad4e00",
            },
            {
              key: "level9",
              color: "#873800",
            },
            {
              key: "level10",
              color: "#612500",
            },
          ],
        },
        {
          key: "CalendulaGold",
          name: "金盏花",
          value: [
            {
              key: "level1",
              color: "#fffbe6",
            },
            {
              key: "level2",
              color: "#fff1b8",
            },
            {
              key: "level3",
              color: "#ffe58f",
            },
            {
              key: "level4",
              color: "#ffd666",
            },
            {
              key: "level5",
              color: "#ffc53d",
            },
            {
              key: "level6",
              color: "#faad14",
            },
            {
              key: "level7",
              color: "#d48806",
            },
            {
              key: "level8",
              color: "#ad6800",
            },
            {
              key: "level9",
              color: "#874d00",
            },
            {
              key: "level10",
              color: "#613400",
            },
          ],
        },
        {
          key: "SunriseYellow",
          name: "日出",
          value: [
            {
              key: "level1",
              color: "#feffe6",
            },
            {
              key: "level2",
              color: "#ffffb8",
            },
            {
              key: "level3",
              color: "#fffb8f",
            },
            {
              key: "level4",
              color: "#fff566",
            },
            {
              key: "level5",
              color: "#ffec3d",
            },
            {
              key: "level6",
              color: "#fadb14",
            },
            {
              key: "level7",
              color: "#d4b106",
            },
            {
              key: "level8",
              color: "#ad8b00",
            },
            {
              key: "level9",
              color: "#876800",
            },
            {
              key: "level10",
              color: "#614700",
            },
          ],
        },
        {
          key: "Lime",
          name: "青柠",
          value: [
            {
              key: "level1",
              color: "#fcffe6",
            },
            {
              key: "level2",
              color: "#f4ffb8",
            },
            {
              key: "level3",
              color: "#eaff8f",
            },
            {
              key: "level4",
              color: "#d3f261",
            },
            {
              key: "level5",
              color: "#bae637",
            },
            {
              key: "level6",
              color: "#a0d911",
            },
            {
              key: "level7",
              color: "#7cb305",
            },
            {
              key: "level8",
              color: "#5b8c00",
            },
            {
              key: "level9",
              color: "#3f6600",
            },
            {
              key: "level10",
              color: "#254000",
            },
          ],
        },
        {
          key: "PolarGreen",
          name: "极光绿",
          value: [
            {
              key: "level1",
              color: "#f6ffed",
            },
            {
              key: "level2",
              color: "#d9f7be",
            },
            {
              key: "level3",
              color: "#b7eb8f",
            },
            {
              key: "level4",
              color: "#95de64",
            },
            {
              key: "level5",
              color: "#73d13d",
            },
            {
              key: "level6",
              color: "#52c41a",
            },
            {
              key: "level7",
              color: "#389e0d",
            },
            {
              key: "level8",
              color: "#237804",
            },
            {
              key: "level9",
              color: "#135200",
            },
            {
              key: "level10",
              color: "#092b00",
            },
          ],
        },
        {
          key: "Cyan",
          name: "明青",
          value: [
            {
              key: "level1",
              color: "#e6fffb",
            },
            {
              key: "level2",
              color: "#b5f5ec",
            },
            {
              key: "level3",
              color: "#87e8de",
            },
            {
              key: "level4",
              color: "#5cdbd3",
            },
            {
              key: "level5",
              color: "#36cfc9",
            },
            {
              key: "level6",
              color: "#13c2c2",
            },
            {
              key: "level7",
              color: "#08979c",
            },
            {
              key: "level8",
              color: "#006d75",
            },
            {
              key: "level9",
              color: "#00474f",
            },
            {
              key: "level10",
              color: "#002329",
            },
          ],
        },
        {
          key: "DaybreakBlue",
          name: "拂晓蓝",
          value: [
            {
              key: "level1",
              color: "#e6f7ff",
            },
            {
              key: "level2",
              color: "#bae7ff",
            },
            {
              key: "level3",
              color: "#91d5ff",
            },
            {
              key: "level4",
              color: "#69c0ff",
            },
            {
              key: "level5",
              color: "#40a9ff",
            },
            {
              key: "level6",
              color: "#1890ff",
            },
            {
              key: "level7",
              color: "#096dd9",
            },
            {
              key: "level8",
              color: "#0050b3",
            },
            {
              key: "level9",
              color: "#003a8c",
            },
            {
              key: "level10",
              color: "#002766",
            },
          ],
        },
        {
          key: "GeekBlue",
          name: "极客蓝",
          value: [
            {
              key: "level1",
              color: "#f0f5ff",
            },
            {
              key: "level2",
              color: "#d6e4ff",
            },
            {
              key: "level3",
              color: "#adc6ff",
            },
            {
              key: "level4",
              color: "#85a5ff",
            },
            {
              key: "level5",
              color: "#597ef7",
            },
            {
              key: "level6",
              color: "#2f54eb",
            },
            {
              key: "level7",
              color: "#1d39c4",
            },
            {
              key: "level8",
              color: "#10239e",
            },
            {
              key: "level9",
              color: "#061178",
            },
            {
              key: "level10",
              color: "#030852",
            },
          ],
        },
        {
          key: "GoldenPurple",
          name: "酱紫",
          value: [
            {
              key: "level1",
              color: "#f9f0ff",
            },
            {
              key: "level2",
              color: "#efdbff",
            },
            {
              key: "level3",
              color: "#d3adf7",
            },
            {
              key: "level4",
              color: "#b37feb",
            },
            {
              key: "level5",
              color: "#9254de",
            },
            {
              key: "level6",
              color: "#722ed1",
            },
            {
              key: "level7",
              color: "#531dab",
            },
            {
              key: "level8",
              color: "#391085",
            },
            {
              key: "level9",
              color: "#22075e",
            },
            {
              key: "level10",
              color: "#120338",
            },
          ],
        },
        {
          key: "Magenta",
          name: "法式洋红",
          value: [
            {
              key: "level1",
              color: "#fff0f6",
            },
            {
              key: "level2",
              color: "#ffd6e7",
            },
            {
              key: "level3",
              color: "#ffadd2",
            },
            {
              key: "level4",
              color: "#ff85c0",
            },
            {
              key: "level5",
              color: "#f759ab",
            },
            {
              key: "level6",
              color: "#eb2f96",
            },
            {
              key: "level7",
              color: "#c41d7f",
            },
            {
              key: "level8",
              color: "#9e1068",
            },
            {
              key: "level9",
              color: "#780650",
            },
            {
              key: "level10",
              color: "#520339",
            },
          ],
        },
      ],
    };
  },
  created() {
    this.changeTheme(this.activeThemeKey);
  },

  watch: {
    activeThemeKey(val) {
      this.changeTheme(val);
    },
  },
  methods: {
    changeTheme(themeKey) {
      let index = _.findIndex(this.themes, (theme) => {
        return theme.key == themeKey;
      });
      this.activeTheme = this.themes[index];
      console.log("this.themes[index]: ", this.themes[index]);
      let verifies = this.themes[index].value;
      verifies.forEach((verify) => {
        document.documentElement.style.setProperty(
          `--${verify.key}`,
          verify.color
        );
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.theme-container {
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

    @for $i from 1 through 10 {
      .level#{$i} {
        background-color: var(--level#{$i});

        @if $i<=5 {
          color: black;
        } @else {
          color: #ffffff;
        }
      }
    }
  }
}
</style>