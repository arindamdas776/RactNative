import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

//  create stuff 

class Home extends React.Component {
  state = {
    toDo: "This is My First App",
    text: ["vue is Best ", "Anguler is Ok", "React is Worst"]
  }
  addTodo = () => {
    var newTodo = this.state.toDo;
    var arr = this.state.text;

    arr.push(newTodo);
    this.setState({ toDo: arr, toDo: "" });
  }


  DeleteTodo = (data) => {
    var arr = this.state.text;
    var pos = arr.indexOf(data);
    arr.splice(pos, 1);

    this.setState({ text: arr });
  }
  renderTodo = () => {
    return this.state.text.map(result => {
      return (
        <Text key={result} onPress={() => { this.DeleteTodo(result) }} >{result}</Text>
      )
    })
  }
  render() {
    return (
      <View style={styles.ViewStyle} >
        <Text>Hellow World</Text>
        <TextInput style={styles.inputStuff} onChangeText={(text) => this.setState({ toDo: text })} />
        <Button title="Add You Submit" onPress={this.addTodo} />

        {this.renderTodo()}
      </View>
    );
  }
}

const styles = {
  ViewStyle: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  inputStuff: {
    height: 40,
    borderColor: 'green',
    borderWidth: 1
  }
}

export default Home;