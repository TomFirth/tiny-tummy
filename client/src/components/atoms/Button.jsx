import React, { PureComponent } from 'react'

class Button extends PureComponent {
  render () {
    return (
      <button
        className='big-button'
        disabled={this.props.disabled}
        onClick={this.props.handlePick}>
        {this.props.title}
      </button>
    )
  }
}

export default Button