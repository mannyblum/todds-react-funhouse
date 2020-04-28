import tinycolor from 'tinycolor2';

function getColorObject(value, name) {
    var c = tinycolor(value);

    return {
        name: name,
        hex: c.toHexString(),
        darkContrast: c.isLight()
    }
}

export function computeColors(hex) {
    return [
      getColorObject(tinycolor(hex).lighten(52), '50'),
      getColorObject(tinycolor(hex).lighten(37), '100'),
      getColorObject(tinycolor(hex).lighten(26), '200'),
      getColorObject(tinycolor(hex).lighten(12), '300'),
      getColorObject(tinycolor(hex).lighten(6), '400'),
      getColorObject(tinycolor(hex), '500'),
      getColorObject(tinycolor(hex).darken(6), '600'),
      getColorObject(tinycolor(hex).darken(12), '700'),
      getColorObject(tinycolor(hex).darken(18), '800'),
      getColorObject(tinycolor(hex).darken(24), '900'),
      getColorObject(tinycolor(hex).lighten(50).saturate(30), 'A100'),
      getColorObject(tinycolor(hex).lighten(30).saturate(30), 'A200'),
      getColorObject(tinycolor(hex).lighten(10).saturate(15), 'A400'),
      getColorObject(tinycolor(hex).lighten(5).saturate(5), 'A700')
    ]
}