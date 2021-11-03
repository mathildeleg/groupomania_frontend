import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from './AuthProvider';
import { isTokenExpired } from './fetch';

export default function withPrivateRoute(WrappedComponent) {
    return class extends React.Component {
        static contextType = AuthContext;
        
        render() {
            const { token } = this.context
            const tokenExpiry = isTokenExpired(token);
            const { children, ...otherProps } = this.props;
            console.log(tokenExpiry)
            return (
                <Route
                    render={({ location }) =>
                        !tokenExpiry ? (
                            <WrappedComponent {...otherProps} />
                        ) : (
                            <Redirect
                                to={{
                                    pathname: '/login',
                                    state: { from: location },
                                }}
                            />
                        )
                    }
                />
            )
        }
    }
}
