module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    opacity: {
      0: '0',
      10: '.1',
      20: '.2',
      30: '.3',
      40: '.4',
      50: '.5',
      60: '.6',
      70: '.7',
      80: '.8',
      90: '.9',
      100: '1',
    },
    colors: {
      transparent: "transparent",
      primary: {
        blue: '#124B88',
        green: '#0B8457',
        light:'#DDEEE8',
      },
      accent: {
        gold: '#EAC100',
      },
      shade: {
        test: "red",
        peach: "#F6F4F4",
        default: "#fff",
        sky: '#E5EAF0',
        milk: '#F2F2F2',
        cappuccino: '#E5E5E5',
        nature: '#E9ECEA',
        coal: '#B0BCC8',
        pink: '#F6F4F4',
        naija: '#E0F0E0',
        cool: '#EBEBEB',
        lightcoal: '#333333',
        background: '#FAF9F9',
        placeholder: '#858585',


      },
      text: {
        coal: "#766E6E",
        snow: '#fff',
        dark: '#000',
        blue: ' #124B88',
        blm: '#333333',
        nature: '#2C3F2C',
        late: '#657265',
        placeholder: '#858585',
        guava: '#667766',
        purple: '#0F117A',
        lemon: '#64B663',
      },
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      poppins: ['Poppins', 'sans-serif']
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      close: "-0.02em",
      smClose: "-0.01em",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      open: "0.03em",
    },
    screens: {
      xs: '200px',
      'sm': '640px',

    'md': '768px',

    'lg': '1024px',

    'xl': '1280px',
    },
    extend: {

      spacing: {
        88: "5.5rem",
        28: "1.75rem",
        42: '2.625rem',
        108: '6.75rem',
        166: '10.375rem',
        45: '2.8125rem',
        552: '34.5rem',
        196: '12.25rem',
        516: '32.25rem',
        68: '4.25rem',
        60: '3.75rem',
        76: '4.75rem',
        682: '42.625rem',
        30: '1.875rem',
        362: '22.625rem',
        468: '29.25rem',
        38: '2.375rem',
        282: '17.625rem',
        475: '29.6875rem',
        264: '16.5rem',
        270: '16.875rem',
        228: '14.25rem',
        166: '10.375rem',
        36: '2.25rem',
        362: '22.625rem',
        315: '19.6875rem',
        558: '34.875rem',
        11: '0.625rem',
        '43percent': '43.59%',
        1146: '71.625rem',
        754: '47.125rem',
        1140: '69.75rem',
        129: '8.0625rem',
        56: '3.5rem',
        72: '4.5rem',
        946: '59.125rem',
        52: '3.25rem',
      },
      fontSize: {
        60: '3.75rem',
        40: '2.5rem',
        44: '2.75rem',
        35: '2.1875rem',
        26: '1.625rem',
      },
      borderWidth: {
        '3': '3px',
      },
      minHeight: {
        516: '32.25rem',

      },
      minWidth: {
        100: '10rem',

      },
      maxWidth: {
        100: '10rem',

      },
      borderRadius: {
        rounder: '1.5rem',
        rounded16: '1rem',
        rounded30: '1.25rem',
      }
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus', 'last'],
    margin: ['responsive', 'odd', 'first', 'last'],
    borderOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],

  },
  plugins: [],
};
