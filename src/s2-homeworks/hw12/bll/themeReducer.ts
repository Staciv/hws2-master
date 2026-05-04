

const initState = {
    themeId: 1
}

export const themeReducer = (state = initState, action: any): any => {// fix any
    console.log(action)
    switch (action.type) {
        // дописать
            case 'SET_THEME_ID':
                return {
                    ...state, themeId: action.id,
                }

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
