import React, { 
    useCallback, 
    useEffect, 
    useMemo, 
    useState
 }                              from "react";
import { FlatList, Text, View } from "react-native";
import AsyncStorage             from "@react-native-async-storage/async-storage";
import Favorite                 from '../../assets/icons/Favorite'

import ScreenWrapper            from "../../components/ui/ScreenWrapper";
import styles                   from "./styles";
import { colors }               from "../../theme";


function HistoryScreen({ route }) {

const [ jokeList , setJokeList] = useState([])

    useEffect(() => {
      const storeData = async () => {
           const jokes = await AsyncStorage.getItem('jokes');

           setJokeList(JSON.parse(jokes))
       }
       storeData()
    }, [route])

  const renderItem = useCallback(({item}) => {

   const iconStyle = item.isFavorite ? null : colors.WHITE
   const iconContainerStyle =  item.isFavorite ? colors.ACCENT_SELECTED :  colors.ACCENT  

    return (

        <View style = {styles.container}>
            <Text style = {styles.titleJoke}>
                {item?.joke || item?.setup}
           </Text>
        <View
            style = {[styles.iconContainer,{ backgroundColor : iconContainerStyle}]}>
        <Favorite  colorBg={iconStyle} />
          </View>
      </View>
    )

   }, [ jokeList ]);

    return (
        <ScreenWrapper
           useScroll   = {false}
           headerTitle = 'History'
           useBottomInset
      >
         <FlatList
            data       = {jokeList || []}
            renderItem = {renderItem}
        />
      </ScreenWrapper>
  
    )
}

HistoryScreen.propTypes = {
};

export default React.memo(HistoryScreen);
