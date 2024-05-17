import { useState } from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);


  function startAddgoalHandler(){

    setModalIsVisible(true);

  }


  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentGoals=>[...currentGoals, {text: enteredGoalText, id: Math.random().toString()}]);
  }


  function deleteGoalHandler(id){
    setCourseGoals(currentGoals=>{
      return currentGoals.filter((goal)=>goal.id !== id);
    });
  }


  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={startAddgoalHandler} color={"#5e0acc"}/>
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={(itemData) => {
        return (
          <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>);
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
  goalsContainer:{
    flex:5,
  }
});
