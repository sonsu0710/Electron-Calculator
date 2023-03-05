import {createStore} from "vuex";

interface State{
    result: string[];
}

export default createStore<State>({
    state: {
        result: []
    },
    getters: {
        getResultStrings: function (state) {
            return state.result.length === 0 ? 0 : state.result.join('');
        }
    },
    mutations: {
        setResultStrings: function (state, payload) {
            if (payload === 'C') state.result = [];
            else state.result.push(payload);
        }
    }
});