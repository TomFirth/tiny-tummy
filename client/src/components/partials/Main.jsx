import { React, PureComponent } from 'react'
import { Button } from '../atoms'

class Main extends PureComponent {
  render () {
    return (
      <main>
        Test
        {this.props.isAuthed &&
          <>
            <Button
              title="Login"
              disabled={false}
            />
            <Button
              title="Signup"
              disabled={false}
            />
          </>
        }
      </main>
    )
  }
}

export default Main