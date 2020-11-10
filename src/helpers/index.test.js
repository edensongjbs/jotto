import {getLetterMatchCount} from './index'

describe('getLetterMatchCount', () => {
    const secretWord = 'party'
    test('returns the correct count when there are no matching letters', () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord)
        expect(letterMatchCount).toBe(0)
    })
    test('returns the correct count when there are 3 matching letters', () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord)
        expect(letterMatchCount).toBe(3)
    })
    test('returns the correct count when there are duplicate letters in guess', () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord)
        expect(letterMatchCount).toBe(3)
    })
})