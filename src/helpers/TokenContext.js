import React, { Component } from 'react'

const TokenContext = React.createContext()

class TokenProvider extends Component {
  // Context state
  state = {
    token: null,
  }

  // Method to update state
  setToken = (token) => {
    this.setState((prevState) => ({ token }))
  }

  render() {
    const { children } = this.props
    const { token } = this.state
    const { setToken } = this

    return (
      <TokenContext.Provider
        value={{
          token,
          setToken,
        }}
      >
        {children}
      </TokenContext.Provider>
    )
  }
}

export default TokenContext

export { TokenProvider }