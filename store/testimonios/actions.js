export default {
    async cargarTestimonios({ commit }) {
        const { data } = await this.$axios.get(`${this.$config.apiUrl}/api/testimonios?populate=*`);

        commit('setTestimonios', data.data);
    }
}