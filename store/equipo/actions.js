export default {
    async cargarMiembros({ commit }) {
        const { data } = await this.$axios.get(`${this.$config.apiUrl}/items/miembros`);

        commit('setMiembros', data.data);
    }
}