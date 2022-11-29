/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-no-bind */
import React, {
    useCallback,
    useEffect
}                             from 'react';
import { View }               from 'react-native';
import PropTypes              from 'prop-types';
import { useSafeAreaInsets }  from 'react-native-safe-area-context';

import { useAppState }        from '../../../context/AppState';

import TabButton              from './ui/TabButton';

import styles                 from './styles';

const DEFAULT_BOTTOM_PADDING = 10;

function TabBar({ state, descriptors, navigation }) {

    const { setTabBarOptions } = useAppState();

    const insets = useSafeAreaInsets();

    const handlePress = useCallback(({ key, name, isFocused }) => {
        const event = navigation.emit({
            type   : 'tabPress',
            target : key
        });

        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(name);
        }
    }, [ state ]);

    useEffect(() => {
        setTabBarOptions({ state, descriptors, navigation });
    }, [ state, descriptors, navigation ]);

    const renderTabButton = useCallback(({ key, name }) => {
        const { options } = descriptors[key];

        const currentRoute = state.routes[state.index];

        const isFocused = currentRoute.key == key;

        return (
            <View style = {styles.buttonContainer}>
                <TabButton
                    icon      = {options.icon}
                    label     = {options.label}
                    isFocused = {isFocused}
                    onPress   = {() => handlePress({ key, name, isFocused })}
                />
            </View>
        );
    }, [ state ]);

    return (
        <View style = {styles.container}>
            <View style = {[ styles.tabBar, { paddingBottom : insets.bottom || DEFAULT_BOTTOM_PADDING } ]}>
                {renderTabButton(state.routes[0])}
                {renderTabButton(state.routes[1])}
            </View>
        </View>
    );
}

TabBar.propTypes = {
    state       : PropTypes.object.isRequired,
    descriptors : PropTypes.object.isRequired,
    navigation  : PropTypes.object.isRequired
};

export default React.memo(TabBar);
