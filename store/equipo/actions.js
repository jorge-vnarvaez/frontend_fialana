export default {
    async cargarMiembros({ commit }) {
        const { data } = await this.$axios.get(`${this.$config.apiUrl}/api/miembros?populate=imagen`);

        commit('setMiembros', data.data);
    }
}