import checkPropTypes from 'check-prop-types'

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, conformingProps) => {
    const expectedProps = {...conformingProps}
    const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name)
    expect(propError).toBeUndefined()
}

test('does not throw warning with expected props', () => {
    
})