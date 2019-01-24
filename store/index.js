import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = () => new Vuex.Store({
	state: {
		hospitalList: []
	},
	mutations: {
		add(state, { list }) {
			// console.log(list);

			state.hospitalList = [ ...list ];
		}
	},
	actions: {
		async searchList({ commit }) {
			const { data } = await axios.get('https://dev-sc.yunqueyi.com/api-ws/hospitals/?pageNum=1&pageSize=30&name=%E4%B8%8A%E6%B5%B7');
			commit('add', { list: data.data });	
		}
	}
});

export default store;
