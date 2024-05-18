import { useState } from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);


  function startAddgoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }


  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentGoals=>[...currentGoals, {text: enteredGoalText, id: Math.random().toString()}]);
    endAddGoalHandler();
  }


  function deleteGoalHandler(id){
    setCourseGoals(currentGoals=>{
      return currentGoals.filter((goal)=>goal.id !== id);
    });
  }


  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={startAddgoalHandler} color={"#a065ec"}/>
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={(itemData) => {
        return (
          <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>);
         }}/>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,

  },
  goalsContainer:{
    flex:5,
  }
});


// npm install -g react-devtools
// best tool to debug the app you can start it with command
// react-devtools