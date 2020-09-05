export const initialState = {
    isAvatarHidden: false
}

export const actionTypes = {
    SET_AVATAR_STATE: 'SET_AVATAR_STATE'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_AVATAR_STATE:
            return { ...state, isAvatarHidden: action.isAvatarHidden };
        default:
            return state;
    }
}

export default reducer;