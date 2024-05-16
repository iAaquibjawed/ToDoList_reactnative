import { StyleSheet } from 'react-native';
import {View, TextInput, Button} from 'react-native';
function GoalInput(){
    return (
        <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={goalInputHandler}/>
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
    );
}


export default GoalInput 


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    
      },
      textInput:{
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '80%',
        padding: 8,
        marginRight:8,
      },
});