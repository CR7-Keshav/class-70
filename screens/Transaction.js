import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity,TextInput } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";


export default class TransactionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domState: "normal",
      hasCameraPermissions: null,
      scanned: false,
      scannedData: ""
    };
  }

  getCameraPermissions = async domState => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({
      /*status === "granted" is true when user has granted permission
          status === "granted" is false when user has not granted the permission
        */
      hasCameraPermissions: status === "granted",
      domState: domState,
      scanned: false
    });
  };

  handleBarCodeScanned = async ({ type, data }) => {
    this.setState({
      scannedData: data,
      domState: "normal",
      scanned: true
    });
  };

  render() {
    const { domState, hasCameraPermissions, scannedData, scanned } = this.state;
    if (domState === "scanner") {
      return (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.lowerContainer}> 
        <View style={styles.textInPutContainer}> 
            <TextInput style={styles.textInput}
            placeholder={"Book ID"}
            placeholderTextColor={"#ffffff"}
            value={bookId}/>
            <TouchableOpacity style={styles.scanButton}>
                <Text style={scanButtonText}>scan</Text>
            </TouchableOpacity>
            </View>
            <View style={[styles.textInPutContainer,{marginTop:25}]}> 
            <TextInput style={styles.textInput}
            placeholder={"Student ID"}
            placeholderTextColor={"#ffffff"}
            value={studentId}/>
            <TouchableOpacity style={styles.scanButton}>
                <Text style={scanButtonText}>scan</Text>
            </TouchableOpacity>
            </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 15
  },
  button: {
    width: "43%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48D20",
    borderRadius: 15
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF"
  }
});