import React, { PureComponent } from 'React'
import { Button } from '../atoms'

class Header extends PureComponent {
  render () {
    return (
      <header>
        <img src="/images/logo.png" alt="" id="logo" />
        {/* Check if logged in - false */}
        <Settings
          disabled={this.props.isAuthed()} />
      </header>
    )
  }
}

export default Header
