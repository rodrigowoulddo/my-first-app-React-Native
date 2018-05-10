import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  state = {
      placename: '',
      places: []
  };

  placeNameChangeHandler = val =>{
      this.setState({
         placename: val
      });
  };

  placeSubmitHandler = () => {
      if(this.state.placename.trim() === "") return;

      this.setState(prevState => {
          return{
              places: prevState.places.concat(prevState.placename)
          }
      });
  };

    render() {
        const placesOutput = this.state.places.map((place,i)=>(
            <Text key={i}>{place}</Text>
        ));
    return (
      <View style={styles.container}>
          <View style={styles.inputContainer}>
              <TextInput
                  style={styles.placeInput}
                  value={this.placename}
                  placeholder={"An awesome place"}
                  onChangeText={this.placeNameChangeHandler}
              />
              <Button
                  style = {styles.placeButton}
                  title={"Add"}
                  onPress={this.placeSubmitHandler}
              />
          </View>
          <View>
              {placesOutput}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    container: {
       padding: 50,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'flex-start'
    },

    inputContainer:{
       //flex: 1,
        width: "100%",
       flexDirection: "row",
       justifyContent: "space-between"
    },

    placeInput: {
        width: "70%"
    },

    placeButton: {
        width: "30%"
    }
});
