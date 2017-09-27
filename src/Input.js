import React, { Component } from 'react'

class Input extends Component {
    handleChange(e) {
        this.props.onChange(e.target.value)
    }

    disabled() {
        if (this.props.disablingFactors) {
            return this.props.disablingFactors.some(factor => {
                return factor.fn(factor.prop) === true
            })
        } else {
            return false
        }
    }

    render() {
        return <label>
            {this.props.label}
            <input type="text"
                   onChange={this.handleChange.bind(this)}
                   disabled={this.disabled()}/>
        </label>
    }
}

export default Input