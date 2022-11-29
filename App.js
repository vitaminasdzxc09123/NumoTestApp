import React, { useEffect } from 'react';
import { LogBox }           from 'react-native';
import { Provider }         from 'react-redux';
import { AppStateProvider } from './src/context/AppState/AppStateProvider';
import { Navigation }       from './src/navigation';
import { store }            from './src/store';

function App() {
    useEffect(() => {
        LogBox.ignoreAllLogs(true);
    }, []);

    return (
        <Provider store={store}>
          <AppStateProvider>
            <Navigation />
          </AppStateProvider>
        </Provider>
    );
}

export default App;
