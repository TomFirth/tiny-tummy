import { React, PureComponent } from 'react'
import { Button } from "react-bootstrap"

class Login extends PureComponent {
  render () {
    return (
      <main>
        {!this.props.isAuthed &&
          <>
            <Button>
              Login
            </Button>
            <Button>
              Sign up
            </Button>
          </>
        }
      </main>
    )
  }
}

export default Login