/* eslint-disable max-lines-per-function */
import React, {
    useCallback
}                                   from 'react';
import {
    View,
    KeyboardAvoidingView,
    Platform,
    Text,
}                                   from 'react-native';
import { useSafeAreaInsets }        from 'react-native-safe-area-context';
import PropTypes                    from 'prop-types';
import { KeyboardAwareScrollView }  from 'react-native-keyboard-aware-scroll-view';

import styles                       from './styles';

const DEFAULT_INSET = 72;
const TAB_BAR_HEIGHT = 30;

function ScreenWrapper({
    children,
    useTopInset,
    keyboardContainerStyle,
    useScroll,
    useBottomInset,
    containerStyle,
    useAvoidingView,
    headerTitle,
    useTabBarPusher,
    useHeader,
    keyboardVerticalOffset,
}) {
    const insets = useSafeAreaInsets();
     
    const calculatePadingTop = 72 - insets.top 

    const topInset    =  insets.top + calculatePadingTop || DEFAULT_INSET;
    const bottomInset = (insets.bottom * 2) || DEFAULT_INSET;

    const topInsetStyle    = { paddingTop : useTopInset ? topInset : DEFAULT_INSET };
    const bottomInsetStyle = { marginBottom : useBottomInset  ? bottomInset : 0 };

    const tabBarPusherStyles = { height : TAB_BAR_HEIGHT };

    const renderView = useCallback(() => (
        <View
            style = {[
                styles.container,
                topInsetStyle,
                bottomInsetStyle,
                containerStyle
            ]}
        >
            {children}
            {Boolean(useTabBarPusher) && <View style = {tabBarPusherStyles} />}
        </View>
    ));

    const renderScrollView = useCallback(() => (
        <KeyboardAwareScrollView
            showsVerticalScrollIndicator = {false}
            keyboardShouldPersistTaps    = {'handled'}
        >
            {renderView()}
        </KeyboardAwareScrollView>
    ));

    const renderHeader = useCallback(() => {
        return (
            <View style = {[ styles.headerContainer, { paddingTop : topInset } ]} >
                <View style   = {styles.headerContent}>
                    <Text style = {styles.titleHeader}>
                        {headerTitle}
                    </Text>
                </View>
            </View>
        );
    }, [ headerTitle ]);

    return (
        <KeyboardAvoidingView
            enabled                = {useAvoidingView}
            behavior               = {Platform.OS === 'ios' ? 'padding' : 'height'}
            style                  = {[ styles.keyboardContainer, keyboardContainerStyle ]}
            keyboardVerticalOffset = {keyboardVerticalOffset}
        >
            <View style = {styles.block}>
                {Boolean(useHeader) && renderHeader() }
                {Boolean(useScroll) ? renderScrollView() : renderView() }
            </View>
        </KeyboardAvoidingView>
    );
}

ScreenWrapper.propTypes = {
    useTabBarPusher         : PropTypes.bool,
    keyboardContainerStyle  : PropTypes.object,
    useHeader               : PropTypes.bool,
    headerTitle             : PropTypes.string,
    containerStyle          : PropTypes.object,
    children                : PropTypes.node.isRequired,
    useTopInset             : PropTypes.bool,
    useBottomInset          : PropTypes.bool,
    useScroll               : PropTypes.bool,
    useAvoidingView         : PropTypes.bool,
    keyboardVerticalOffset  : PropTypes.number,
};

ScreenWrapper.defaultProps = {
    useTabBarPusher         : true,
    keyboardContainerStyle  : {},
    headerTitle             : '',
    useHeader               : true,
    useTopInset             : false,
    useBottomInset          : false,
    useScroll               : true,
    useAvoidingView         : false,
    containerStyle          : {},
    keyboardVerticalOffset  : 0,
};

export default React.memo(ScreenWrapper);
