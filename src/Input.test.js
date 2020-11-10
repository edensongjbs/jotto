import { shallow } from 'enzyme'
import { findByTestAttr, storeFactory } from '../test/testUtils'
import { Provider } from 'react-redux'
// import GuessedWords from './GuessedWords'
import Input from './Input'
// import store from './configureStore'

const setup = (initialState={}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store}/>).dive().dive()
    // console.log(wrapper.debug())
    return wrapper
}

setup()

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper
        beforeEach(() => {
            const initialState = {success: false}
            wrapper = setup(initialState)
        })
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })
        test('renders input box', () => {
            const component = findByTestAttr(wrapper, 'input-box')
            expect(component.length).toBe(1)
        })
        test('renders submit button', () => {
            const component = findByTestAttr(wrapper, 'submit-button')
            expect(component.length).toBe(1)
        })
    })
    describe('word has been guessed', () => {
        test('renders component without error', () => {

        })
        test('does not render input box', () => {

        })
        test('does not render submit button', () => {

        })
    })
})
