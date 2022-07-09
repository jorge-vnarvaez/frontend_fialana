export default {
    toggleNavBar(state) {
        state.navbar = !state.navbar;
    },
    hideNavBar(state) {
        state.navbar = false;
    }
}