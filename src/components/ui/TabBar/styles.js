import { StyleSheet } from 'react-native';
import { colors } from '../../../theme';

const styles = StyleSheet.create({
            container : {
                borderTopWidth : 1,
                borderColor: colors.BORDER,
                alignItems     : 'center',
                position       : 'absolute',
                bottom         : 0,
                left           : 0,
                right          : 0
            },
            tabBar : {
                flexDirection   : 'row',
                justifyContent  : 'space-around',
                backgroundColor : colors.WHITE
            },
            buttonContainer : {
                marginTop  : 20,
                width      : '50%',
                alignItems : 'center'
            },
            actionsButtonContainer : {
                width      : '20%',
                alignItems : 'center'
            }
        })

export default styles