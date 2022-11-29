import React                    from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ROUTES                   from '../../constants/Routes';
import TodayEventScreen         from '../../screens/TodayEventScreen/TodayEventScreen';
import Tabs                     from '../Tabs/Tabs';


const MainStack = createStackNavigator();

function MainStackScreen() {
    return (
        <MainStack.Navigator
            detachInactiveScreens = {false}
            screenOptions         = {{ headerShown : false }}
        >
            <MainStack.Screen
                name      = {ROUTES.TABS}
                component = {Tabs}
            />
            <MainStack.Screen
                name      = {ROUTES.TODAY_EVENT_SCREEN}
                component = {TodayEventScreen}
                options   = {{ gestureEnabled : false }}
            />
        </MainStack.Navigator>
    );
}

export default React.memo(MainStackScreen);
