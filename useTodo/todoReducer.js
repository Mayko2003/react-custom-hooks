

export const todoReducer = (state = [], action = {}) => {
    switch (action.type) {
        case '[TODO] Add':
            return [...state, action.payload];
        case '[TODO] Delete':
            return state.filter(todo => todo.id !== action.payload);
        case '[TODO] Toggle':
            return state.map(todo => (todo.id === action.payload) ? { ...todo, done: !todo.done } : todo);
        default:
            return state;
    }
}