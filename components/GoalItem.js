import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";


function GoalItem(props){
    return (
        <Pressable onPress={props.onDeleteItem}>
          <View style={styles.goalItem}><Text style={styles.goalText}>{props.text}</Text></View>
        </Pressable>
    
    );
};


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