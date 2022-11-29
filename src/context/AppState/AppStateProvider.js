/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
import PropTypes           from 'prop-types';

import { AppStateContext } from './AppStateContext';

export function AppStateProvider({ children }) {
    const [ tabBarOptions, setTabBarOptions ] = useState({});

    const context = {
        setTabBarOptions,
        tabBarOptions
    };

    return (
        <AppStateContext.Provider value = {context}>
            {children}
        </AppStateContext.Provider>
    );
}

AppStateProvider.propTypes = {
    children : PropTypes.object
};

AppStateProvider.defaultProps = {
    children : null
};

