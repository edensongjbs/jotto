<<<<<<< Updated upstream
import { actionTypes } from '../actions'

export default (state =[], action) => {
    switch (action.type) {
        case actionTypes.GUESS_WORD:
            return [...state, action.payload]
        default:
            return state
    }
}
=======
import actionTypes from '../actions/index'

export default (state=[], action) => {
    switch(action.type) {
      case 'GUESS_WORD':
        return [...state, action.payload];
      default:
        return state;
    }
  }
>>>>>>> Stashed changes
