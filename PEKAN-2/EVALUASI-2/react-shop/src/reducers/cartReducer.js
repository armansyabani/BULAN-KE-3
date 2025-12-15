export const cartReducer = (state, action) => {
switch (action.type) {
case "ADD_ITEM":
return { count: state.count + 1 };
case "REMOVE_ITEM":
return { count: Math.max(0, state.count - 1) };
case "CLEAR_CART":
return { count: 0 };
default:
return state;
}
};