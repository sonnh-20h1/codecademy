const initialState = {
    anhem:"ânnanahan"
}
const items = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}

export default items;