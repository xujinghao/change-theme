<template>
  <div class="container" ref="container">
    <div style="margin-bottom: 20px; display: flex; align-items: center">
      <span>主颜色：</span>
      <a-popover
        title="选择颜色"
        placement="bottom"
        trigger="click"
        v-model="visible"
      >
        <sketch-picker slot="content" v-model="colors"></sketch-picker>
        <span
          :style="{
            cursor: 'pointer',
            display: 'inline-block',
            width: '15px',
            height: '15px',
            backgroundColor: color,
          }"
        ></span>
      </a-popover>
    </div>

    <div class="card">
      <div
        class="card-item"
        :class="'level' + (index + 1)"
        v-for="(_item, index) in activeTheme"
        :key="_item.key"
      >
        <span
          :style="{
            color: _item.light ? '#000000' : '#ffffff',
          }"
          >{{ _item.color }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { Sketch } from "vue-color";
import { generate } from "@ant-design/colors";
import tinycolor from "tinycolor2";
import _ from "lodash";

export default {
  name: "CssVerifyPicker",
  components: {
    "sketch-picker": Sketch,
  },
  data() {
    return {
      visible: false,
      colors: "#194d33",
      activeTheme: [],
    };
  },
  computed: {
    color() {
      if (_.isString(this.colors)) {
        return this.colors;
      } else {
        return this.colors.hex8;
      }
    },
  },
  watch: {
    color: {
      immediate: true,
      handler(val) {
        let colors = generate(val);
        this.activeTheme = [];
        colors.forEach((color, index) => {
          let color1 = tinycolor(color);

          this.activeTheme.push({
            key: `level${index + 1}`,
            color,
            light: color1.isLight(),
          });
        });

        this.changeTheme();
      },
    },
  },
  methods: {
    changeTheme() {
      this.activeTheme.forEach((verify) => {
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

    @for $i from 1 through 10 {
      .level#{$i} {
        background-color: var(--level#{$i});
      }
    }
  }
}
</style>