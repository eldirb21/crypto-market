import AddAsset from '../views/asset/addAsset';
import EditAsset from '../views/asset/editAsset';
import ViewAsset from '../views/asset/viewAsset';

import TabNav from './tabNav';

const {default: Asset} = require('../views/asset');
const {default: Home} = require('../views/home');
const {default: Market} = require('../views/market');
const {default: Mine} = require('../views/mine');

const dataTab = [
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
  {
    name: 'AddAsset',
    component: AddAsset,
  },
  {
    name: 'EditAsset',
    component: EditAsset,
  },
  {
    name: 'ViewAsset',
    component: ViewAsset,
  },
];

export {dataStack, dataTab};
