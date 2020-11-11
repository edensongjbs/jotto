import { storeFactory } from '../test/testUtils'
import { guessWord } from './actions'

describe('guessWord action dispatcher', () => {
    const secretWord = 'party'
    const unsucessfulGuess = 'train'
    describe('no guessed words', () => {
        let store
        const initialState = { secretWord }
        beforeEach(() => {
            store = storeFactory(initialState)
        })
        test('updates state correctly for unsucessful guess', () => {
            store.dispatch(guessWord(unsucessfulGuess))
            const newState = store.getState()
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsucessfulGuess,
                    letterMatchCount: 3
                }]
            }
            expect(newState).toEqual(expectedState)
        })
        test('updates state correctly for sucessful guess', () => {
            
        })
    })
    describe('some guessed words', () => {
        test('updates state correctly for unsucessful guess', () => {

        })
        test('updates state correctly for sucessful guess', () => {
            
        })
    })
})