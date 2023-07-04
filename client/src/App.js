import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import './styling/App.css';
import { Footer, Header } from './components/partials'
import { Calendar, Feed, Login, Lost, Main, Nappy, Settings } from './components/pages'
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
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" component={Login} />
          <Route path="/calendar" element={
            <PrivateRoute isAuthed={this.state.isAuthed}>
              <Calendar />
            </PrivateRoute>
          } />
          <Route path="/feed" element={
            <PrivateRoute isAuthed={this.state.isAuthed}>
              <Feed />
            </PrivateRoute>
          } />
          <Route path="/main" element={
            <PrivateRoute isAuthed={this.state.isAuthed}>
              <Main />
            </PrivateRoute>
          } />
          <Route path="/nappy" element={
            <PrivateRoute isAuthed={this.state.isAuthed}>
              <Nappy />
            </PrivateRoute>
          } />
          <Route path="/settings" element={
            <PrivateRoute isAuthed={this.state.isAuthed}>
              <Settings />
            </PrivateRoute>
          } />
          <Route path="*" element={<Lost />} />
        </ Routes>
        <Footer />
      </div>
    )
  }
}

const PrivateRoute = ({
  isAuthed,
  redirectPath = '/login',
  children,
}) => {
  if (!isAuthed) {
    return <Navigate to={redirectPath} replace />
  }
  return children
}

export default App;
