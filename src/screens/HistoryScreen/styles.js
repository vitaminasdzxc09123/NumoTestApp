import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const styles = StyleSheet.create({
         container: { 
            borderColor  : colors.BORDER,
            borderRadius : 12,
            padding      : 12,
            borderWidth  : 1,
            marginBottom : 22
       },
         iconContainer: {
            marginTop       : 16,
            borderRadius    : 32,
            alignItems      : 'center',
            justifyContent  : 'center',
            width           : 64,
            height          : 64,
        },
         titleJoke: {
            fontSize   : 24,
            lineHeight : 38,
            fontWeight : '600'
        }
        })
export default styles

