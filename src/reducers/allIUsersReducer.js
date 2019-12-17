const AllInfoReducer = (state = [], action) => {
    switch (action.type) {
        case 'allUsers':
            state = action.payload.slice();
            break;
        case 'editUser':
            let index
            state.find((us, i) => {
                index = i;
                return us.id === action.payload.id 
            });
            state[index] = {...action.payload};
            break;
        default:
            return state;
    }
    return state;
}

export default AllInfoReducer;