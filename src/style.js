import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
    root: {
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 40,
    },
    InputContainer: {
      flexDirection: 'row',
      gap: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    TextInput: {
      padding: 10,
      fontSize: 20,
      borderRadius: 10,
      backgroundColor: 'lightblue',
      flex: 2.5,
    },
    TOPContainer: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 10,
      backgroundColor: 'pink',
      justifyContent: 'center',
      alignItems: 'center',
    },
    BTNText: {
      fontSize: 18,
      color: '#000',
      fontWeight: '600',
    },
    TodoContainer: {
      width: Dimensions.get('screen').width - 40,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: 30
    },
    SingleTodo:{
      width:'100%',
      backgroundColor:'lightblue',
      paddingHorizontal:10,
      paddingVertical:10,
      borderRadius:15,
      gap: 10
    },
    todoText: {
      fontSize: 18,
      color: '#000',
      fontWeight: '500',
    }, 
    IconContainer:{
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'flex-end',
      gap: 5
    }
  });
  
  export default styles;