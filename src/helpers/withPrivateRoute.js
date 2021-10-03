import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import TokenContext from './TokenContext';

export default function withPrivateRoute(WrappedComponent) {
    return class extends React.Component {
        static contextType = TokenContext;
        
        render() {
            const { token } = this.context
            const { children, ...otherProps } = this.props;
            return (
                <Route
                    render={({ location }) =>
                        token ? (
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
