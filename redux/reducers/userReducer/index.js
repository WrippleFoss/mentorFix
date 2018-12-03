const userReducer = (state=[],action) => {
    switch (action.type) {
        case 'USER_AUTH':
            return state;
        default:
            return state;
    }
}

export default userReducer;