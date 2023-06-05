import { React, PureComponent } from 'react'
import { Social } from '../atoms'

class Footer extends PureComponent {
  render () {
    return (
      <footer>
        <Social
          favicon={"Youtube"} />
        <Social 
          favicon={"Twitter"} />
        <Social
          favicon={"Email"} />
      </footer>
    )
  }
}

export default Footer