# @kirklin/palette

[![CI][ci-image]][ci-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript_code style][code-style-image]][code-style-url]

[ci-image]: https://github.com/kirklin/palette/actions/workflows/release.yml/badge.svg?branch=main
[ci-url]: https://github.com/kirklin/palette/actions/workflows/release.yml
[npm-image]: https://img.shields.io/npm/v/@kirklin/palette.svg
[npm-url]: https://npmjs.org/package/@kirklin/palette
[downloads-image]: https://img.shields.io/npm/dm/@kirklin/palette.svg
[downloads-url]: https://npmjs.org/package/@kirklin/palette
[code-style-image]: https://img.shields.io/badge/code__style-%40kirklin%2Feslint--config-brightgreen
[code-style-url]: https://github.com/kirklin/eslint-config/

The `@kirklin/palette` library is a utility for generating color palettes based on a given color and index. It provides functions to create color variations for different purposes such as light and dark themes. This README will explain the usage of the library and its core functionalities.

## Installation

You can install the library using npm:

```bash
npm install @kirklin/palette
```

## Usage

The library offers various functions for generating color palettes. Let's go through the key components of the provided code.

### Generating Color Palettes

To generate a color palette, you need to import the necessary functions from the library:

```javascript
import { generateColorPalettes } from "@kirklin/palette";
```

The `generateColorPalettes` function allows you to create an array of color variations based on a given color. By default, it generates color variations for light themes. You can also specify whether you want to generate colors for a dark theme and provide a mix color for the dark theme.

```javascript
const color = "#F53F3F"; // Example color
const lightPalettes = generateColorPalettes(color); // Generates light color palettes
const darkPalettes = generateColorPalettes(color, true); // Generates dark color palettes
```

### Using Preset Colors

The library provides preset primary colors that you can use as a starting point for generating color palettes. These colors are stored in the `presetPrimaryColors` object:

```javascript
import { presetPrimaryColors } from "@kirklin/palette";

const redColor = presetPrimaryColors.red; // Example preset primary color
const redPalettes = generateColorPalettes(redColor);
```

### Accessing Generated Palettes

The generated color palettes are arrays of hex color values. You can access specific colors in the palette using array indexing:

```javascript
const mainColor = redPalettes[5]; // Main color in the palette
const lighterColor = redPalettes[3]; // Lighter color in the palette
```

### Exported Components

The library exports various components that can be used for easier access to colors and palettes:

- `presetPalettes`: An object containing preset primary colors and their corresponding palettes.
- `presetDarkPalettes`: An object containing preset primary colors and their corresponding dark theme palettes.
- Individual color variables (e.g., `red`, `green`) that provide easy access to color palettes.

## Examples

```javascript
import { generateColorPalettes, presetPrimaryColors } from "@kirklin/palette";

const mainColor = presetPrimaryColors.blue;
const lightPalettes = generateColorPalettes(mainColor);
const darkPalettes = generateColorPalettes(mainColor, true);
```

## License

[MIT](./LICENSE) License &copy; 2023-PRESENT [Kirk Lin](https://github.com/kirklin)
