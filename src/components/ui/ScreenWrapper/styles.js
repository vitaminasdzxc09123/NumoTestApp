import { StyleSheet } from 'react-native';
import { colors } from '../../../theme';

const styles = StyleSheet.create({
            container : {
                flex : 1,
                paddingHorizontal : 16,
            },
            keyboardContainer : {
                flex              : 1,
                backgroundColor   : colors.WHITE
            },
            block : {
                position : 'relative',
                flex     : 1
            },
            bottomContainer : {
                flex           : 1,
                alignItems     : 'center',
                justifyContent : 'flex-end'
            },
            headerContainer : {
                paddingBottom     : 24,
                borderBottomWidth : 1,
                borderColor       : colors.BORDER,
                alignItems        : 'center',
                justifyContent    : 'space-between',
                flexDirection     : 'row'
            },
            headerContent : {
                flexDirection : 'row',
                alignItems    : 'center'
            },
            titleHeader : {
                fontWeight : 'bold',
                marginLeft : 24,
                fontSize   : 24,
            },
            headerRightContent : {
                flexDirection : 'row'
            },
        })
export default styles
