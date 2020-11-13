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
        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsucessfulGuess))
            const newState = store.getState()
            console.log(newState)
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
        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord))
            const newState = store.getState()
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [{
                    guessedWord: secretWord,
                    letterMatchCount: 5
                }]
            }
            expect(newState).toEqual(expectedState)
        })
    })
    describe('some guessed words', () => {
        const firstGuess = 'cat'
        const initialState = { 
            secretWord, 
            guessedWords: [{
                guessedWord: firstGuess,
                letterMatchCount: 2
            }]}
        let store
        beforeEach(() => {
            store = storeFactory(initialState)
        })
        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsucessfulGuess))
            const newState = store.getState()
            const expectedState = {
                secretWord,
                success: false,
                guessedWords: [{
                    guessedWord: firstGuess,
                    letterMatchCount: 2
                }, {
                    guessedWord: unsucessfulGuess,
                    letterMatchCount: 3
                }]
            }
            expect(newState).toEqual(expectedState)
        })
        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord))
            const newState = store.getState()
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [{
                    guessedWord: firstGuess,
                    letterMatchCount: 2
                }, {
                    guessedWord: secretWord,
                    letterMatchCount: 5
                }]
            }
            expect(newState).toEqual(expectedState)
        })
    })
})