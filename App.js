import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';


export default function App() {
  const [enteredGoalText, SetEnteredGoalText] = useState('');

  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText){
    SetEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
    setCourseGoals(currentGoals=>[...currentGoals, {text: enteredGoalText, key: Math.random().toString()}]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={goalInputHandler}/>
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={(itemData) => {
        return (
          <GoalItem text={itemData.item.text} />);
         }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,

  },
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
  goalsContainer:{
    flex:5,
  },
  
});
