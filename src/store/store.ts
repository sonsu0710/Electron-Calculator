import {createStore} from "vuex";

interface State {
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
            const numArr = [];
            for (let i = 0; i < 10; i++) {
                numArr.push(String(i+1));
            }

            if (payload === 'C') state.result = [];
            else if (!numArr.includes(payload) && state.result.length === 0) {
                alert('완성되지 않은 수식입니다');
            } else {
                state.result.push(payload);
            }

        }
    }
});