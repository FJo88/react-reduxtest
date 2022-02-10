//Actions
export const add = (value) => ({
    type: "add",
    payload: {
        value:value
    }
});
export const sub = (value) => ({
    type: "sub",
    payload: {
        value:value
    }
});
export const mul = (value) => ({
    type: "mul",
    payload: {
        value:value
    }
});


//State
const initialState = {
    count: 0
};

//Reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case "add":
            return {...state, count: state.count + action.payload.value};
        case "sub":
            return {...state, count: state.count - action.payload.value};
        case "mul":
            return {...state, count: state.count * action.payload.value};
        default:
            return state;
    };
   
}
export default reducer;
