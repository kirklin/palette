import { generateColorPalettes } from "./colorPalette";

const presetPrimaryColors: Record<string, string> = {
  red: "#F53F3F",
  orangered: "#F77234",
  orange: "#FF7D00",
  gold: "#F7BA1E",
  yellow: "#FADC19",
  lime: "#9FDB1D",
  green: "#00B42A",
  cyan: "#14C9C9",
  blue: "#3491FA",
  kirklinBlue: "#66CCFF",
  purple: "#722ED1",
  pinkpurple: "#D91AD9",
  magenta: "#F5319D",
  gray: "#86909c",
  grey: "#86909c",
  black: "#000000",
  white: "#ffffff",
};

/**
 * 使用RGB/RGBA/HSL/HSLA格式的预设颜色
 * Preset colors in RGB/RGBA/HSL/HSLA format
 */
const presetPrimaryColorsRgba: Record<string, string> = {
  red: "rgb(245, 63, 63)",
  orangered: "rgb(247, 114, 52)",
  orange: "rgb(255, 125, 0)",
  gold: "rgb(247, 186, 30)",
  yellow: "rgb(250, 220, 25)",
  lime: "rgb(159, 219, 29)",
  green: "rgb(0, 180, 42)",
  cyan: "rgb(20, 201, 201)",
  blue: "rgb(52, 145, 250)",
  kirklinBlue: "rgb(102, 204, 255)",
  purple: "rgb(114, 46, 209)",
  pinkpurple: "rgb(217, 26, 217)",
  magenta: "rgb(245, 49, 157)",
  gray: "rgb(134, 144, 156)",
  grey: "rgb(134, 144, 156)",
  black: "rgb(0, 0, 0)",
  white: "rgb(255, 255, 255)",
};

/**
 * 使用HSL/HSLA格式的预设颜色
 * Preset colors in HSL/HSLA format
 */
const presetPrimaryColorsHsl: Record<string, string> = {
  red: "hsl(0, 91%, 60%)",
  orange: "hsl(30, 100%, 50%)",
  yellow: "hsl(50, 97%, 54%)",
  green: "hsl(138, 100%, 35%)",
  cyan: "hsl(180, 82%, 43%)",
  blue: "hsl(210, 96%, 59%)",
  purple: "hsl(270, 60%, 50%)",
  magenta: "hsl(330, 90%, 58%)",
  gray: "hsl(215, 9%, 57%)",
};

const presetPalettes: PalettesProps = {};
const presetDarkPalettes: PalettesProps = {};

// 为十六进制预设颜色生成调色板
Object.keys(presetPrimaryColors).forEach((key): void => {
  presetPalettes[key] = generateColorPalettes(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];

  // dark presetPalettes
  presetDarkPalettes[key] = generateColorPalettes(presetPrimaryColors[key], true);
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});

// 为RGB格式预设颜色生成调色板
const presetPalettesRgb: PalettesProps = {};
const presetDarkPalettesRgb: PalettesProps = {};

Object.keys(presetPrimaryColors).forEach((key): void => {
  presetPalettesRgb[key] = generateColorPalettes(presetPrimaryColors[key], false, "#141414", "rgb");
  presetPalettesRgb[key].primary = presetPalettesRgb[key][5];

  // dark presetPalettes
  presetDarkPalettesRgb[key] = generateColorPalettes(presetPrimaryColors[key], true, "#141414", "rgb");
  presetDarkPalettesRgb[key].primary = presetDarkPalettesRgb[key][5];
});

// 为RGBA格式预设颜色生成调色板 (带透明度)
const presetPalettesRgba: PalettesProps = {};
const presetDarkPalettesRgba: PalettesProps = {};

// 生成常规RGBA调色板 (透明度为1)
Object.keys(presetPrimaryColors).forEach((key): void => {
  presetPalettesRgba[key] = generateColorPalettes(presetPrimaryColors[key], false, "#141414", "rgba", 1);
  presetPalettesRgba[key].primary = presetPalettesRgba[key][5];

  // dark presetPalettes
  presetDarkPalettesRgba[key] = generateColorPalettes(presetPrimaryColors[key], true, "#141414", "rgba", 1);
  presetDarkPalettesRgba[key].primary = presetDarkPalettesRgba[key][5];
});

// 生成带不同透明度的调色板
const alphaValues = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
const primaryColors = ["red", "green", "blue", "yellow", "purple"];

