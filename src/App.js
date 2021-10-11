import logo from './logo.svg';
import './App.css';
import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import Map from './Map';

function App() {
	return <Map blockSize_p={20} /> ;
}

export default App;
