import React from 'react'
import './styling/App.css';
import { Footer, Header, Main } from './components/partials'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthed: true,
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header
          isAuthed={this.state.isAuthed}
        ></Header>
        <Main
          isAuthed={this.state.isAuthed}
        ></Main>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
