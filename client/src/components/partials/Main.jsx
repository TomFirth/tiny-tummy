import React, { PureComponent } from 'React'
import { Button } from '../atoms'

class Main extends PureComponent {
  render () {
    const isLoggedIn = this.props.isLoggedIn()
    return (
      <main>
        {!isLoggedIn &&
          <React.Fragment>
            <Button
              title="Login"
              disabled={false}
            />
            <Button
              title="Signup"
              disabled={false}
            />
          </React.Fragment>
        }
      </main>
    )
  }
}

export default Main