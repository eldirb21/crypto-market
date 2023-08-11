import TabNav from './tabNav';

const {default: Asset} = require('../views/asset');
const {default: Home} = require('../views/home');
const {default: Market} = require('../views/market');
const {default: Mine} = require('../views/mine');

const dataTab = [s
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Market',
    component: Market,
  },
  {
    name: 'Assets',
    component: Asset,
  },
  {
    name: 'Mine',
    component: Mine,
  },
];

const dataStack = [
  {
    name: 'TabNav',
    component: TabNav,
  },
];

export {dataStack, dataTab};
