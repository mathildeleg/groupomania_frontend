import React, { Component } from 'react'
import { customFetch } from './fetch'
import { ClientURL } from './clientURL'

const AuthContext = React.createContext()

class AuthProvider extends Component {
  // Context state
  state = {
    token: null,
    profile: {},
  }

  componentDidMount(){
    if(this.state.token != null){
      this.fetchProfile()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.token !== this.state.token) {
      this.fetchProfile()
    }
  }

  fetchProfile = async () => {
    const profile = await customFetch(ClientURL.User.profile())
    this.setState({ profile })
  }

  // Method to update state
  setToken = (token) => {
    this.setState((prevState) => ({ token }))
  }

  render() {
    const { children } = this.props
    const { token, profile } = this.state
    const { setToken } = this

    return (
      <AuthContext.Provider
        value={{
          token,
          setToken,
          profile,
        }}
      >
        {children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContext

export { AuthProvider }