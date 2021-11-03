import React, { Component } from 'react'
import { customFetch } from './fetch'
import { ClientURL } from './clientURL'

// create a context
const AuthContext = React.createContext()
class AuthProvider extends Component {
  // context state
  state = {
    token: null,
    profile: {},
  }

  // upon arriving on the page, if there's a token, then fetch the profile of the user
  componentDidMount(){
    if(this.state.token != null){
      this.fetchProfile()
    }
  }

  // fetch profile only if the token is OK 
  componentDidUpdate(prevProps, prevState) {
    if (prevState.token !== this.state.token) {
      this.fetchProfile()
    }
  }

  // fetch profile
  fetchProfile = async () => {
    const profile = await customFetch(ClientURL.User.profile())
    // put profile info in the state
    this.setState({ profile })
  }

  // method to update state
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