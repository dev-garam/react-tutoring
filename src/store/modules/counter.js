import { createAction, handleActions } from 'redux-actions'

// action
const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'
const CHANGE_COLOR = 'counter/CHANGE_COLOR'

//action creator

// export const increment = () => ({ type: INCREMENT })
// export const decrement = () => ({ type: DECREMENT })
// export const changeColor = (color) => ({ type: CHANGE_COLOR, color })

export const increment = createAction(INCREMENT)
export const decrement = createAction(DECREMENT)
export const changeColor = createAction(CHANGE_COLOR)

const initialState = {
    number: 0,
    color: '#bfcd7e',
}

// sub reducer
// export default function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state,
//                 number: state.number + 1,
//             }

//         case DECREMENT:
//             return {
//                 ...state,
//                 number: state.number - 1,
//             }

//         case CHANGE_COLOR:
//             return {
//                 ...state,
//                 color: action.payload,
//             }
//         default:
//             return state
//     }
// }

export default handleActions(
    {
        [INCREMENT]: (state, action) => ({
            ...state,
            number: state.number + 1,
        }),
        [DECREMENT]: (state, action) => ({
            ...state,
            number: state.number - 1,
        }),
        [CHANGE_COLOR]: (state, action) => ({
            ...state,
            color: action.payload,
        }),
    },
    initialState
)
