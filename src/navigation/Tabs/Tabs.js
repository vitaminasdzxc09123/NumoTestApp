/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-multi-comp */
import React                        from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Lightning                    from '../../assets/icons/TabBar/Lightning';
import Clock                        from '../../assets/icons/TabBar/Clock';

import TabBar                       from '../../components/ui/TabBar';

import ROUTES                       from '../../constants/Routes';
import TodayEventScreen             from '../../screens/TodayEventScreen/TodayEventScreen';
import HistoryScreen                from '../../screens/HistoryScreen';

const Tab = createBottomTabNavigator();

const LABELS = {
    [ROUTES.TODAY_EVENT_SCREEN] : 'TodayEvent',
    [ROUTES.HISTORY_SCREEN]     : 'History',
};

function Tabs() {
    const screenOptions = {
        headerShown    : false,
        gestureEnabled : false
    };

    return (
        <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen
                name      = {ROUTES.TODAY_EVENT_SCREEN}
                component = {TodayEventScreen}
                options   = {{
                    icon  : (props) =>  <Lightning {...props} />,
                    label : LABELS[ROUTES.TODAY_EVENT_SCREEN],
                    ...screenOptions
                }}
            />
            <Tab.Screen
                name      = {ROUTES.HISTORY_SCREEN}
                component = {HistoryScreen}
                options   = {{
                    icon  : (props) => <Clock {...props} />,
                    label : LABELS[ROUTES.HISTORY_SCREEN],
                    ...screenOptions
                }}
            />
        </Tab.Navigator>
    );
}

export default React.memo(Tabs);
