import React, { 
  useCallback, 
  useEffect,
  useMemo,
  useState
}                             from "react";
import { Text, View }         from "react-native";
import { 
 useDispatch, 
 useSelector 
}                             from 'react-redux';
import AsyncStorage           from '@react-native-async-storage/async-storage';

import Favorite               from '../../assets/icons/Favorite'
import AnimatedPress          from "../../components/base/AnimatedPress";
import ScreenWrapper          from "../../components/ui/ScreenWrapper/ScreenWrapper";
import { getEventList }       from "../../store/actions/Event";
import { eventsListSelector } from "../../store/selector/Event";

import { colors }             from "../../theme";

import styles                 from "./styles";


function TodayEventScreen({ }) {
 const dispatch = useDispatch();

 const eventsList = useSelector(eventsListSelector);

 const [actualJoke , setActualJoke] = useState('')
 const [isFavorite , setIsFavorite] = useState(false)

   const formatingActualDate = useMemo(() => {
     return  new Date().toISOString().slice(0,10)
   }, []);

 useEffect(() => {
     dispatch(getEventList())

     const storeData = async () => {
        const saveDate = await AsyncStorage.getItem('actualSavedDate')
        const todayJoke = await AsyncStorage.getItem('todayJoke')

        setActualJoke(todayJoke)

        await AsyncStorage.setItem('joke', JSON.stringify(eventsList))
   
         if (saveDate !== formatingActualDate || !saveDate || !todayJoke ) { 

             await AsyncStorage.setItem('actualSavedDate', formatingActualDate)

             const allJokes = await AsyncStorage.getItem('jokes')

             await AsyncStorage.setItem('todayJoke', (eventsList.joke || eventsList.setup))
    
             const parsJokes = JSON.parse(allJokes) || []
  
             parsJokes.push(eventsList)

             await AsyncStorage.setItem('jokes', JSON.stringify(parsJokes))

        }
      }    
       storeData()

 }, [ actualJoke ])

     const isFavoriteButtonBg = useMemo(() => {
          return isFavorite ? colors.ACCENT_SELECTED :  colors.ACCENT  
     }, [isFavorite]);

     const isFavoriteIconBg = useMemo(() => {
         return isFavorite ? null : colors.WHITE
     }, [isFavorite]);

     const handleSetFavorite = useCallback( async () => {

        setIsFavorite(true)

         const allJokes = await AsyncStorage.getItem('jokes')

      if( JSON.parse(allJokes).length > 1) {

         const parseAll = JSON.parse(allJokes)?.at(-1)

         const newJokesList = Object.assign(parseAll , {'isFavorite': true})

         const parsJokes = JSON.parse(allJokes)

         parsJokes.push(newJokesList)

        await AsyncStorage.setItem('jokes', JSON.stringify(parsJokes))

      } else {

        const parseAll = JSON.parse(allJokes)

        const newJokesList = Object.assign(parseAll[0] , {'isFavorite': true})

        await AsyncStorage.setItem('jokes', JSON.stringify([newJokesList]))

      }
     }, [isFavorite,eventsList]);

 return (
       <ScreenWrapper
           headerTitle = 'Today'
       >
         <View style = {styles.container}>
           <Text style = {styles.titleJoke}>
             {actualJoke}
           </Text>
           <AnimatedPress 
              onPress = {handleSetFavorite}
              style   = {[styles.iconContainer,{ backgroundColor : isFavoriteButtonBg}]}>
           <Favorite colorBg={isFavoriteIconBg} />
             </AnimatedPress>
         </View>
     </ScreenWrapper>
 )
}

TodayEventScreen.propTypes = {
};

export default React.memo(TodayEventScreen);