// 为每个主要颜色生成不同透明度的RGBA调色板
primaryColors.forEach((colorName) => {
  alphaValues.forEach((alpha) => {
    const alphaKey = `${colorName}Alpha${Math.floor(alpha * 10)}`;
    presetPalettesRgba[alphaKey] = generateColorPalettes(presetPrimaryColors[colorName], false, "#141414", "rgba", alpha);
    presetPalettesRgba[alphaKey].primary = presetPalettesRgba[alphaKey][5];

    presetDarkPalettesRgba[alphaKey] = generateColorPalettes(presetPrimaryColors[colorName], true, "#141414", "rgba", alpha);
    presetDarkPalettesRgba[alphaKey].primary = presetDarkPalettesRgba[alphaKey][5];
  });
});

// 为HSL格式预设颜色生成调色板
const presetPalettesHsl: PalettesProps = {};
const presetDarkPalettesHsl: PalettesProps = {};

Object.keys(presetPrimaryColors).forEach((key): void => {
  presetPalettesHsl[key] = generateColorPalettes(presetPrimaryColors[key], false, "#141414", "hsl");
  presetPalettesHsl[key].primary = presetPalettesHsl[key][5];

  // dark presetPalettes
  presetDarkPalettesHsl[key] = generateColorPalettes(presetPrimaryColors[key], true, "#141414", "hsl");
  presetDarkPalettesHsl[key].primary = presetDarkPalettesHsl[key][5];
});

// 为HSLA格式预设颜色生成调色板 (带透明度)
const presetPalettesHsla: PalettesProps = {};
const presetDarkPalettesHsla: PalettesProps = {};

// 为每个主要颜色生成不同透明度的HSLA调色板
primaryColors.forEach((colorName) => {
  alphaValues.forEach((alpha) => {
    const alphaKey = `${colorName}Alpha${Math.floor(alpha * 10)}`;
    presetPalettesHsla[alphaKey] = generateColorPalettes(presetPrimaryColors[colorName], false, "#141414", "hsla", alpha);
    presetPalettesHsla[alphaKey].primary = presetPalettesHsla[alphaKey][5];

    presetDarkPalettesHsla[alphaKey] = generateColorPalettes(presetPrimaryColors[colorName], true, "#141414", "hsla", alpha);
    presetDarkPalettesHsla[alphaKey].primary = presetDarkPalettesHsla[alphaKey][5];
  });
});

const red = presetPalettes.red;
const orangered = presetPalettes.orangered;
const gold = presetPalettes.gold;
const orange = presetPalettes.orange;
const yellow = presetPalettes.yellow;
const lime = presetPalettes.lime;
const green = presetPalettes.green;
const cyan = presetPalettes.cyan;
const blue = presetPalettes.blue;
const kirklinBlue = presetPalettes.kirklinBlue;
const purple = presetPalettes.purple;
const pinkpurple = presetPalettes.pinkpurple;
const magenta = presetPalettes.magenta;
const black = presetPalettes.black;
const white = presetPalettes.white;

presetPalettes.gray = [
  "#f7f8fa",
  "#f2f3f5",
  "#e5e6eb",
  "#c9cdd4",
  "#a9aeb8",
  "#86909c",
  "#6b7785",
  "#4e5969",
  "#272e3b",
  "#1d2129",
];
presetDarkPalettes.gray = [
  "#17171a",
  "#2e2e30",
  "#484849",
  "#5f5f60",
  "#78787a",
  "#929293",
  "#ababac",
  "#c5c5c5",
  "#dfdfdf",
  "#f6f6f6",
];
const gray = presetPalettes.gray;
const grey = presetPalettes.gray;
export type PalettesProps = Record<string, string[] & { primary?: string }>;

export {
  black,
  blue,
  cyan,
  gold,
  gray,
  green,
  grey,
  kirklinBlue,
  lime,
  magenta,
  orange,
  orangered,
  pinkpurple,
  presetDarkPalettes,
  presetDarkPalettesHsl,
  presetDarkPalettesHsla,
  presetDarkPalettesRgb,
  presetDarkPalettesRgba,
  presetPalettes,
  presetPalettesHsl,
  presetPalettesHsla,
  presetPalettesRgb,
  presetPalettesRgba,
  presetPrimaryColors,
  presetPrimaryColorsHsl,
  presetPrimaryColorsRgba,
  purple,
  red,
  white,
  yellow,
};
