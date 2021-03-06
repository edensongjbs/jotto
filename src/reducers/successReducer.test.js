import { actionTypes } from '../actions'
import successReducer from './successReducer'

test('returns default initial state of "false" when no action is passed', () => {
    const newState = successReducer()
    expect(newState).toBe(false)
})

test('returns state of "true" when action with type CORRECT_GUESS is received', () => {
    const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS})
    expect(newState).toBe(true)
})