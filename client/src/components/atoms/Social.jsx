import React, { PureComponent } from 'react'

class Social extends PureComponent {
  render () {
    return (
      <>
        {/* favicon */}
        <i className="{this.props.favicon}"></i>
      </>
    )
  }
}

export default Social