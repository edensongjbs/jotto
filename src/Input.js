import React from 'react'
import { connect } from 'react-redux'

class Input extends React.Component {
    render() {
        const contents = this.props.success
        ? null
        : (<form className="form-inline">
            <input
                type="text"
                data-test="input-box" 
                className="mb-2 mx-sm-3" 
                placeholder="enter guess"/>
            <button
                data-test="submit-button"
                type="submit"
                className="btn btn-primary">
                Submit
            </button>
        </form>)
        return (
            <div data-test="component-input">
                {contents}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Input)