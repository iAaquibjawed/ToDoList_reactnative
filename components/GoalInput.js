import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';
import { useState } from'react';



function GoalInput(props) {
    const [enteredGoalText, SetEnteredGoalText] = useState('');


    function goalInputHandler(enteredText){
        SetEnteredGoalText(enteredText);
      }


      function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        SetEnteredGoalText('');
      }

    return (
        <Modal visible={props.visible} animationType="slide">
          <View style={styles.inputContainer}>
              <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={goalInputHandler}
            value={enteredGoalText}
            />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add Goal" onPress={addGoalHandler}/>
            </View>
            <View style={styles.button}>
              <Button title="Cancel" />
            </View>
          </View>
         </View>
      </Modal>
    );
}


export default GoalInput 


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    
      },
      textInput:{
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8
      },

      buttonContainer:{
        flexDirection: 'row',
        marginTop: 16
      },
      button:{
        width: '40%',
        marginHorizontal: 8
      }
});