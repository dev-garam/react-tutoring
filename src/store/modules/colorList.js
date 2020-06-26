import { createAction, handleActions } from 'redux-actions'

// action
const CHANGE_INPUT = 'colorList/CHANGE_INPUT'
const INSERT = 'colorList/INSERT'
const UPDATE = 'colorList/UPDATE'
const REMOVE = 'colorList/REMOVE'

let id = 1
// action creators
export const changeInput = createAction(CHANGE_INPUT, (text) => text)
export const insert = createAction(INSERT, (color) => ({ color: color, id: id++ }))
export const update = createAction(UPDATE, (id) => id)
export const remove = createAction(REMOVE, (id) => id)

// initialState
const initialState = {
    input: '',
    list: [],
}

export default handleActions(
    {
        [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
        [INSERT]: (state, action) => ({
            ...state,
            list: state.list.concat({
                color: action.payload.color,
                id: action.payload.id,
                opacity: 1,
            }),
        }),
        [UPDATE]: (state, action) => ({
            ...state,
            list: state.list.map((item) => {
                return action.payload === item.id
                    ? { ...item, opacity: item.opacity - 0.2 }
                    : { item }
            }),
        }),
        [REMOVE]: (state, action) => ({
            ...state,
            list: state.list.filter((item) => item.id !== action.payload),
        }),
    },
    initialState
)
