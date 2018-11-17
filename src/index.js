import { hcl } from 'd3-color';

const RED_HUE = 20;
const GREEN_HUE = 143.95;
const BLUE_HUE = 306.28;

const locales = {
  en: {
    lightness: {
      veryDark: 'very dark',
      dark: 'dark',
      light: 'light',
      veryLight: 'very light',
    },
    chromaticity: {
      achromatic: 'achromatic',
      nearlyAchromatic: 'nearly achromatic',
    },
    temperature: {
      purple: 'purple',
      warm: 'warm',
      cold: 'cold',
    }
  },
  ru: {
    lightness: {
      veryDark: 'очень тёмный',
      dark: 'тёмный',
      light: 'светлый',
      veryLight: 'очень светлый',
    },
    chromaticity: {
      achromatic: 'ахроматический',
      nearlyAchromatic: 'почти ахроматический',
    },
    temperature: {
      purple: 'пурпурный',
      warm: 'тёплый',
      cold: 'холодный',
    }
  }
};

function ColorDescriptor(localeId = 'en') {
  const {
    lightness,
    chromaticity,
    temperature,
  } = locales[localeId];

  function lightnessFn(color) {
    const L = color.l;

    const {
      veryDark, dark, light, veryLight
    } = lightness;

    return L < 5
      ? veryDark
      : L < 35 ? dark : L > 95 ? veryLight : L > 65 ? light : undefined;
  }

  function chromaticityFn({ c }) {
    const { achromatic, nearlyAchromatic } = chromaticity;
    return c === 0 ? achromatic : c < 10 ? nearlyAchromatic : undefined;
  }

  function temperatureFn({ h, c }) {
    const {
      purple,
      warm,
      cold,
    } = temperature;
    return c === 0
      ? undefined
      : h < RED_HUE || h > BLUE_HUE
        ? purple
        : h < GREEN_HUE ? warm : cold;
  }

  function propertyOf(color) {
    return property => property(color);
  }

  const properties = [lightnessFn, chromaticityFn, temperatureFn];

  function describe(color) {
    return properties
      .map(propertyOf(hcl(color)))
      .filter(Boolean);
  }
  return {
    describe,
    properties,
  };
}

export default ColorDescriptor;
export { ColorDescriptor };
