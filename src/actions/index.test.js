import moxios from 'moxios'
import { getSecretWord } from './'
import { storeFactory } from '../../test/testUtils'

test('passing test', () => {
    
})

describe('getSecretWord action creator', () => {
    beforeEach(() => {
        moxios.install()
    })
    afterEach(() => {
        moxios.uninstall()
    })
    test('adds response word to state', () => {
        const secretWord = 'party'
        const store = storeFactory()
        moxios.wait(() => {
            console.log('in moxios')
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: secretWord
            })
        })
        console.log(getSecretWord)
        // return store.dispatch(getSecretWord())
        // .then(() => {
        //     const newState = store.getState()
        //     expect(newState.secretWord).toBe(secretWord)
        // })
    })
})