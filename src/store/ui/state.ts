export interface UiStateInterface {
  isSideMenuOpen: boolean;
}

function state(): UiStateInterface {
  return {
    isSideMenuOpen: true,
  };
}

export default state;
