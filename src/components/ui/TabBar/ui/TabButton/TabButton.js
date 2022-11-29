import React, { useMemo }  from 'react';
import { Text }            from 'react-native';
import PropTypes           from 'prop-types';

import AnimatedPress       from '../../../../base/AnimatedPress';

import styles              from './styles';
import { colors }          from '../../../../../theme';


function TabButton({ label, icon: Icon, isFocused,  onPress }) {

    const colorItem = useMemo(() => {
        return  isFocused ?  colors.ACTIVE_ICON : colors.IN_ACTIVE_ICON
    }, [ isFocused ]);

    return (
        <AnimatedPress
            style   = {styles.container}
            onPress = {onPress}
            scale   = {0.95}
        >
            <Icon color = {colorItem} />
            <Text style = {[ styles.label, { color : colorItem } ]} >
                {label}
            </Text>
        </AnimatedPress>
    );
}

TabButton.propTypes = {
    label     : PropTypes.string.isRequired,
    isFocused : PropTypes.bool.isRequired,
    onPress   : PropTypes.func.isRequired,
    icon      : PropTypes.func.isRequired
};

export default React.memo(TabButton);
