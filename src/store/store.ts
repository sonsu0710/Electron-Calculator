import {createStore} from "vuex";

interface State {
    result: string[];
}

export default createStore<State>({
    state: {
        result: []
    },
    getters: {
        getResultViews: function (state) {
            return state.result.length === 0 ? 0 : state.result.join('');
        },
        getResultCal: function (state) {

        }
    },
    mutations: {
        setResultStrings: function (state, payload) {
            const result = state.result;

            const numArr = [];
            for (let i = 0; i < 10; i++) {
                numArr.push(String(i));
            }
            const operator = ['%', '÷', 'x', '-', '+',];


            // todo 숫자 입력
            if (numArr.includes(payload)) result.push(payload);

            // todo 연산자 입력
            // 아무것도 입력되지 않은 상태라면 에러 얼러트
            // 연산자만 연속적으로 입력되는 경우, 마지막에 입력된 연산자로 교체
            // 마지막에 연산자가 입력된 상태에서 % 기호 입력시 에러
            if (state.result.length === 0 && operator.includes(payload)) alert('완성되지 않은 수식입니다');
            else if (operator.includes(state.result[state.result.length - 1]) && payload === '%') alert('완성되지 않은 수식입니다');
            else if (operator.includes(payload) && operator.includes(state.result[state.result.length - 1])) {
                state.result.pop();
                state.result.push(payload);
            } else if (operator.includes(payload)) state.result.push(payload);

            // todo 괄호 수식 입력
            //
            const getBracket = (arr: string[]) => { return arr.filter(item => item === '(') }
            if (
                payload === '( )' &&
                getBracket(state.result).length % 2 === 1 &&
                !Number.isNaN(Number(state.result[state.result.length - 1]))
            ) state.result.push(')');
            else if (payload === '( )') state.result.push('(');



            // todo +/- 선택시 (- 입력. 이미 입력된 경우 되돌리기
            if (payload === '+/-' && state.result[0] === '(-') state.result.shift();
            else if (payload === '+/-') state.result.unshift('(-');

            // todo 아무것도 입력되지 않은 상태에서 . 입력시 0 뒤에 . 이 붙도록.
            if (state.result.length === 0 && payload === '.') state.result.push('0.');
            else if (payload === '.') state.result.push('0');

            // todo C 버튼 클릭시 초기화
            if (payload === 'C') state.result = [];
        }
    }
});