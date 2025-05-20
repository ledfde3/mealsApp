import { View, Text, Image, Pressable, StyleSheet, Platform } from "react-native";
import { useNavigation} from '@react.navigation/native'
import MealDetails from ".MealDetails"

function MealItem ({ id, title, imageUrl, duration, complexity, affordability}){
    console.log ('title', title)
    console.log ('imageUrl', imageUrl)

    const navigation  = useNavigation()

    function selectMealItemHandler(){
        navigation.navigate('MealDetail', {mealId: id}
        )
        return{
            <View style={style,MealItem}>
            <Pressable
            android_ripple={{ color: '#ccc'}}
            style = {({pressed}) =>(pressed ? style.buttonPressed: null)}
            onPress={selectMealItemHandler}>
            </Pressable>
            </View>
        }
    }
}