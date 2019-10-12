export default {
    namespace: 'products',
    state: [],
    //副作用，主要是异步处理
    effects: {},
    reducers: {
        delete(state, { payload: id }) {
            return state.filter(item => item.id !== id);
        },
    },
};
