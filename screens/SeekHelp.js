import React from "react";
import {
  StyleSheet, 
  Text,
  View,
  Image,Alert,
  ImageBackground,
  ScrollView,
  TextInput,ActivityIndicator,
  TouchableOpacity,Picker,KeyboardAvoidingView,Platform
} from "react-native";
import { Fontisto,FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import firebase from 'firebase';
import db from '../config'
import { Feather } from '@expo/vector-icons';
import { Entypo } from "@expo/vector-icons";

import { Header, Icon, Avatar } from 'react-native-elements';

export default class SeekHelp extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      title: "",
      email: "",
      contact: "",
      description: "",
      money: "",
      
    };
  }

 
  help = () => {
    db.collection("help").add({
      title: this.state.title,
      contact: this.state.contact,
      description: this.state.description,
      money: this.state.money,
     
      email: this.state.email,
       image: this.state.image,
       
        });
    alert("Request sent Successfully!");
    this.props.navigation.navigate("Category");
  };
  render() {
     var icon;
    if(this.state.uploading === 'none'){
      icon = <Entypo name="upload" size={24} color="black" />
    }
    else if(this.state.uploading){
      icon = <ActivityIndicator size={'small'} color="black" />
    }
    else{ 
      icon = <Feather name="check-circle" size={24} color="black" /> 
    }
    return (
      <View style={{ flex: 2,height:"100%"}}>
        <ScrollView>
       
            <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{width:"100%",borderTopLeftRadius:30,borderTopRightRadius:30,height:"104%",alignItems:"center",backgroundColor:"#e8c488"}}> 
       
           <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <MaterialIcons name="title" size={20} color="white" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "white",
              }}
              placeholder="Title"
              placeholderTextColor="white"
              onChangeText={(val) => {
                this.setState({ title: val });
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <Fontisto name="email" size={20} color="white" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "white",
              }}
              placeholder="Email-Id"
              placeholderTextColor="white"
              onChangeText={(val) => {
                this.setState({ email: val });
              }}
            />
          </View>

         
<View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <MaterialIcons name="phone" size={20} color="white" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "white",
              }}
              placeholder="Contact No"
              placeholderTextColor="white"
              onChangeText={(val) => {
                this.setState({ contact: val });
              }}
            />
          </View>
         
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <MaterialIcons name="description" size={20} color="white" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "white",
              }}
              placeholder="Description"
              multiline = {true}
              placeholderTextColor="white"
              onChangeText={(val) => {
                this.setState({ description: val });
              }}
            />
          

</View>
 <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <MaterialIcons name="money" size={20} color="white" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "white",
              }}
              placeholder="Estimate Money Required"
              placeholderTextColor="white"
              onChangeText={(val) => {
                this.setState({ money: val });
              }}
            />
          </View>

    
           
          <TouchableOpacity
            style={{
              backgroundColor: "#6d3c09",
              width: "50%",
              height: 40,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
     marginBottom:"20%",
     marginTop:"30%"
            }}
            onPress={() => {
              if (
                this.state.title &&
                this.state.email &&
                this.state.contact &&
                this.state.description &&
                this.state.money 
                
                ) {
                this.help();
              } else {
                alert("Please fill all the details!");
              }
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Request +</Text>
          </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
