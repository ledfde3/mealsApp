import {View, Text, StyleSheet } from 'react-native'

function MealDetails ({duration, complexity,affordability}){
    return(

        <View style={StyleSheet.details}>
            <Text style={styles.detalItem}>{duration}</Text>
            <Text style={styles.detalItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detalItem}>{affordability.toUpperCase()}</Text>
        </View>
    )
    
}

export default MealDetails

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alingItem: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detalItem: {
        margingHorizontal:4,
        fontSize: 12
    }
})