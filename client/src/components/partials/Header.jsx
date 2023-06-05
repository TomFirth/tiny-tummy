import { React, PureComponent } from 'react'
import { Settings } from '../atoms'

class Header extends PureComponent {
  render () {
    return (
      <header>
        <img src="/images/logo.png" alt="" id="logo" />
        {this.props.isAuthed &&
          <Settings />
        }
      </header>
    )
  }
}

export default Header
