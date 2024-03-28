"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const themes = [
    {
        name: ['dark', 'darkmode'],
        background: '#18191A',
        title: '#E4E6EB',
        subtitle: '#bfbfbf',
    },
    {
        name: ['default', 'light'],
        background: '#FFFFFF',
        title: '#000000',
        subtitle: '#bfbfbf',
    },
    {
        name: ['radical'],
        background: '#141321',
        title: '#fe428e',
        subtitle: '#a9fef7',
    },
    {
        name: ['transparent'],
        title: '006AFF',
        subtitle: '417E87',
        background: 'ffffff00',
    },
    {
        name: ['viridescent'],
        background: '#2C3333',
        title: '#95d5b2',
        subtitle: '#bfbfbf',
    },
    {
        name: ['dark'],
        background: '#111',
        title: '#eee',
        subtitle: '#bfbfbf',
    },
    {
        name: ['muted'],
        background: '#525252',
        title: '#B1E4E3',
        subtitle: '#bfbfbf',
    },
    {
        name: ['dark_magic_girl'],
        background: '#091f2c',
        title: '#a288d9',
        subtitle: '#bfbfbf',
    },
    {
        name: ['8008'],
        background: '#333a45',
        title: '#f44c7f',
        subtitle: '#bfbfbf',
    },
    {
        name: ['carbon'],
        background: '#313131',
        title: '#ed6b21',
        subtitle: '#bfbfbf',
    },
    {
        name: ['our_theme'],
        background: '#ce1226',
        title: '#fcd116',
        subtitle: '#bfbfbf',
    },
    {
        name: ['dots'],
        background: '#121520',
        title: '#7f88ab',
        subtitle: '#bfbfbf',
    },
    {
        name: ['nautilus'],
        background: '#132237',
        title: '#eab622',
        subtitle: '#bfbfbf',
    },
    {
        name: ['serika'],
        background: '#e1e1e3',
        title: '#e2b714',
        subtitle: '#bfbfbf',
    },
    {
        name: ['serika_dark'],
        background: '#323437',
        title: '#e2b714',
        subtitle: '#bfbfbf',
    },
    {
        name: ['bushido'],
        background: '#242933',
        title: '#ec4c56',
        subtitle: '#bfbfbf',
    },
    {
        name: ['red_samurai'],
        background: '#84202c',
        title: '#c79e6e',
        subtitle: '#bfbfbf',
    },
    {
        name: ['rgb'],
        background: 'linear-gradient(to left, #0043ff, #1bdbdb, #27c214, #e0e019, #e01313)',
        title: '#fff',
        subtitle: '#bfbfbf',
    },
    {
        name: ['oblivion'],
        background: '#313231',
        title: '#a5a096',
        subtitle: '#bfbfbf',
    },
    {
        name: ['magic_girl'],
        background: '#ffffff',
        title: '#00ac8c',
        subtitle: '#bfbfbf',
    },
    {
        name: ['metropolis'],
        background: '#0f1f2c',
        title: '#56c3b7',
        subtitle: '#bfbfbf',
    },
    {
        name: ['mountain'],
        background: '#0f0f0f',
        title: '#e7e7e7',
        subtitle: '#bfbfbf',
    },
    {
        name: ['laser'],
        background: '#221b44',
        title: '#b82356',
        subtitle: '#bfbfbf',
    },
    {
        name: ['retro'],
        background: '#dad3c1',
        title: '#1d181a',
        subtitle: '#bfbfbf',
    },
    {
        name: ['dracula'],
        background: '#282a36',
        title: '#bd93f9',
        subtitle: '#bfbfbf',
    },
    {
        name: ['nord'],
        background: '#242933',
        title: '#617b94',
        subtitle: '#bfbfbf',
    },
    {
        name: ['mr_sleeves'],
        background: '#d1d7da',
        title: '#000',
        subtitle: '#bfbfbf',
    },
    {
        name: ['olivia'],
        background: '#1c1b1d',
        title: '#deaf9d',
        subtitle: '#bfbfbf',
    },
    {
        name: ['bliss'],
        background: '#262727',
        title: '#665957',
        subtitle: '#bfbfbf',
    },
    {
        name: ['mizu'],
        background: '#afcbdd',
        title: '#1a2633',
        subtitle: '#bfbfbf',
    },
    {
        name: ['metaverse'],
        background: '#232323',
        title: '#d82934',
        subtitle: '#bfbfbf',
    },
    {
        name: ['shadow'],
        background: '#000',
        title: '#444',
        subtitle: '#bfbfbf',
    },
    {
        name: ['mint'],
        background: '#05385b',
        title: '#5cdb95',
        subtitle: '#bfbfbf',
    },
    {
        name: ['miami'],
        background: '#f35588',
        title: '#05dfd7',
        subtitle: '#bfbfbf',
    },
    {
        name: ['miami_nights'],
        background: '#18181a',
        title: '#e4609b',
        subtitle: '#bfbfbf',
    },
    {
        name: ['modern_dolch'],
        background: '#2d2e30',
        title: '#65d2cd',
        subtitle: '#bfbfbf',
    },
    {
        name: ['botanical'],
        background: '#7b9c98',
        title: '#abc6c4',
        subtitle: '#bfbfbf',
    },
    {
        name: ['9009'],
        background: '#eeebe2',
        title: '#080909',
        subtitle: '#bfbfbf',
    },
    {
        name: ['bingsu'],
        background: '#b8a7aa',
        title: '#ede8ec',
        subtitle: '#bfbfbf',
    },
    {
        name: ['terminal'],
        background: '#1b1c1d',
        title: '#79a617',
        subtitle: '#bfbfbf',
    },
    {
        name: ['lavender'],
        background: '#ada6c2',
        title: '#e4e3e9',
        subtitle: '#bfbfbf',
    },
    {
        name: ['taro'],
        background: '#b3baff',
        title: '#130f1a',
        subtitle: '#bfbfbf',
    },
    {
        name: ['striker'],
        background: '#124883',
        title: '#d6dbd9',
        subtitle: '#bfbfbf',
    },
    {
        name: ['gruvbox_dark'],
        background: '#282828',
        title: '#ebdbb2',
        subtitle: '#bfbfbf',
    },
    {
        name: ['gruvbox_light'],
        background: '#fbf1c7',
        title: '#3c3836',
        subtitle: '#bfbfbf',
    },
    {
        name: ['monokai'],
        background: '#272822',
        title: '#E6DB74',
        subtitle: '#bfbfbf',
    },
    {
        name: ['sonokai'],
        background: '#2C2E34',
        title: '#E2E2E3',
        subtitle: '#bfbfbf',
    },
    {
        name: ['camping'],
        background: '#faf1e4',
        title: '#618c56',
        subtitle: '#bfbfbf',
    },
    {
        name: ['voc'],
        background: '#190618',
        title: '#e0caac',
        subtitle: '#bfbfbf',
    },
    {
        name: ['vaporwave'],
        background: '#a4a7ea',
        title: '#e368da',
        subtitle: '#bfbfbf',
    },
    {
        name: ['pulse'],
        background: '#181818',
        title: '#17b8bd',
        subtitle: '#bfbfbf',
    },
    {
        name: ['matrix'],
        background: '#000000',
        title: '#15ff00',
        subtitle: '#bfbfbf',
    },
    {
        name: ['olive'],
        background: '#e9e5cc',
        title: '#92946f',
        subtitle: '#bfbfbf',
    },
    {
        name: ['strawberry'],
        background: '#f37f83',
        title: '#fcfcf8',
        subtitle: '#bfbfbf',
    },
    {
        name: ['night_runner'],
        background: '#212121',
        title: '#feff04',
        subtitle: '#bfbfbf',
    },
    {
        name: ['cyberspace'],
        background: '#181c18',
        title: '#00ce7c',
        subtitle: '#bfbfbf',
    },
    {
        name: ['joker'],
        background: '#1a0e25',
        title: '#99de1e',
        subtitle: '#bfbfbf',
    },
    {
        name: ['dualshot'],
        background: '#737373',
        title: '#212222',
        subtitle: '#bfbfbf',
    },
    {
        name: ['solarized_dark'],
        background: '#002b36',
        title: '#859900',
        subtitle: '#bfbfbf',
    },
    {
        name: ['solarized_light'],
        background: '#fdf6e3',
        title: '#859900',
        subtitle: '#bfbfbf',
    },
    {
        name: ['terra'],
        background: '#0c100e',
        title: '#89c559',
        subtitle: '#bfbfbf',
    },
    {
        name: ['red_dragon'],
        background: '#1a0b0c',
        title: '#ff3a32',
        subtitle: '#bfbfbf',
    },
    {
        name: ['hammerhead'],
        background: '#030613',
        title: '#4fcdb9',
        subtitle: '#bfbfbf',
    },
    {
        name: ['future_funk'],
        background: '#2E1A47',
        title: '#f7f2ea',
        subtitle: '#bfbfbf',
    },
    {
        name: ['milkshake'],
        background: '#ffffff',
        title: '#212b43',
        subtitle: '#bfbfbf',
    },
    {
        name: ['aether'],
        background: '#101820',
        title: '#cf6bdd',
        subtitle: '#bfbfbf',
    },
    {
        name: ['froyo'],
        background: '#e1dacb',
        title: '#b29c5e',
        subtitle: '#bfbfbf',
    },
    {
        name: ['retrocast'],
        background: '#07737a',
        title: '#88dbdf',
        subtitle: '#bfbfbf',
    },
    {
        name: ['luna'],
        background: '#221C35',
        title: '#f67599',
        subtitle: '#bfbfbf',
    },
    {
        name: ['graen'],
        background: '#303c36',
        title: '#a59682',
        subtitle: '#bfbfbf',
    },
    {
        name: ['bento'],
        background: '#2d394d',
        title: '#FC7374',
        subtitle: '#bfbfbf',
    },
    {
        name: ['watermelon'],
        background: '#1F4437',
        title: '#B74B53',
        subtitle: '#bfbfbf',
    },
    {
        name: ['menthol'],
        background: '#00c18c',
        title: '#ffffff',
        subtitle: '#bfbfbf',
    },
    {
        name: ['ishtar'],
        background: '#202020',
        title: '#91170c',
        subtitle: '#bfbfbf',
    },
    {
        name: ['mashu'],
        background: '#2b2b2c',
        title: '#76689a',
        subtitle: '#bfbfbf',
    },
    {
        name: ['deku'],
        background: '#058B8C',
        title: '#F7F2EA',
        subtitle: '#bfbfbf',
    },
    {
        name: ['honey'],
        background: '#f2aa00',
        title: '#fff546',
        subtitle: '#bfbfbf',
    },
    {
        name: ['shoko'],
        background: '#ced7e0',
        title: '#81c4dd',
        subtitle: '#bfbfbf',
    },
    {
        name: ['norse'],
        background: '#2b2b2c',
        title: '#ccc2b1',
        subtitle: '#bfbfbf',
    },
    {
        name: ['matcha_moccha'],
        background: '#523525',
        title: '#7ec160',
        subtitle: '#bfbfbf',
    },
    {
        name: ['cafe'],
        background: '#CEB18D',
        title: '#14120F',
        subtitle: '#bfbfbf',
    },
    {
        name: ['alpine'],
        background: '#6c687f',
        title: '#ffffff',
        subtitle: '#bfbfbf',
    },
    {
        name: ['superuser'],
        background: '#262A33',
        title: '#43FFAF',
        subtitle: '#bfbfbf',
    },
    {
        name: ['ms_cupcakes'],
        background: '#ffffff',
        title: '#5ed5f3',
        subtitle: '#bfbfbf',
    },
    {
        name: ['dollar'],
        background: '#e4e4d4',
        title: '#6b886b',
        subtitle: '#bfbfbf',
    },
    {
        name: ['lime'],
        background: '#7c878e',
        title: '#93c247',
        subtitle: '#bfbfbf',
    },
    {
        name: ['sweden'],
        background: '#0058a3',
        title: '#ffcc02',
        subtitle: '#bfbfbf',
    },
    {
        name: ['wavez'],
        background: '#1c292f',
        title: '#6bde3b',
        subtitle: '#bfbfbf',
    },
    {
        name: ['nebula'],
        background: '#212135',
        title: '#be3c88',
        subtitle: '#bfbfbf',
    },
    {
        name: ['lil_dragon'],
        background: '#ebe1ef',
        title: '#8a5bd6',
        subtitle: '#bfbfbf',
    },
    {
        name: ['pastel'],
        background: '#ffd1dc',
        title: '#b39eb5',
        subtitle: '#bfbfbf',
    },
    {
        name: ['alduin'],
        background: '#1c1c1c',
        title: '#dfd7af',
        subtitle: '#bfbfbf',
    },
    {
        name: ['paper'],
        background: '#eeeeee',
        title: '#444444',
        subtitle: '#bfbfbf',
    },
    {
        name: ['fundamentals'],
        background: '#727474',
        title: '#196378',
        subtitle: '#bfbfbf',
    },
    {
        name: ['drowning'],
        background: '#191826',
        title: '#4a6fb5',
        subtitle: '#bfbfbf',
    },
    {
        name: ['iceberg_dark'],
        background: '#161821',
        title: '#c6c8d1',
        subtitle: '#bfbfbf',
    },
    {
        name: ['iceberg_light'],
        background: '#e8e9ec',
        title: '#33374c',
        subtitle: '#bfbfbf',
    },
    {
        name: ['onedark'],
        background: '#2f343f',
        title: '#98c379',
        subtitle: '#bfbfbf',
    },
    {
        name: ['darling'],
        background: '#fec8cd',
        title: '#ffffff',
        subtitle: '#bfbfbf',
    },
    {
        name: ['repose_dark'],
        background: '#2f3338',
        title: '#d6d2bc',
        subtitle: '#bfbfbf',
    },
    {
        name: ['repose_light'],
        background: '#efead0',
        title: '#333538',
        subtitle: '#bfbfbf',
    },
    {
        name: ['horizon'],
        background: '#1C1E26',
        title: '#c4a88a',
        subtitle: '#bfbfbf',
    },
    {
        name: ['rudy'],
        background: '#1a2b3e',
        title: '#af8f5c',
        subtitle: '#bfbfbf',
    },
    {
        name: ['stealth'],
        background: '#010203',
        title: '#383e42',
        subtitle: '#bfbfbf',
    },
    {
        name: ['80s_after_dark'],
        background: '#1B1D36',
        title: '#FCA6D1',
        subtitle: '#bfbfbf',
    },
    {
        name: ['arch'],
        background: '#0c0d11',
        title: '#f6f5f5',
        subtitle: '#bfbfbf',
    },
    {
        name: ['rose_pine'],
        background: '#1f1d27',
        title: '#e0def4',
        subtitle: '#bfbfbf',
    },
    {
        name: ['rose_pine_moon'],
        background: '#2a273f',
        title: '#e0def4',
        subtitle: '#bfbfbf',
    },
    {
        name: ['rose_pine_dawn'],
        background: '#fffaf3',
        title: '#575279',
        subtitle: '#bfbfbf',
    },
    {
        name: ['copper'],
        background: '#442f29',
        title: '#e7e0de',
        subtitle: '#bfbfbf',
    },
    {
        name: ['grand_prix'],
        background: '#36475c',
        title: '#c0d036',
        subtitle: '#bfbfbf',
    },
    {
        name: ['peaches'],
        background: '#d3cfc6',
        title: '#dd7a5f',
        subtitle: '#bfbfbf',
    },
    {
        name: ['bouquet'],
        background: '#38564a',
        title: '#ffbdb2',
        subtitle: '#bfbfbf',
    },
    {
        name: ['midnight'],
        background: '#0b0e13',
        title: '#9fadc6',
        subtitle: '#bfbfbf',
    },
    {
        name: ['blueberry_light'],
        background: '#dae0f5',
        title: '#df4576',
        subtitle: '#bfbfbf',
    },
    {
        name: ['blueberry_dark'],
        background: '#212b42',
        title: '#df4576',
        subtitle: '#bfbfbf',
    },
    {
        name: ['fledgling'],
        background: '#3b363f',
        title: '#fc6e83',
        subtitle: '#bfbfbf',
    },
    {
        name: ['ez_mode'],
        background: '#0171cd',
        title: '#fa62d5',
        subtitle: '#bfbfbf',
    },
    {
        name: ['vscode'],
        background: '#1E1E1E',
        title: '#007acc',
        subtitle: '#bfbfbf',
    },
    {
        name: ['material'],
        background: '#263238',
        title: '#80cbc4',
        subtitle: '#bfbfbf',
    },
    {
        name: ['godspeed'],
        background: '#eae4cf',
        title: '#c0bcab',
        subtitle: '#bfbfbf',
    },
    {
        name: ['witch_girl'],
        background: '#f3dbda',
        title: '#56786a',
        subtitle: '#bfbfbf',
    },
    {
        name: ['terror_below'],
        background: '#0b1e1a',
        title: '#66ac92',
        subtitle: '#bfbfbf',
    },
    {
        name: ['sewing_tin'],
        background: '#241963',
        title: '#f2ce83',
        subtitle: '#bfbfbf',
    },
    {
        name: ['soaring_skies'],
        background: '#fdeedd',
        title: '#1e107a',
        subtitle: '#bfbfbf',
    },
    {
        name: ['sewing_tin_light'],
        background: '#ffffff',
        title: '#2d2076',
        subtitle: '#bfbfbf',
    },
    {
        name: ['chaos_theory'],
        background: '#141221',
        title: '#fd77d7',
        subtitle: '#bfbfbf',
    },
    {
        name: ['hanok'],
        background: '#d8d2c3',
        title: '#513a2a',
        subtitle: '#bfbfbf',
    },
    {
        name: ['comfy'],
        background: '#4A5B6E',
        title: '#F8CDC6',
        subtitle: '#bfbfbf',
    },
    {
        name: ['tiramisu'],
        background: '#CFC6B9',
        title: '#C0976F',
        subtitle: '#bfbfbf',
    },
    {
        name: ['diner'],
        background: '#537997',
        title: '#c3af5b',
        subtitle: '#bfbfbf',
    },
    {
        name: ['modern_ink'],
        background: '#ffffff',
        title: '#ff360d',
        subtitle: '#bfbfbf',
    },
    {
        name: ['dev'],
        background: '#1b2028',
        title: '#23a9d5',
        subtitle: '#bfbfbf',
    },
    {
        name: ['moonlight'],
        background: '#1f2730',
        title: '#c69f68',
        subtitle: '#bfbfbf',
    },
    {
        name: ['pink_lemonade'],
        background: '#f6d992',
        title: '#f6b092',
        subtitle: '#bfbfbf',
    },
    {
        name: ['creamsicle'],
        background: '#ff9869',
        title: '#fcfcf8',
        subtitle: '#bfbfbf',
    },
    {
        name: ['beach'],
        background: '#ffeead',
        title: '#88d8b0',
        subtitle: '#bfbfbf',
    },
    {
        name: ['desert_oasis'],
        background: '#fff2d5',
        title: '#332800',
        subtitle: '#bfbfbf',
    },
    {
        name: ['frozen_llama'],
        background: '#9bf2ea',
        title: '#6d44a6',
        subtitle: '#bfbfbf',
    },
    {
        name: ['ryujinscales'],
        background: '#081426',
        title: '#f17754',
        subtitle: '#bfbfbf',
    },
    {
        name: ['trackday'],
        background: '#464d66',
        title: '#e0513e',
        subtitle: '#bfbfbf',
    },
    {
        name: ['fruit_chew'],
        background: '#d6d3d6',
        title: '#5c1e5f',
        subtitle: '#bfbfbf',
    },
    {
        name: ['evil_eye'],
        background: '#0084c2',
        title: '#f7f2ea',
        subtitle: '#bfbfbf',
    },
    {
        name: ['trance'],
        background: 'linear-gradient(to right, #071d75, #e51376)',
        title: '#ffffff',
        subtitle: '#bfbfbf',
    },
    {
        name: ['fire'],
        background: 'linear-gradient(to right, #b31313, #ff9000, #fdda16)',
        title: '#ffffff',
        subtitle: '#bfbfbf',
    },
    {
        name: ['aurora'],
        background: 'linear-gradient(to right, #002c39, #015061, #007a7f, #00e980, #00ffbb)',
        title: '#ffffff',
        subtitle: '#bfbfbf',
    },
    {
        name: ['leather'],
        background: '#a86948',
        title: '#ffe4bc',
        subtitle: '#bfbfbf',
    },
    {
        name: ['fleuriste'],
        background: '#c6b294',
        title: '#405a52',
        subtitle: '#bfbfbf',
    },
    {
        name: ['dmg'],
        background: '#dadbdc',
        title: '#3846b1',
        subtitle: '#bfbfbf',
    },
    {
        name: ['catppuccin'],
        background: '#1e1e2e',
        title: '#abe9b3',
        subtitle: '#bfbfbf',
    },
    {
        name: ['snes'],
        background: '#bfbec2',
        title: '#553d94',
        subtitle: '#bfbfbf',
    },
    {
        name: ['passion_fruit'],
        background: '#7c2142',
        title: '#deb80b',
        subtitle: '#bfbfbf',
    },
    {
        name: ['blue_dolphin'],
        background: '#003950',
        title: '#ffcefb',
        subtitle: '#bfbfbf',
    },
    {
        name: ['mexican'],
        background: '#cec176',
        title: '#ffffff',
        subtitle: '#bfbfbf',
    },
    {
        name: ['husqy'],
        background: '#000000',
        title: '#c58aff',
        subtitle: '#bfbfbf',
    },
    {
        name: ['peach_blossom'],
        background: '#292929',
        title: '#e84a5f',
        subtitle: '#bfbfbf',
    },
    {
        name: ['dino'],
        background: '#ffffff',
        title: '#40d672',
        subtitle: '#bfbfbf',
    },
    {
        name: ['tron_orange'],
        background: '#0d1c1c',
        title: '#f0e800',
        subtitle: '#bfbfbf',
    },
    {
        name: ['hedge'],
        background: '#386641',
        title: '#6a994e',
        subtitle: '#bfbfbf',
    },
    {
        name: ['modern_dolch_light'],
        background: '#dbdbdb',
        title: '#8fd1c3',
        subtitle: '#bfbfbf',
    },
    {
        name: ['iv_spade'],
        background: '#0c0c0c',
        title: '#b7976a',
        subtitle: '#bfbfbf',
    },
    {
        name: ['iv_clover'],
        background: '#a0a0a0',
        title: '#573e40',
        subtitle: '#bfbfbf',
    },
    {
        name: ['cheesecake'],
        background: '#fdf0d5',
        title: '#892948',
        subtitle: '#bfbfbf',
    },
    {
        name: ['synthwave'],
        background: '#2c263c',
        title: '#cf2ba2',
        subtitle: '#f1914c',
    },
];
exports.default = themes;
//# sourceMappingURL=themes.js.map