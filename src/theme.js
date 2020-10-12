const cache = {};

const themes = [{
    key: "DustRed",
    file: import('./assets/scss/DustRed.useable.scss')
  },
  {
    key: "Volcano",
    file: import('./assets/scss/Volcano.useable.scss')
  },
  {
    key: "SunsetOrange",
    file: import('./assets/scss/SunsetOrange.useable.scss')
  },
  {
    key: "SunsetOrange",
    file: import('./assets/scss/SunsetOrange.useable.scss')
  },
  {
    key: "SunriseYellow",
    file: import('./assets/scss/SunriseYellow.useable.scss')
  },
  {
    key: "Lime",
    file: import('./assets/scss/Lime.useable.scss')
  },
  {
    key: "Cyan",
    file: import('./assets/scss/Cyan.useable.scss')
  },
  {
    key: "DaybreakBlue",
    file: import('./assets/scss/DaybreakBlue.useable.scss')
  },
  {
    key: "GeekBlue",
    file: import('./assets/scss/GeekBlue.useable.scss')
  },
  {
    key: "GoldenPurple",
    file: import('./assets/scss/GoldenPurple.useable.scss')
  },
  {
    key: "Magenta",
    file: import('./assets/scss/Magenta.useable.scss')
  }
];


let themeAction = {}

themes.forEach((theme) => {
  themeAction[theme.key] = () => {
    if (!cache[theme.key]) {
      cache[theme.key] = theme.file;
    }
    return cache[theme.key];
  }
});

let current = null;

async function changeTheme(theme) {
  if (themeAction[theme]) {
    const style = await themeAction[theme]();
    if (current) {
      current.unuse();
    }
    style.use();
    current = style;
  }
}
export default changeTheme;