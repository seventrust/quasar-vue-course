import { MutationTree } from 'vuex';
import { UiStateInterface } from './state';

const mutation: MutationTree<UiStateInterface> = {
  toggleSideMenu(state: UiStateInterface) {
    // your code
    state.isSideMenuOpen = !state.isSideMenuOpen;
  },
};

export default mutation;
