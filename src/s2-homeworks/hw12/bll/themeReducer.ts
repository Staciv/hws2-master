const initState = {
    themeId: 1
}

type InitStateType = typeof initState

type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}

type ActionsType = ChangeThemeIdActionType

export const themeReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {// fix any
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

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({type: 'SET_THEME_ID', id}) // fix any
