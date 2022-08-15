import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { UiStateInterface } from './state';

const getters: GetterTree<UiStateInterface, StateInterface> = {
  sideMenuOpen(state) {
    // your code
    return state.isSideMenuOpen;
  },
};

export default getters;
