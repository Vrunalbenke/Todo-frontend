import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-simple-toast';
import styles from './style';

const Home = () => {
  const [todolist, setTodoList] = useState();
  const [input, setInput] = useState('');
  const [btn, setBtn] = useState(false);
  const baseURL = 'http://192.168.0.104:3000';
  const button = btn ? 'Save' : 'Add';
  const [AGID, setAGID] = useState(null);

  const getData = async () => {
    try {
      const resp = await axios.get(`${baseURL}/`);
      setTodoList(resp.data);
      console.log(resp.data)
    } catch (error) {
      console.log(error);
      Toast.show('Failed to get todo. Please try again.', Toast.SHORT);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const AddTodo = async () => {
    if (input.trim().length == 0) {
      return 0;
    } else if (button == 'Add') {
      const todo = {
        id: Math.random(),
        task: input,
      };
      try {
        const resp = await axios.post(`${baseURL}/AddTodo`, todo);
        const toastMessage = resp.data.message;
        Toast.show(toastMessage, Toast.SHORT);
        getData();
        setInput('')
      } catch (error) {
        console.log(error);
        Toast.show('Failed to add todo. Please try again.', Toast.SHORT);
      }
      
    } 
    else if (button == 'Save') {
      const todo = {
        id: AGID,
        task: input,
      };
      try {
        const resp = await axios.put(`${baseURL}/EditTodo`, todo);
        const toastMessage = resp.data.message;
        Toast.show(toastMessage, Toast.SHORT);
        getData();
      } catch (error) {
        console.log(error);
        Toast.show('Failed to edit todo. Please try again.', Toast.SHORT);
      }
      setInput('')
      setBtn(false)
      getData()
    }
  };

  const handleEdit = async (id, task) => {
    setBtn(true)
    setInput(task);
    setAGID(id);
  };

  const handleDelete = async(id) => {
    const deleteID = {
      id:id
    }
    console.log(deleteID,'🚀🚀🚀🚀🚀🚀')
    try {
      const resp = await axios.delete(`${baseURL}/DeleteTodo`,deleteID);
      const toastMessage = resp.data.message;
      Toast.show(toastMessage, Toast.SHORT);
      getData();
    } catch (error) {
      console.log(error);
        Toast.show('Failed to delete todo. Please try again.', Toast.SHORT);
      }
    }

  return (
    <View style={styles.root}>
      <View style={styles.InputContainer}>
        <TextInput
          placeholder="Add todo here"
          style={styles.TextInput}
          placeholderTextColor={'#000'}
          value={input}
          onChangeText={item => setInput(item)}
        />
        <TouchableOpacity style={styles.TOPContainer} onPress={AddTodo}>
          <Text style={styles.BTNText}>{button}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.TodoContainer}>
        {todolist?.map(item => {
          return (
            <View key={item?.id} style={styles.SingleTodo}>
              <Text style={styles.todoText}>{item?.task}</Text>
              <View style={styles.IconContainer}>
                <TouchableOpacity
                  onPress={() => handleEdit(item.id, item.task)}>
                  <Ionicons name="create-outline" size={20} color={'green'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                  <Ionicons name="trash-outline" size={20} color={'red'} />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Home;
