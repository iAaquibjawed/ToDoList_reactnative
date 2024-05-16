import { StyleSheet } from "react-native";


function GoalItem(){
    return (
        <View style={styles.goalItem}><Text style={styles.goalText}>{itemData.item}</Text></View>);
}


export default GoalItem;


const styles = StyleSheet.create({ 
    goalItem:{
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#530acc',
        padding: 8,
        color: 'white'
      },
      goalText:{
        color: 'white'
      }
    });